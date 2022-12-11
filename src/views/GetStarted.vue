<template>
  <div>
    <CAlert color="danger">
      <p>
        ⚠️ Gambling is gambling no matter what you do or how good your strategy
        is. The dealer always wins if you keep playing. Winners always know
        when to stop
      </p>

      <p>
        ⚠️ Like any human, many mistakes, and like any program, the bot is
        bound to have a few bugs. Use the bot at your own risk. Should you
        come accross a bug, please report it with as much detail as possible
        to
        <a href="https://t.me/webdicebotgroup" target="_blank">Web DiceBot's Group</a>
      </p>
    </CAlert>

    <CCard class="mb-4">
      <CCardBody>
        <h4 class="py-4">
          <strong>How it work?</strong>
        </h4>

        <div class="container">
          <div class="row text-center">
            <div class="col-sm-4">
              <h1><i class="fa-solid fa-robot text-primary"></i></h1>
              <h3>Make Interface</h3>
              <p>
                Bot interface maked directly on dice sites after you install
              </p>
            </div>
            <div class="col-sm-4">
              <h1><i class="fa-solid fa-code text-warning"></i></h1>
              <h3>Read Script</h3>
              <p>Bot will read your dice script (LUA/JS) on script box</p>
            </div>
            <div class="col-sm-4">
              <h1><i class="fa-solid fa-play text-success"></i></h1>
              <h3>Auto Betting</h3>
              <p>
                Betting base on dice script, earning or losing depend on your
                script
              </p>
            </div>
          </div>
        </div>
      </CCardBody>
    </CCard>

    <CCard class="mb-4">
      <CCardBody>
        <h4>
          <strong>Terms of use </strong>
        </h4>

        <p>
          👉 The following user agreement is to read in its entirety prior to the
          use of Web DiceBot's products and services. The agreement constitutes
          a legal binding between the user and all our services
        </p>

        <pre>
1. You must know what is dice, dice bot, dice script
2. You must know the Lua 5.3 programming language or Javascript programming language for make dice script
3. You must control your crypto currency in dice
4. You must have license when use dice bot of Web DiceBot
5. A license can use for all account, all dice sites and all devices of you
6. Security enhancement (strong password, 2FA, etc..) for your accounts at all dice sites</pre>
      </CCardBody>
    </CCard>

    <CCard class="mb-4">
      <CCardBody>
        <h4>
          <strong>How to use? </strong>
        </h4>

        <video controls :src="$options.video" class="border border-secondary w-100"></video>

        <p>
          👉 Browser for best performance: FireFox, Chrome, Microsoft Edge,
          Brave, Coc Coc, Kiwi Browser (Android)
          <br />
          👉 Your dice script must clean, please follow syntax of programming
          language
          <br />
          👉 You must follow syntax of
          <a href="https://lua.org/manual/5.3" target="_blank"> Lua v5.3 </a>
          when you use Lua script
          <br />
          👉 Use
          <a href="https://www.jdoodle.com/execute-lua-online/" target="_blank">JDoodle.com</a>
          to check clean your dice script
        </p>
      </CCardBody>
    </CCard>

    <CCard class="mb-4">
      <CCardBody>
        <h4>
          <strong>Support sites </strong>
        </h4>

        <p>
          <a href="https://bc.game/i-1fz8gf65-n" target="_blank"> bc.game </a>,
          <a href="https://bch.games/play/UT7QfUO3" target="_blank"> bch.games </a>,
          <a href="https://betfury.io/?r=5f86fffc38b5653094d3206b" target="_blank">
            betfury.io
          </a>,
          <a href="https://bitsler.com/?ref=mhqb365" target="_blank">
            bitsler.com
          </a>,
          <a href="https://bitvest.io/?r=134231" target="_blank">
            bitvest.io
          </a>,
          <a href="https://casinoroyale.bet" target="_blank">
            casinoroyale.bet
          </a>,
          <a href="https://crypto.games" target="_blank"> crypto.games </a>,
          <a href="https://cryptoplay.io/?c=mhqb365" target="_blank">
            cryptoplay.io
          </a>,
          <a href="https://duckdice.io" target="_blank"> duckdice.io </a>,
          <a href="https://faucetpay.io/?r=2102948" target="_blank">
            faucetpay.io
          </a>,
          <a href="https://freebitco.in" target="_blank"> freebitco.in </a>,
          <a href="https://jacksclub.io/?r=~mhqb365" target="_blank">
            jacksclub.io
          </a>,
          <a href="https://luckydiamond.io/r/mhqb365" target="_blank">
            luckydiamond.io
          </a>,
          <a href="https://megaplay.io/?c=ZNae4ChvlSSADkGsIxFf" target="_blank">
            megaplay.io
          </a>,
          <a href="https://nanogames.io/i-f0810ew-n/" target="_blank">
            nanogames.io
          </a>,
          <a href="https://paradice.in/?c=@mhqb365" target="_blank">
            paradice.in
          </a>,
          <a href="https://pasino.com/?user_id=41111" target="_blank">
            pasino.com
          </a>,
          <a href="https://primedice.com/?c=3e6d33fce7" target="_blank">
            primedice.com
          </a>,
          <a href="https://punt.com/?aid=1949" target="_blank"> punt.com </a>,
          <a href="https://sicodice.com" target="_blank"> sicodice.com </a>,
          <a href="https://stake.com/?c=26b21743fa" target="_blank">
            stake.com
          </a>,
          <a href="https://starbets.io/ref=r3oaasMDgA" target="_blank">
            starbets.io
          </a>,
          <a href="https://windice.io/?r=mhqb365" target="_blank">
            windice.io
          </a>,
          <a href="https://wintomato.com/en/registration/1604" target="_blank">
            wintomato.com
          </a>,
          <a href="https://wolf.bet/?c=mhqb365" target="_blank"> wolf.bet </a>
        </p>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import video from '@/assets/webdicebot.mp4'
export default {
  video,
  data() {
    return {
      urlTelegramBot:
        process.env.NODE_ENV == 'development'
          ? 'https://t.me/webdicebot_dev_bot'
          : 'https://t.me/webdicebot_bot',
    }
  },
}
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);
</style>
