<template>
  <div class="vld-parent">
    <loading :active="isLoading" />

    <CCard class="mb-4">
      <CCardBody>
        <div>
          <div class="mb-3">
            <CFormLabel>License</CFormLabel>
            <CFormInput type="text" v-model="license" disabled />
          </div>

          <div class="mb-3">
            <CFormLabel>Days</CFormLabel>
            <CFormInput type="number" v-model="limit" />
          </div>

          <CFormLabel>Price</CFormLabel>
          <CInputGroup class="mb-3">
            <CFormInput v-model="price" disabled />
            <CInputGroupText>TRX</CInputGroupText>
          </CInputGroup>

          <p>
            Balance:
            {{ wallet.balance }}
            TRX
          </p>

          <div class="d-grid gap-2">
            <CButton v-if="isLoading2" disabled>
              <CSpinner size="sm" />
            </CButton>
            <CButton v-else color="primary" @click="renew"> Renew </CButton>
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
      isLoading2: false,
      wallet: {
        address: '',
        balance: 0,
      },
      license: this.$route.query.license,
      limit: '10',
    }
  },
  created() {
    this.getWallet()
  },
  computed: {
    price() {
      const { usd } = this.$store.state.priceTrx
      const pricePerDay = 2 / usd / 10
      let licensePrice = Number(this.limit * pricePerDay + 1).toFixed(6)
      return String(licensePrice)
    },
  },
  methods: {
    async getWallet() {
      try {
        this.isLoading = true
        const { data } = await axios.get('/user/wallet')
        // console.log(data)
        this.wallet = data
        this.isLoading = false
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
    async renew() {
      try {
        this.isLoading2 = true
        const { data } = await axios.put('/license/renew', {
          license: this.license,
          limit: this.limit,
        })
        // console.log(data)
        this.notify(data)
        setTimeout(() => {
          this.$router.push({ path: '/my-license' })
        }, 1e3)
      } catch (error) {
        // console.error(error)
        this.isLoading2 = false
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
