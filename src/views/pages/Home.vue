<template>
  <div class="home vld-parent">
    <div class="jumbotron jumbotron-fluid mt-5 p-4">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 p-2">
            <h2 class="text-warning">
              <strong class="display-4"> Web DiceBot </strong>
            </h2>

            <p>
              Automate betting with programmer mode directly on dice sites
            </p>

            <p>
              Pricing 0.2$ per day
            </p>

            <div class="d-inline">
              <router-link to="/get-started">
                <button type="button" class="btn btn-warning btn-lg">
                  Get Started
                </button>
              </router-link>
            </div>
          </div>

          <div class="col-md-8 p-2">
            <img :src="$options.photo" alt="Web DiceBot"
              class="w-100 rounded shadow-lg animate__animated animate__zoomIn" />
          </div>
        </div>
      </div>
    </div>

    <div class="fixed-bottom black text-center text-white">
      Web DiceBot since 2019
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

.black {
  background-color: #222;
}
</style>
