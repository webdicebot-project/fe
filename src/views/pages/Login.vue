<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <h1>Login</h1>

                <p class="text-medium-emphasis">
                  Chat with
                  <a :href="$options.telebot" target="_blank"> Telegram bot </a>
                  to get MemberID
                </p>

                <CInputGroup class="mb-4">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <CFormInput placeholder="MemberID" v-model="idUser" />
                </CInputGroup>

                <CInputGroup class="mb-4">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput placeholder="OTP code" v-model="otp" />
                  <CButton v-if="isLoading" class="px-4" disabled>
                    <CSpinner size="sm" />
                  </CButton>
                  <CButton v-else color="success" @click="getOTP">
                    Get OTP
                  </CButton>
                </CInputGroup>

                <CRow>
                  <CCol :xs="6">
                    <CButton v-if="isLoading2" class="px-4" disabled>
                      <CSpinner size="sm" />
                    </CButton>
                    <CButton v-else color="primary" class="px-4" @click="login">
                      Login
                    </CButton>
                    <CButton class="mx-2" @click="$router.push({ path: '/get-started' })">
                      Cancel
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from 'axios'
import telebot from '@/configs/telebot'

export default {
  telebot,
  data() {
    return {
      isLoading: false,
      isLoading2: false,
      idUser: localStorage.getItem('idUser') || '',
      otp: '',
    }
  },
  created() {
    if (this.idUser) this.getOTP()
  },
  methods: {
    async getOTP() {
      try {
        this.isLoading = true
        const { data } = await axios.post('/user/getOTPLogin', {
          idUser: this.idUser,
        })
        this.isLoading = false
        // console.log(data)
        this.notify(data)
      } catch (error) {
        this.isLoading = false
        // console.error(error)
        this.notify(error.response.data.message)
      }
    },
    async login() {
      try {
        this.isLoading2 = true
        const { data } = await axios.post('/user/login', {
          idUser: this.idUser,
          otp: this.otp,
        })
        this.isLoading2 = false
        // console.log(data)
        localStorage.setItem('idUser', this.idUser)
        localStorage.setItem('token', data.token)
        this.notify('Welcome')
        if (data.token)
          setTimeout(() => {
            window.location.href = '/'
          }, 1e3)
      } catch (error) {
        this.isLoading2 = false
        // console.error(error)
        this.notify(error.response.data.message)
      }
    },
  },
}
</script>
