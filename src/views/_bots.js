const bots = [
  {
    label: 'Select bot you need',
    value: 'Not have installer in this select',
    tips: '',
  },
  {
    label: 'bc.game - classic dice',
    value: `const CASINO_GAME = 'bc-classic-dice';`,
    tips: `Paste installer script at game page\n
bc.game/game/classic-dice`,
  },
  {
    label: 'bc.game - hash dice',
    value: `const CASINO_GAME = 'bc-hash-dice';`,
    tips: `Paste installer script at game page\n
bc.game/game/hash-dice`,
  },
  {
    label: 'bc.game - limbo',
    value: `const CASINO_GAME = 'bc-limbo';`,
    tips: `Paste installer script at game page\n
bc.game/game/limbo`,
  },
  {
    label: 'bch.games - dice',
    value: `const CASINO_GAME = 'bch-dice';`,
    tips: '',
  },
  {
    label: 'betfury.io - dice',
    value: `const CASINO_GAME = 'betfury-dice';`,
    tips: `Paste installer script at home page\n
betfury.io`,
  },
  {
    label: 'betfury.io - limbo',
    value: `const CASINO_GAME = 'betfury-limbo';`,
    tips: `Paste installer script at home page\n
betfury.io`,
  },
  {
    label: 'betfury.io - space dice',
    value: `const CASINO_GAME = 'betfury-space-dice';`,
    tips: `Paste installer script at home page\n
betfury.io`,
  },
  {
    label: 'bitsler.com - boom',
    value: `const CASINO_GAME = 'bitsler-boom';`,
    tips: '',
  },
  {
    label: 'bitsler.com - dice',
    value: `const CASINO_GAME = 'bitsler-dice';`,
    tips: '',
  },
  {
    label: 'bitsler.com - twist',
    value: `const CASINO_GAME = 'bitsler-twist';`,
    tips: '',
  },
  {
    label: 'bitvest.io - dice',
    value: `const CASINO_GAME = 'bitvest';`,
    tips: '',
  },
  {
    label: 'casinoroyale.bet - dice classic',
    value: `const CASINO_GAME = 'casinoroyale-dice-classic';`,
    tips: '',
  },
  {
    label: 'coins.game - dice (NEW)',
    value: `const CASINO_GAME = 'coins-game-dice';`,
    tips: '',
  },
  {
    label: 'coins.game - limbo (NEW)',
    value: `const CASINO_GAME = 'coins-game-limbo';`,
    tips: '',
  },
  {
    label: 'crypto.games - dice',
    value: `const CASINO_GAME = 'crypto-games-dice';`,
    tips: '',
  },
  {
    label: 'cryptoplay.io - dice',
    value: `const CASINO_GAME = 'cryptoplay-dice';`,
    tips: '',
  },
  {
    label: 'cryptoplay.io - limbo',
    value: `const CASINO_GAME = 'cryptoplay-limbo';`,
    tips: '',
  },
  {
    label: 'duckdice.io - faucet',
    value: `const CASINO_GAME = 'duckdice-faucet';`,
    tips: '',
  },
  {
    label: 'duckdice.io - horror',
    value: `const CASINO_GAME = 'duckdice-horror';`,
  },
  {
    label: 'duckdice.io - main',
    value: `const CASINO_GAME = 'duckdice-main';`,
    tips: '',
  },
  {
    label: 'duckdice.io - xmas',
    value: `const CASINO_GAME = 'duckdice-xmas';`,
    tips: '',
  },
  {
    label: 'faucetpay.io - dice',
    value: `const CASINO_GAME = 'faucetpay-dice';`,
    tips: '',
  },
  {
    label: 'faucetpay.io - limbo',
    value: `const CASINO_GAME = 'faucetpay-limbo';`,
    tips: '',
  },
  {
    label: 'freebitco.in',
    value: `const CASINO_GAME = 'freebitco';`,
    tips: '',
  },
  {
    label: 'jacksclub.io - blaze',
    value: `const CASINO_GAME = 'jacksclub-blaze';`,
    tips: '',
  },
  {
    label: 'jacksclub.io - dice',
    value: `const CASINO_GAME = 'jacksclub-dice';`,
    tips: '',
  },
  {
    label: 'luckybird.io - dice (NEW)',
    value: `const CASINO_GAME = 'luckybird-dice';`,
    tips: `See video tips: https://youtu.be/FEuWOEFRrMM`,
  },
  {
    label: 'luckydiamond.io - dice',
    value: `const CASINO_GAME = 'luckydiamond-dice';`,
  },
  {
    label: 'luckydiamond.io - limbo',
    value: `const CASINO_GAME = 'luckydiamond-limbo';`,
    tips: '',
  },
  {
    label: 'megaplay.io - dice',
    value: `const CASINO_GAME = 'megaplay-dice';`,
    tips: `Paste installer script at home page\n
megaplay.io`,
  },
  {
    label: 'megaplay.io - limbo',
    value: `const CASINO_GAME = 'megaplay-limbo';`,
    tips: `Paste installer script at home page\n
megaplay.io`,
  },
  {
    label: 'nanogames.io - classic dice',
    value: `const CASINO_GAME = 'nanogames-classic-dice';`,
    tips: '',
  },
  {
    label: 'nanogames.io - hash dice',
    value: `const CASINO_GAME = 'nanogames-hash-dice';`,
    tips: '',
  },
  {
    label: 'nanogames.io - limbo',
    value: `const CASINO_GAME = 'nanogames-limbo';`,
    tips: '',
  },
  {
    label: 'paradice.in - dice',
    value: `const CASINO_GAME = 'paradice';`,
    tips: '',
  },
  {
    label: 'pasino.com - hash dice',
    value: `const CASINO_GAME = 'pasino-hash-dice';`,
    tips: '',
  },
  {
    label: 'pasino.com - limbo',
    value: `const CASINO_GAME = 'pasino-limbo';`,
    tips: '',
  },
  {
    label: 'primedice.com',
    value: `const CASINO_GAME = 'primedice';`,
    tips: '',
  },
  {
    label: 'punt.com - dice',
    value: `const CASINO_GAME = 'punt-dice';`,
    tips: `Paste installer script at page without load bet\n
punt.com/affiliates/overview`,
  },
  {
    label: 'punt.com - limbo',
    value: `const CASINO_GAME = 'punt-limbo';`,
    tips: `Paste installer script at page without load bet\n
punt.com/affiliates/overview`,
  },
  {
    label: 'sicodice.com - bonus',
    value: `const CASINO_GAME = 'sicodice-bonus';`,
    tips: '',
  },
  {
    label: 'sicodice.com - main',
    value: `const CASINO_GAME = 'sicodice-main';`,
    tips: '',
  },
  {
    label: 'stake.com - dice',
    value: `const CASINO_GAME = 'stake-dice';`,
    tips: `Paste installer script at page without load bet\n
stake.com/transactions/deposits`,
  },
  {
    label: 'stake.com - limbo',
    value: `const CASINO_GAME = 'stake-limbo';`,
    tips: `Paste installer script at page without load bet\n
stake.com/transactions/deposits`,
  },
  {
    label: 'starbets - dice',
    value: `const CASINO_GAME = 'starbets-dice';`,
    tips: '',
  },
  {
    label: 'starbets - limbo',
    value: `const CASINO_GAME = 'starbets-limbo';`,
    tips: '',
  },
  {
    label: 'windice.io - dice',
    value: `const CASINO_GAME = 'windice-dice';`,
    tips: '',
  },
  {
    label: 'wintomato.com - dice',
    value: `const CASINO_GAME = 'wintomato-dice';`,
    tips: '',
  },
  {
    label: 'wolf.bet - dice',
    value: `const CASINO_GAME = 'wolf-dice';`,
    tips: '',
  },
  {
    label: 'wolf.bet - limbo',
    value: `const CASINO_GAME = 'wolf-limbo';`,
    tips: '',
  },
]

export default bots
