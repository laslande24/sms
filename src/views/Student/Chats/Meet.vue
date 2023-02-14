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
    const data = ref({
      sdkKey: 'uVMpG4HJFMc3JGAGam5gdTWDs3znxNNkw6Cg',
      number: '81491481291',
      passWord: 'anp70G',
      role: 0,
      signatureEndpoint: 'http://127.0.0.1:8000/course/signature',
      userEmail: 'aubindna@gmail.com',
      userName: store.state.user,
      registrantToken: '',
    })
    const client = ref(ZoomMtgEmbedded.createClient())
    const error = ref(null)
    const getSignature = () => {
      axios
        .post(data.value.signatureEndpoint, {
          number: data.value.number,
          role: data.value.role,
        })
        .then((res) => {
          console.log(res.data.data)
          if (res.data.success) {
            startMeeting(res.data.data.token.signature)
          }
          error.value = res.data.error
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
                text: 'Custom Button',
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
    getSignature()

    return {
      data,
      error,
    }
  },
}
</script>
<style></style>
