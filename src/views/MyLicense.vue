<template>
  <div class="vld-parent">
    <loading :active="isLoading" />

    <CCard class="mb-4">
      <CCardBody>
        <CTable responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">License</CTableHeaderCell>
              <CTableHeaderCell scope="col">Expired</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow v-for="item in items" :key="item._id">
              <CTableDataCell>
                <span
                  class="copy"
                  v-clipboard:copy="item.license"
                  v-clipboard:success="onCopy"
                >
                  {{ getLicense(item.license) }}
                  <CIcon name="cil-copy" />
                </span>
              </CTableDataCell>
              <CTableDataCell>
                {{
                  $options.moment(item.expiredAt).format('DD/MM/YYYY HH:mm:ss')
                }}
              </CTableDataCell>
              <CTableDataCell>
                <CButton
                  v-if="haveRenew(item)"
                  color="primary"
                  size="sm"
                  @click="
                    $router.push({
                      path: '/renew-license',
                      query: { license: item.license },
                    })
                  "
                >
                  Renew
                </CButton>
                <CButton
                  color="warning"
                  size="sm"
                  class="ms-2"
                  @click="
                    $router.push({
                      path: '/auto-renew-license',
                      query: {
                        license: item.license,
                        state: item.autoRenew ? 'Disable' : 'Enable',
                      },
                    })
                  "
                >
                  {{ item.autoRenew ? 'Disable' : 'Enable' }} Auto Renew
                </CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
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
      items: [],
    }
  },
  created() {
    this.getMyLicense()
  },
  methods: {
    getLicense(license) {
      return license.slice(0, 5) + '...' + license.slice(-5)
    },
    haveRenew(item) {
      const remaining =
        (new Date(item.expiredAt).valueOf() - Date.now()) /
        (24 * 60 * 60 * 1000)
      // console.log(remaining)
      if (remaining <= 3) return true
      return false
    },
    async getMyLicense() {
      try {
        this.isLoading = true
        const { data } = await axios.get('/license/me')
        // console.log(data)
        this.items = data
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
