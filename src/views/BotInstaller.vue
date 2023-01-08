<template>
  <div>
    <CCard class="mb-4">
      <CCardBody>
        <div class="mb-3">
          <CFormSelect aria-label="Default select example" :options="bots" @change="changeBot" />
        </div>

        <div class="mb-3">
          <CFormTextarea rows="7" v-model="installer"></CFormTextarea>
        </div>

        <div class="d-grid gap-2">
          <CButton color="primary" v-clipboard:copy="installer" v-clipboard:success="onCopy">
            Copy
          </CButton>
        </div>
      </CCardBody>
    </CCard>

    <CCard v-show="tips" class="mb-4">
      <CCardBody>
        <pre>{{ tips }}</pre>
      </CCardBody>
    </CCard>

  </div>
</template>

<script>
import api from '@/configs/api'
import bots from './_bots'

export default {
  data() {
    return {
      bots,
      installer: '',
      tips: ''
    }
  },
  methods: {
    changeBot(e) {
      // console.log(e.target.value)
      for (const bot in bots) {
        // console.log(bot);
        if (bots[bot].value === e.target.value) {
          // console.log(bot);
          // console.log(beta[bot]);
          this.tips = bots[bot].tips
          this.installer =
            `const WDB_API = '${api}';\n` +
            e.target.value +
            `\n(async function () {
 await fetch(WDB_API + '/bot/init')
  .then((response) => response.text())
  .then((txt) => eval(txt))
})();`
        }
      }
    },
  },
}
</script>

<style>

</style>
