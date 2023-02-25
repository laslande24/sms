<template>
  <div class="pb-2">
    <div class="chat-div d-flex flex-column justify-content-between">
      <div class="p-sm-2 p-lg-4 msg-div">
        <div>
          <div class="d-flex">
            <div class="user-img"></div>
            <div class="rec-msg msg shadow-sm">
              <span class="user-name">Deffo Aubin</span>
              <p>Good morning</p>
              <span>12:30</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="msg shadow-sm msg-day">
            <p>Today</p>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <div class="send-msg msg shadow-sm">
            <p>
              Morning Bro how are you Morning Bro how are you Morning Bro how
              how are you Morning Bro how are you
            </p>
            <span>9:30</span>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <div class="send-msg msg shadow-sm">
            <p>Good morning</p>
            <span>12:30</span>
          </div>
        </div>
        <div>
          <div class="d-flex">
            <div class="user-img"></div>
            <div class="rec-msg msg shadow-sm">
              <span class="user-name">Deffo Aubin</span>
              <p>
                Morning Bro how are you Morning Bro how are you Morning Bro how
                how are you Morning Bro how are you
              </p>
              <span>9:30</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="input-div d-flex justify-content-between align-items-baseline p-2"
      >
        <div class="entry-div p-1">
          <CustomTextarea v-model="msg" :value="msg"></CustomTextarea>
        </div>
        <CIcon class="mx-2 bttn" icon="cil-paperclip" size="lg" />
        <CIcon class="mx-2 bttn" icon="cil-send" size="lg" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomTextarea from '@/components/CustomTextarea.vue'
import { ref } from 'vue'
export default {
  name: 'ChatMeeting',
  components: { CustomTextarea },
  setup() {
    const msg = ref(null)
    return {
      msg,
    }
  },
}
</script>

<style scoped>
.chapt p,
.chapt h3 {
  text-align: center;
}

.chapt p {
  font-size: 2rem;
}
.chat-div {
  background: white;
  max-height: 79vh;
  height: 79vh;
}

.entry-div {
  background: white;
  border-radius: 10px;
  width: 85%;
  max-height: 20vh;
  overflow-y: auto;
  padding-bottom: 5px;
}
.entry-div textarea {
  width: 100%;
  resize: none;
  overflow: hidden;
  height: 1.15rem;
  font-size: 0.8rem;
  border: none !important;
}

.entry-div textarea:focus {
  border: none !important;
  outline: none;
}
.input-div {
  background: #3c4b64;
}
.msg {
  border-radius: 10px;
  background: white;
  font-size: 0.8rem;
  padding: 7px 50px 10px 7px;
  max-width: 70%;
  margin: 8px 0;
  display: inline-block;
  position: relative;
}
.msg span {
  position: absolute;
  bottom: 1px;
  right: 8px;
  font-size: 0.7rem;
}
.msg span.user-name {
  position: absolute;
  top: 1px;
  left: 6px;
  color: crimson;
  font-size: 0.9rem;
}
.msg p {
  padding: 0;
  margin: 0;
}
.msg.rec-msg {
  border-top-left-radius: 0;
  padding-top: 22px;
}

.msg.send-msg {
  border-top-right-radius: 0;
  background: #d9fdd3;
}
.msg.msg-day {
  display: inline-block;
  padding: 7px;
}
.bttn {
  cursor: pointer;
  color: white;
}
div.user-img {
  height: 35px;
  width: 35px;
  border-radius: 35px;
  background: lavender;
  margin: 5px;
}

.msg-div {
  overflow-y: auto;
}
</style>
