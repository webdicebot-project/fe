<template>
  <div class="vld-parent">
    <loading :active="isLoading" />

    <CCard class="mb-4">
      <CCardBody>
        <p>Total: {{ totalDocs }}</p>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li v-if="prevPage" class="page-item">
              <a class="page-link button" @click="adminGetUsers(prevPage)">
                Prev
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link button" @click="adminGetUsers(page)">
                {{ page }}
              </a>
            </li>
            <li v-if="nextPage" class="page-item">
              <a class="page-link button" @click="adminGetUsers(nextPage)">
                Next
              </a>
            </li>
          </ul>
        </nav>

        <CTable responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Time</CTableHeaderCell>
              <CTableHeaderCell scope="col">License</CTableHeaderCell>
              <CTableHeaderCell scope="col">Expired</CTableHeaderCell>
              <CTableHeaderCell scope="col">AutoRenew</CTableHeaderCell>
              <CTableHeaderCell scope="col">User</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow v-for="doc in docs" :key="doc._id">
              <CTableDataCell>
                {{ $options.moment(doc.createdAt).format('DD/MM/YYYY HH:mm:ss') }}
              </CTableDataCell>
              <CTableDataCell>
                <span class="copy" v-clipboard:copy="doc.license" v-clipboard:success="onCopy">
                  {{ getLicense(doc.license) }}
                  <CIcon name="cil-copy" />
                </span>
              </CTableDataCell>
              <CTableDataCell>
                <CBadge v-if="doc.expired" color="danger">It's over</CBadge>
                <span v-else>
                  {{ $options.moment(doc.expiredAt).format('DD/MM/YYYY HH:mm:ss') }}
                </span>
              </CTableDataCell>
              <CTableDataCell>
                <CBadge v-if="doc.autoRenew" color="success">Yes</CBadge>
                <CBadge v-else color="warning">No</CBadge>
              </CTableDataCell>
              <CTableDataCell>
                {{ doc.user.idUser }}
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
      totalDocs: 0,
      docs: [],
      page: 1,
      nextPage: 2,
      prevPage: null,
    }
  },
  created() {
    this.adminGetUsers(this.page)
  },
  methods: {
    getLicense(license) {
      return license.slice(0, 5) + '...' + license.slice(-5)
    },
    async adminGetUsers(p) {
      try {
        this.isLoading = true
        const { data } = await axios.get('/license?page=' + p)
        // console.log(data)
        this.totalDocs = data.totalDocs
        this.docs = data.docs
        this.page = data.page
        this.nextPage = data.nextPage
        this.prevPage = data.prevPage
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

<style>

</style>
