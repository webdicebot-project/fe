<template>
  <div class="vld-parent">
    <loading :active="isLoading" />

    <CCard class="mb-3">
      <CListGroup flush>
        <CListGroupItem>
          <CIcon name="cil-user" />
          MemberID: {{ user.idUser }}
        </CListGroupItem>
        <CListGroupItem>
          <CIcon name="cil-history" />
          Join at:
          {{ $options.moment(user.createdAt).format('DD/MM/YYYY HH:mm:ss') }}
        </CListGroupItem>
      </CListGroup>
    </CCard>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  moment,
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      user: {
        idUser: '0',
        createdAt: Date.now(),
      },
    }
  },
  created() {
    this.getProfile()
  },
  methods: {
    async getProfile() {
      try {
        this.isLoading = true
        const { data } = await axios.get('/user/me')
        // console.log(data)
        this.user = data
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
  },
}
</script>

<style></style>
