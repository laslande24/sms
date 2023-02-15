<template>
  <div id="meetingSDKElement">
    <!-- Zoom Meeting SDK Component View Rendered Here -->
    <div id="zmmtg-root "></div>
  </div>
  <p v-if="error != null">
    {{ error }}
  </p>
</template>

<script>
import axios from 'axios'
import { ZoomMtg } from '@zoomus/websdk'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Meet',
  created() {
    ZoomMtg.setZoomJSLib('https://source.zoom.us/2.9.5/lib', '/av')
    ZoomMtg.preLoadWasm()
    ZoomMtg.prepareWebSDK()
    // loads language files, also passes any error messages to the ui
    ZoomMtg.i18n.load('en-US')
    ZoomMtg.i18n.reload('en-US')
  },

  setup() {
    const store = useStore()
    const data = ref({
      sdkKey: 'uVMpG4HJFMc3JGAGam5gdTWDs3znxNNkw6Cg',
      number: '81491481291',
      passWord: 'anp70G',
      leaveUrl: 'http://localhost:8080/student',
      role: 1,
      createMeet: 'http://127.0.0.1:8000/course/meeting',
      signatureEndpoint: 'http://127.0.0.1:4000',
      userEmail: 'aubindna@gmail.com',
      userName: store.state.user,
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
      ZoomMtg.init({
        leaveUrl: data.value.leaveUrl,
        success: (success) => {
          console.log(success)
          ZoomMtg.join({
            meetingNumber: data.value.number,
            userName: data.value.userName,
            signature: signature,
            sdkKey: data.value.sdkKey,
            userEmail: data.value.userEmail,
            passWord: data.value.passWord,
            tk: data.value.registrantToken,
            success: (success) => {
              console.log(success)
            },
            error: (error) => {
              console.log(error)
            },
          })
        },
        error: (error) => {
          console.log(error)
        },
      })
    }
    getMeeting()

    return {
      data,
      error,
    }
  },
}
</script>
<style>
#meetingSDKElement {
  padding: 5px;
  overflow: scroll;
}

#zmmtg-root {
  margin-top: 50px;
}
</style>
