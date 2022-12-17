<template>
  <div>
    <CCard class="mb-4">
      <CCardBody>
        <div class="mb-3">
          <CFormInput
            type="text"
            placeholder="MemberID, empty to send all"
            v-model="to"
          />
        </div>

        <div class="mb-3">
          <CFormTextarea
            rows="7"
            placeholder="Message"
            v-model="message"
          ></CFormTextarea>
        </div>

        <div class="d-grid gap-2">
          <CButton v-if="isLoading" disabled>
            <CSpinner size="sm" />
          </CButton>

          <CButton v-else color="primary" @click="send"> Send </CButton>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      to: '',
      message: '',
    }
  },
  methods: {
    async send() {
      try {
        if (!this.message) return this.notify('Please enter Message')
        this.isLoading = true
        const { data } = await axios.post('/user/notify', {
          to: this.to,
          message: this.message,
        })
        // console.log(data)
        this.isLoading = false
        this.message = ''
        this.notify(data)
      } catch (error) {
        // console.error(error)
        this.isLoading = false
        this.notify(error.response.data.message)
        if (
          error.response.data.message == 'jwt expired' ||
          error.response.data.message == 'jwt malformed' ||
          error.response.data.message == 'invalid signature'
        ) {
          this.notify('Session expired')
          this.logout()
        }
      }
    },
  },
}
</script>

<style></style>
