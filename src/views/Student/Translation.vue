<template>
  <div class="container v-80">
    <div class="col-md-offset-2">
      <!-- Panel Chat -->
      <div class="panel" id="chat">
        <div class="panel-heading">
          <CContainer class="px-3 mb-3">
            <CRow>
              <CCol :md="5">
                <CFormSelect size="md" v-model="translateMsg.type">
                  <option value="0">Select Language</option>
                  <option value="Ewondo">Ewondo</option>
                  <option value="Yemba">Yemba</option>
                </CFormSelect>
              </CCol>
              <CCol
                :md="2"
                class="d-flex justify-content-center align-items-center"
              >
                <CIcon icon="cil-arrow-thick-right" class="d-none d-md-block" />
                <CIcon
                  icon="cil-arrow-thick-bottom"
                  class="d-block d-md-none my-2"
                />
              </CCol>
              <CCol :md="5">
                <CFormSelect
                  size="md"
                  aria-label="Disabled select example"
                  disabled
                >
                  <option>Select Language</option>
                  <option selected value="1">English</option>
                  <option value="2">French</option>
                </CFormSelect>
              </CCol>
            </CRow>
          </CContainer>
        </div>
        <div class="panel-body">
          <div
            class="chats"
            v-for="(message, key) in translateMsg.messages"
            :key="key"
          >
            <div v-if="message.isBot" class="chat chat-left">
              <div class="chat-avatar">
                <a
                  class="avatar avatar-online"
                  data-toggle="tooltip"
                  href="#"
                  data-placement="right"
                  title=""
                  data-original-title="June Lane"
                >
                  <img src="@/assets/images/bot.png" alt="..." />
                  <i></i>
                </a>
              </div>
              <div class="chat-body">
                <div class="chat-content">
                  <p>
                    {{ message.text }}
                  </p>
                </div>
              </div>
            </div>
            <div v-else class="chat">
              <div class="chat-avatar">
                <a
                  class="avatar avatar-online"
                  data-toggle="tooltip"
                  href="#"
                  data-placement="left"
                  data-original-title="Edward Fletcher"
                >
                  <img src="@/assets/images/avatars/4.jpg" alt="bot" />
                  <i></i>
                </a>
              </div>
              <div class="chat-body">
                <div class="chat-content">
                  <p>{{ message.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-footer" style="width: 100%">
          <div
            class="input-group"
            style="display: flex; flex-direction: row; gap: 10px"
          >
            <CFormTextarea
              rows="3"
              placeholder="Enter text"
              v-model="translateMsg.userMessage"
            ></CFormTextarea>
            <div class="chat-ui">
              <button class="btn btn-primary" @click="sendMessage">Send</button>
            </div>
          </div>
        </div>
        <!--        <div-->
        <!--          class="input-div d-flex justify-content-between align-items-baseline p-2"-->
        <!--        >-->
        <!--          <div class="entry-div p-1 mx-2">-->
        <!--            <CustomTextarea-->
        <!--              style="min-height: 25px"-->
        <!--              v-model="translateMsg.userMessage"-->
        <!--              :value="translateMsg.userMessage"-->
        <!--            ></CustomTextarea>-->
        <!--          </div>-->
        <!--          <CFormSelect-->
        <!--            style="width: 120px; outline: none"-->
        <!--            v-model="translateMsg.type"-->
        <!--          >-->
        <!--            <option value="0">Select Language</option>-->
        <!--            <option value="Ewondo">Ewondo</option>-->
        <!--            <option value="Yemba">Yemba</option>-->
        <!--          </CFormSelect>-->
        <!--          <div class="chat-ui">-->
        <!--            <button class="btn btn-primary" @click="sendMessage">Send</button>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <!-- End Panel Chat -->
    </div>
  </div>
  <CToaster placement="top-end" visible>
    <CToast class="bg-danger" v-if="error != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">ERROR</span>
      </CToastHeader>
      <CToastBody>
        <div class="" v-for="(elt, key) in error" :key="key">
          <p>{{ key }}</p>
          <p class="ms-3" v-for="(val, i) in elt" :key="i">{{ val }}</p>
        </div>
      </CToastBody>
    </CToast>
  </CToaster>
</template>

<script>
import { tranlate } from '@/composables/Speech'
import { ref, watch } from 'vue'
//import CustomTextarea from '@/components/CustomTextarea.vue'

export default {
  data() {
    return {}
  },
  // components: { CustomTextarea },

  setup() {
    const { load, message, error } = tranlate()
    const translateMsg = ref({
      messages: [],
      userMessage: '',
      type: 'Ewondo',
      localLanguage: '...',
    })
    const sendMessage = () => {
      load({
        id: translateMsg.value.userMessage,
        lgs: translateMsg.value.type,
      })
      translateMsg.value.messages.push({
        isBot: false,
        text: translateMsg.value.userMessage,
      })
    }
    watch(message, () => {
      translateMsg.value.messages.push({ isBot: true, text: message.value })
    })
    return {
      error,
      translateMsg,
      message,
      sendMessage,
    }
  },
}
</script>

<style scoped>
.chat-box {
  height: 100%;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}

.chats {
  padding: 30px 15px;
}

.chat-avatar {
  float: right;
}

.chat-avatar .avatar {
  width: 30px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
}

.chat-body {
  display: block;
  margin: 5px 25px 0 0;
  overflow: hidden;
}

.chat-body:first-child {
  margin-top: 0;
}

.chat-content {
  position: relative;
  display: block;
  float: right;
  padding: 8px 15px;
  margin: 0 20px 10px 0;
  clear: both;
  color: #fff;
  background-color: #62a8ea;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}

.chat-content:before {
  position: absolute;
  top: 10px;
  right: -10px;
  width: 0;
  height: 0;
  content: '';
  border: 5px solid transparent;
  border-left-color: #62a8ea;
}

.chat-content > p:last-child {
  margin-bottom: 0;
}

.chat-content + .chat-content:before {
  border-color: transparent;
}

.chat-left .chat-avatar {
  float: left;
}

.chat-left .chat-body {
  margin-right: 0;
  margin-left: 30px;
}

.chat-left .chat-content {
  float: left;
  margin: 0 0 10px 20px;
  color: #76838f;
  background-color: #dfe9ef;
}

.chat-left .chat-content:before {
  right: auto;
  left: -10px;
  border-right-color: #dfe9ef;
  border-left-color: transparent;
}

.chat-left .chat-content + .chat-content:before {
  border-color: transparent;
}

.panel-footer {
  padding: 0 30px 15px;
  background-color: transparent;
  border-top: 1px solid transparent;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.avatar img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border: 0 none;
  border-radius: 1000px;
}

.chat-avatar .avatar {
  width: 30px;
}

.avatar {
  position: relative;
  display: inline-block;
  width: 40px;
  white-space: nowrap;
  border-radius: 1000px;
  vertical-align: bottom;
}

.entry-div {
  background: white;
  border-radius: 10px;
  width: 85%;
  max-height: 20vh;
  overflow-y: auto;
}
.entry-div textarea {
  width: 100%;
  resize: none;
  overflow: hidden;
  height: 1.15rem;
  font-size: 1rem !important;
  border: none !important;
}

.entry-div textarea:focus {
  border: none !important;
  outline: none;
}
.input-div {
  background: #3c4b64;
}
</style>
