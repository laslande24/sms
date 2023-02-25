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

export default {
  name: 'Meet',
  created() {},

  setup() {
    const store = useStore()
    const client = ref(ZoomMtgEmbedded.createClient())
    const data = ref({
      sdkKey: 'uVMpG4HJFMc3JGAGam5gdTWDs3znxNNkw6Cg',
      number: '81491481291',
      passWord: 'anp70G',
      leaveUrl: 'http://localhost:8080/student',
      role: 1,
      createMeet: 'http://127.0.0.1:8000/course/meeting',
      signatureEndpoint: 'http://127.0.0.1:4000',
      userEmail: 'aubindna@gmail.com',
      userName: store.state.user.username,
      registrantToken: '',
      topic: 'Physic: Simple harmonic motion',
    })
    const error = ref(null)

    const getMeeting = () => {
      axios
        .post(data.value.createMeet, {
          topic: data.value.topic,
          email: data.value.userEmail,
        })
        .then((res) => {
          console.log(res.data.data)
          data.value.number = res.data.data.number
          data.value.passWord = res.data.data.password
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
