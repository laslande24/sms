<template>
  <div id="meetingSDKElement">
    <!-- Zoom Meeting SDK Component View Rendered Here -->
  </div>
  <p v-if="error != null">
    {{ error }}
  </p>
</template>

<script>
import axios from 'axios'
import ZoomMtgEmbedded from '@zoomus/websdk/embedded'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { base_link, meet_link } from '@/composables/config'

export default {
  name: 'Meet',
  created() {},
  props: ['id', 'topic'],

  setup(props) {
    const store = useStore()
    const client = ref(ZoomMtgEmbedded.createClient())
    const data = ref({
      sdkKey: 'uVMpG4HJFMc3JGAGam5gdTWDs3znxNNkw6Cg',
      number: '',
      passWord: '',
      leaveUrl: base_link + '/teacher',
      role: 1,
      createMeet: base_link + '/course/meeting',
      signatureEndpoint: meet_link,
      userEmail: store.state.user.email,
      userName: store.state.user.username,
      registrantToken: '',
      topic: props.topic,
    })
    const error = ref(null)

    const getMeeting = () => {
      axios
        .post(data.value.createMeet, {
          topic: data.value.topic,
          email: data.value.userEmail,
          course_id: props.id,
        })
        .then((res) => {
          data.value.number = res.data.data['meeting_number']
          data.value.passWord = res.data.data.password
          console.log(data.value.number)
          getSignature()
        })
        .catch((error) => {
          console.log(error)
          // console.log("good")
        })
    }
    const getSignature = () => {
      axios
        .post(data.value.signatureEndpoint, {
          meetingNumber: data.value.number,
          role: data.value.role,
        })
        .then((res) => {
          console.log(res.data)

          startMeeting(res.data.signature)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    const startMeeting = (signature) => {
      let meetingSDKElement = document.getElementById('meetingSDKElement')

      client.value.init({
        debug: true,
        zoomAppRoot: meetingSDKElement,
        language: 'en-US',
        customize: {
          meetingInfo: [
            'topic',
            'host',
            'mn',
            'pwd',
            'telPwd',
            'invite',
            'participant',
            'dc',
            'enctype',
          ],
          toolbar: {
            buttons: [
              {
                text: 'Goal',
                className: 'CustomButton',
                onClick: () => {
                  console.log('custom button')
                },
              },
            ],
          },
        },
      })

      client.value.join({
        sdkKey: data.value.sdkKey,
        signature: signature,
        meetingNumber: data.value.number,
        password: data.value.passWord,
        userName: data.value.userName,
        userEmail: data.value.userEmail,
        tk: data.value.registrantToken,
      })
    }
    getMeeting()

    return {
      data,
      error,
      startMeeting,
    }
  },
}
</script>
<style></style>
