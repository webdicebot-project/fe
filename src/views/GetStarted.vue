<template>
  <div>
    <CAlert color="danger">
      <strong>
        <p>
          Gambling is gambling no matter what you do or how good your strategy
          is. The dealer always wins if you keep playing. Winners always know
          when to stop
        </p>

        <p>
          Like any human, I make mistakes, and like any program, the bot is
          bound to have a few bugs. Use the bot at your own risk. Should you
          come accross a bug, please report it with as much detail as possible
          to
          <a href="https://t.me/webdicebotgroup" target="_blank">Web DiceBot's Group</a>
        </p>
      </strong>
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
              <h4>Make Interface</h4>
              <p>
                Bot interface maked directly on dice sites after you install
              </p>
            </div>
            <div class="col-sm-4">
              <h1><i class="fa-solid fa-code text-warning"></i></h1>
              <h4>Read Script</h4>
              <p>Bot will read your dice script (LUA/JS) on script box</p>
            </div>
            <div class="col-sm-4">
              <h1><i class="fa-solid fa-play text-success"></i></h1>
              <h4>Auto Betting</h4>
              <p>
                Betting base on dice script, earning or losing depend on your
                script
              </p>
            </div>
          </div>
        </div>
      </CCardBody>
    </CCard>

    <CRow>
      <CCol md="6">
        <CCard class="mb-4">
          <CCardBody>
            <h4>
              <strong>Dice script in LUA </strong>
            </h4>

            <pre>
// example LUA code
chance=49.5
bethigh=true
basebet=0.00000001
nextbet=basebet

function dobet()
  if (win) then
    nextbet=basebet
  else
    nextbet=previousbet*2
  end
end</pre>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="6">
        <CCard class="mb-4">
          <CCardBody>
            <h4>
              <strong>Dice script in JS</strong>
            </h4>

            <pre>
// example JS code
chance=49.5
bethigh=true
basebet=0.00000001
nextbet=basebet

function dobet() {
  if (win) {
    nextbet=basebet
  } else {
    nextbet=previousbet*2
  }
}</pre>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CCard class="mb-4">
      <CCardBody>
        <h4>
          <strong>Terms of use </strong>
        </h4>

        <p>
          The following user agreement is to read in its entirety prior to the
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

        <p>
          Suggest browser for best performance: FireFox, Chrome, Microsoft Edge,
          Brave, Coc Coc, Kiwi Browser (Android)
          <br />
          Suggest dice scripts:
          <a href="https://github.com/webdicebot-project/awesome-scripts" target="_blank">
            webdicebot-project/awesome-scripts
          </a>
        </p>

        <pre>1. <router-link to="/pages/login">Login</router-link> to Web DiceBot system, deposit Tron (TRX) to <router-link to="/my-wallet">My Wallet</router-link> then <router-link to="/buy-license">Buy License</router-link> with a days you want (minimum 10 days)
2. Copy installer script at <router-link to="/bot-installer">Bot Installer</router-link>
3. Go to casino sites then open Developer tools (press the F12 key) and select Console tab
4. Paste installer script into Console and wait bot interface create
5. Play with your dice script when the bot interface has finished loading</pre>

        <p>
          Your dice script must clean, please follow syntax of programming
          language
          <br />
          You must follow syntax of
          <a href="https://lua.org/manual/5.3" target="_blank"> Lua v5.3 </a>
          when you use Lua script
          <br />
          Use
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
          <a href="https://bc.game/i-1fz8gf65-n" target="_blank"> bc.game </a>
          <br />
          <a href="https://bch.games/play/UT7QfUO3" target="_blank"> bch.games </a>
          <br />
          <a href="https://betfury.io/?r=5f86fffc38b5653094d3206b" target="_blank">
            betfury.io
          </a>
          <br />
          <a href="https://bitsler.com/?ref=mhqb365" target="_blank">
            bitsler.com
          </a>
          <br />
          <a href="https://bitvest.io/?r=134231" target="_blank">
            bitvest.io
          </a>
          <br />
          <a href="https://casinoroyale.bet" target="_blank">
            casinoroyale.bet
          </a>
          <br />
          <a href="https://crypto.games" target="_blank"> crypto.games </a>
          <br />
          <a href="https://cryptoplay.io/?c=mhqb365" target="_blank">
            cryptoplay.io
          </a>
          <br />
          <a href="https://duckdice.io" target="_blank"> duckdice.io </a>
          <br />
          <a href="https://faucetpay.io/?r=2102948" target="_blank">
            faucetpay.io
          </a>
          <br />
          <a href="https://freebitco.in" target="_blank"> freebitco.in </a>
          <br />
          <a href="https://jacksclub.io/?r=~mhqb365" target="_blank">
            jacksclub.io
          </a>
          <br />
          <a href="https://luckydiamond.io/r/mhqb365" target="_blank">
            luckydiamond.io
          </a>
          <br />
          <a href="https://megaplay.io/?c=ZNae4ChvlSSADkGsIxFf" target="_blank">
            megaplay.io
          </a>
          <br />
          <a href="https://nanogames.io/i-f0810ew-n/" target="_blank">
            nanogames.io
          </a>
          <br />
          <a href="https://paradice.in/?c=@mhqb365" target="_blank">
            paradice.in
          </a>
          <br />
          <a href="https://pasino.com/?user_id=41111" target="_blank">
            pasino.com
          </a>
          <br />
          <a href="https://primedice.com/?c=3e6d33fce7" target="_blank">
            primedice.com
          </a>
          <br />
          <a href="https://punt.com/?aid=1949" target="_blank"> punt.com </a>
          <br />
          <a href="https://sicodice.com" target="_blank"> sicodice.com </a>
          <br />
          <a href="https://stake.com/?c=26b21743fa" target="_blank">
            stake.com
          </a>
          <br />
          <a href="https://starbets.io/ref=r3oaasMDgA" target="_blank">
            starbets.io
          </a>
          <br />
          <a href="https://windice.io/?r=mhqb365" target="_blank">
            windice.io
          </a>
          <br />
          <a href="https://wintomato.com/en/registration/1604" target="_blank">
            wintomato.com
          </a>
          <br />
          <a href="https://wolf.bet/?c=mhqb365" target="_blank"> wolf.bet </a>
          <br />
        </p>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
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
