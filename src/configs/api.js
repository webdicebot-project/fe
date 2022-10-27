const api =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8000'
    : 'https://api-bot.mhqb365.com'

export default api
