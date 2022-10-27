<template>
  <div>
    <CCard class="mb-4">
      <CCardBody>
        <div>
          <p>
            {{ state }} auto renew 30 days license <br />
            Please keep balance at
            <router-link to="/my-wallet"> My Wallet </router-link>
            available every time when enable
          </p>
          <div class="mb-3">
            <CFormLabel>License</CFormLabel>
            <CFormInput type="text" v-model="license" disabled />
          </div>

          <div class="d-grid gap-2">
            <CButton v-if="isLoading" disabled>
              <CSpinner size="sm" />
            </CButton>
            <CButton v-else color="primary" @click="toggleAutoRenew">
              {{ state }} Auto Renew
            </CButton>
          </div>
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
      license: this.$route.query.license,
      state: this.$route.query.state,
    }
  },
  methods: {
    async toggleAutoRenew() {
      try {
        // console.log(this.state)
        this.isLoading = true
        const { data } = await axios.put('/license/autoRenew', {
          license: this.license,
          state: this.state,
        })
        // console.log(data)
        this.notify(data)
        setTimeout(() => {
          this.$router.push({ path: '/my-license' })
        }, 1e3)
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
