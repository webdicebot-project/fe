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
              <CTableHeaderCell scope="col">MemberID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Telegram</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow v-for="doc in docs" :key="doc._id">
              <CTableDataCell>
                {{ $options.moment(doc.createdAt).format('DD/MM/YYYY HH:mm:ss') }}
              </CTableDataCell>
              <CTableDataCell>
                {{ doc.idUser }}
              </CTableDataCell>
              <CTableDataCell>
                <a :href="'https://t.me/' + doc.username" target="_blank">
                  {{ doc.username }}
                </a>
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
    async adminGetUsers(p) {
      try {
        this.isLoading = true
        const { data } = await axios.get('/user?page=' + p)
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
