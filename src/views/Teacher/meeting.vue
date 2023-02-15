<template>
  <main>
    <h1>Zoom Meeting SDK Sample Vue.js 2</h1>
    <button @click="getMeeting">Start meeting</button>
  </main>
</template>

<script>
import axios from 'axios'
import { ZoomMtg } from '@zoomus/websdk'

export default {
  name: 'meeting',
  created() {
    ZoomMtg.setZoomJSLib('https://source.zoom.us/2.9.5/lib', '/av')
    ZoomMtg.preLoadWasm()
    ZoomMtg.prepareWebSDK()
    // loads language files, also passes any error messages to the ui
    ZoomMtg.i18n.load('en-US')
    ZoomMtg.i18n.reload('en-US')
  },

  mounted() {
    ZoomMtg.inMeetingServiceListener('onUserJoin', (data) => {
      console.log('inMeetingServiceListener onUserJoin', data)
    })
  },
  data() {
    return {
      // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
      sdkKey: 'uVMpG4HJFMc3JGAGam5gdTWDs3znxNNkw6Cg',
      leaveUrl: 'http://localhost:8081',
      meetingNumber: '82971129013',
      passWord: '4U1pn1',
      role: 1,
      createMeet: 'http://127.0.0.1:8000/course/meeting',
      signatureEndpoint: 'http://127.0.0.1:8000/course/signature', // /:http://localhost:4000",
      userEmail: 'deffodna@gmail.com',
      userName: 'Vue.js',
      topic: 'Math- Graph theorem',

      // pass in the registrant's token if your meeting or webinar requires registration. More info here:
      // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
      // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
      registrantToken: '',
    }
  },

  methods: {
    getMeeting() {
      axios
        .post(this.createMeet, { topic: this.topic, email: this.userEmail })
        .then((res) => {
          console.log(res.data.data)
          this.meetingNumber = res.data.data.number
          this.passWord = res.data.data.password
          this.getSignature()
        })
        .catch((error) => {
          console.log(error)
          // console.log("good")
        })
    },
    getSignature() {
      axios
        .post(this.signatureEndpoint, {
          number: this.meetingNumber,
          role: this.role,
        })
        .then((res) => {
          //console.log(res.data.signature);
          console.log('<< ' + this.meetingNumber + ' >>')
          this.startMeeting(res.data.data.token.signature)
        })
    },
    startMeeting(signature) {
      document.getElementById('zmmtg-root').style.display = 'block'

      ZoomMtg.init({
        leaveUrl: this.leaveUrl,
        success: (success) => {
          console.log(success)
          ZoomMtg.join({
            meetingNumber: this.meetingNumber,
            userName: this.userName,
            signature: signature,
            sdkKey: this.sdkKey,
            userEmail: this.userEmail,
            passWord: this.passWord,
            tk: this.registrantToken,
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
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  width: 70%;
  margin: auto;
  text-align: center;
}

main button {
  margin-top: 20px;
  background-color: #2d8cff;
  color: #ffffff;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
}

main button:hover {
  background-color: #2681f2;
}
</style>
