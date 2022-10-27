<template>
  <div class="home vld-parent">
    <div class="jumbotron jumbotron-fluid mt-5 p-5">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <h2 class="text-warning">
              <strong class="display-4"> Web DiceBot </strong>
            </h2>

            <p>
              Automate betting with programmer mode directly on dice sites —
              since 2019
            </p>

            <router-link to="/get-started">
              <button type="button" class="btn btn-warning btn-lg mt-4 mb-5">
                Get Started
              </button>
            </router-link>
          </div>
          <div class="col-md-8">
            <img
              :src="$options.photo"
              alt="Web DiceBot Interface"
              class="w-100 rounded shadow-lg animate__animated animate__zoomIn"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css'
import photo from '@/assets/webdicebot.png'

export default {
  photo,
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
