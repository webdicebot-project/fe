<template>
	<div>
		<CCard class="mb-4">
			<CCardBody>
				<div class="mb-3">
					<CFormSelect :options="beta" @change="changeBot" />
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
import beta from './_beta'

export default {
	data() {
		return {
			beta,
			installer: '',
			tips: '',
		}
	},
	methods: {
		changeBot(e) {
			try {
				// console.log(e.target.value)
				for (const bot in beta) {
					if (beta[bot].value === e.target.value) {
						// console.log(bot);
						// console.log(beta[bot]);
						this.tips = beta[bot].tips
						this.installer =
							`const WDB_API = '${api}';\n` +
							e.target.value +
							`\n(async function () {
 await fetch(WDB_API + '/beta/init')
  .then((response) => response.text())
  .then((txt) => eval(txt))
})();`
					}
				}
			} catch (error) {
				// console.error(error)
			}
		},
	},
}
</script>

<style>

</style>
