const bots = [
  {
    label: 'Select bot you need',
    value: 'Not have installer in this select',
  },
  {
    label: 'bc.game - classic dice',
    value: `const CASINO_GAME = 'bc-classic-dice';`,
    tips: `Paste installer script at game page\n
example: bc.game/game/classic-dice`,
  },
  {
    label: 'bc.game - hash dice',
    value: `const CASINO_GAME = 'bc-hash-dice';`,
    tips: `Paste installer script at game page\n
example: bc.game/game/hash-dice`,
  },
  {
    label: 'bc.game - limbo',
    value: `const CASINO_GAME = 'bc-limbo';`,
    tips: `Paste installer script at game page\n
example: bc.game/game/limbo`,
  },
  {
    label: 'bch.games - dice',
    value: `const CASINO_GAME = 'bch-dice';`,
  },
  {
    label: 'betfury.io - dice',
    value: `const CASINO_GAME = 'betfury-dice';`,
    tips: `Paste installer script at home page\n
example: betfury.io`,
  },
  {
    label: 'betfury.io - limbo',
    value: `const CASINO_GAME = 'betfury-limbo';`,
    tips: `Paste installer script at home page\n
example: betfury.io`,
  },
  {
    label: 'betfury.io - space dice',
    value: `const CASINO_GAME = 'betfury-space-dice';`,
    tips: `Paste installer script at home page\n
example: betfury.io`,
  },
  {
    label: 'bitsler.com - boom',
    value: `const CASINO_GAME = 'bitsler-boom';`,
  },
  {
    label: 'bitsler.com - dice',
    value: `const CASINO_GAME = 'bitsler-dice';`,
  },
  {
    label: 'bitsler.com - twist',
    value: `const CASINO_GAME = 'bitsler-twist';`,
  },
  {
    label: 'bitvest.io - dice',
    value: `const CASINO_GAME = 'bitvest';`,
  },
  {
    label: 'casinoroyale.bet - dice classic',
    value: `const CASINO_GAME = 'casinoroyale-dice-classic';`,
  },
  {
    label: 'crypto.games - dice',
    value: `const CASINO_GAME = 'crypto-games-dice';`,
  },
  {
    label: 'cryptoplay.io - dice',
    value: `const CASINO_GAME = 'cryptoplay-dice';`,
  },
  {
    label: 'cryptoplay.io - limbo',
    value: `const CASINO_GAME = 'cryptoplay-limbo';`,
  },
  {
    label: 'duckdice.io - faucet',
    value: `const CASINO_GAME = 'duckdice-faucet';`,
  },
  {
    label: 'duckdice.io - horror',
    value: `const CASINO_GAME = 'duckdice-horror';`,
  },
  {
    label: 'duckdice.io - main',
    value: `const CASINO_GAME = 'duckdice-main';`,
  },
  {
    label: 'faucetpay.io - dice',
    value: `const CASINO_GAME = 'faucetpay-dice';`,
  },
  {
    label: 'faucetpay.io - limbo',
    value: `const CASINO_GAME = 'faucetpay-limbo';`,
  },
  {
    label: 'freebitco.in',
    value: `const CASINO_GAME = 'freebitco';`,
  },
  {
    label: 'jacksclub.io - blaze',
    value: `const CASINO_GAME = 'jacksclub-blaze';`,
  },
  {
    label: 'jacksclub.io - dice',
    value: `const CASINO_GAME = 'jacksclub-dice';`,
  },
  {
    label: 'luckydiamond.io - dice',
    value: `const CASINO_GAME = 'luckydiamond-dice';`,
  },
  {
    label: 'luckydiamond.io - limbo',
    value: `const CASINO_GAME = 'luckydiamond-limbo';`,
  },
  {
    label: 'megaplay.io - dice',
    value: `const CASINO_GAME = 'megaplay-dice';`,
    tips: `Paste installer script at home page\n
example: megaplay.io`,
  },
  {
    label: 'megaplay.io - limbo',
    value: `const CASINO_GAME = 'megaplay-limbo';`,
    tips: `Paste installer script at home page\n
example: megaplay.io`,
  },
  {
    label: 'nanogames.io - classic dice',
    value: `const CASINO_GAME = 'nanogames-classic-dice';`,
  },
  {
    label: 'nanogames.io - hash dice',
    value: `const CASINO_GAME = 'nanogames-hash-dice';`,
  },
  {
    label: 'nanogames.io - limbo',
    value: `const CASINO_GAME = 'nanogames-limbo';`,
  },
  {
    label: 'paradice.in - dice',
    value: `const CASINO_GAME = 'paradice';`,
  },
  {
    label: 'pasino.com - hash dice',
    value: `const CASINO_GAME = 'pasino-hash-dice';`,
  },
  {
    label: 'pasino.com - limbo',
    value: `const CASINO_GAME = 'pasino-limbo';`,
  },
  {
    label: 'primedice.com',
    value: `const CASINO_GAME = 'primedice';`,
  },
  {
    label: 'punt.com - dice',
    value: `const CASINO_GAME = 'punt-dice';`,
    tips: `Paste installer script at page without load bet\n
example: punt.com/affiliates/overview`,
  },
  {
    label: 'punt.com - limbo',
    value: `const CASINO_GAME = 'punt-limbo';`,
    tips: `Paste installer script at page without load bet\n
example: punt.com/affiliates/overview`,
  },
  {
    label: 'sicodice.com',
    value: `const CASINO_GAME = 'sicodice';`,
  },
  {
    label: 'stake.com - dice',
    value: `const CASINO_GAME = 'stake-dice';`,
    tips: `Paste installer script at page without load bet\n
example: stake.com/transactions/deposits`,
  },
  {
    label: 'stake.com - limbo',
    value: `const CASINO_GAME = 'stake-limbo';`,
    tips: `Paste installer script at page without load bet\n
example: stake.com/transactions/deposits`,
  },
  {
    label: 'starbets - dice',
    value: `const CASINO_GAME = 'starbets-dice';`,
  },
  {
    label: 'starbets - limbo',
    value: `const CASINO_GAME = 'starbets-limbo';`,
  },
  {
    label: 'windice.io - dice',
    value: `const CASINO_GAME = 'windice-dice';`,
  },
  {
    label: 'wintomato.com - dice',
    value: `const CASINO_GAME = 'wintomato-dice';`,
  },
  {
    label: 'wolf.bet - dice',
    value: `const CASINO_GAME = 'wolf-dice';`,
  },
  {
    label: 'wolf.bet - limbo',
    value: `const CASINO_GAME = 'wolf-limbo';`,
  },
]

export default bots
