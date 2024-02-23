const { Telegraf } = require('telegraf')
const session = require('telegraf/session')
const bot = new Telegraf(process.env.TOKEN)

bot.use(session())
bot.on('text', (ctx) => {
    ctx.session.counter = ctx.session.counter || 0
    ctx.session.counter++
    return ctx.reply(`Message counter:${ctx.session.counter}`)
  })