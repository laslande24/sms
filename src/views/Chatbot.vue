<template>
  <div class="container">
    <div class="col-md-offset-2">
      <!-- Panel Chat -->
      <div class="panel" id="chat">
        <div class="panel-heading">
          <h3 class="panel-title">
            <i class="icon wb-chat-text" aria-hidden="true"></i> Chat with AI
            Assistant
          </h3>
        </div>
        <div class="panel-body">
          <div class="chats" v-for="message in messages" :key="message.id">
            <div v-if="message.isBot" class="chat">
              <div class="chat-avatar">
                <a
                  class="avatar avatar-online"
                  data-toggle="tooltip"
                  href="#"
                  data-placement="right"
                  title=""
                  data-original-title="June Lane"
                >
                  <img
                    src="./../../src/assets/images/avatars/4.jpg"
                    alt="..."
                  />
                  <i></i>
                </a>
              </div>
              <div class="chat-body">
                <div class="chat-content">
                  <p>
                    {{ message.text }}
                  </p>
                  >
                </div>
              </div>
            </div>
            <div v-else class="chat chat-left">
              <div class="chat-avatar">
                <a
                  class="avatar avatar-online"
                  data-toggle="tooltip"
                  href="#"
                  data-placement="left"
                  data-original-title="Edward Fletcher"
                >
                  <img src="./../../src/assets/images/bot.png" alt="bot" />
                  <i></i>
                </a>
              </div>
              <div class="chat-body">
                <div class="chat-content">
                  <p>{{ message.text }}</p>
                  >
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
            <input
              type="text"
              class="form-control"
              placeholder="Ask me anything"
              v-model="userMessage"
              @keyup.enter="sendMessage"
            />
            <div class="chat-ui">
              <button class="btn btn-primary" @click="sendMessage">Send</button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Panel Chat -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const apiKey = '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'

const apiUrl = 'https://api.openai.com/v1/completions'

export default {
  data() {
    return {
      messages: [],
      userMessage: '',
    }
  },
  methods: {
    async sendMessage() {
      if (!this.userMessage) {
        return
      }

      // Add the user's message to the chat interface
      this.messages.push({
        id: this.messages.length,
        text: this.userMessage,
        isBot: false,
      })

      // Send the user's message to the OpenAI API
      try {
        const response = await axios.post(
          apiUrl,
          {
            prompt: this.userMessage,
            max_tokens: 100,
            model: 'text-davinci-003',
            top_p: 1,
            temperature: 0.5,
            frequency_penalty: 0,
            presence_penalty: 0.5,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          },
        )

        // Add the bot's response to the chat interface
        const botMessage = response.data.choices[0].text.trim()
        this.messages.push({
          id: this.messages.length,
          text: botMessage,
          isBot: true,
        })
      } catch (error) {
        console.error(error)
      }

      // Clear the input field
      this.userMessage = ''
    },
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
</style>
