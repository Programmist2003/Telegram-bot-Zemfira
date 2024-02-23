import express from 'express'
import { PORT, TOKEN } from './config.js'
import { Telegraf, Markup} from 'telegraf'
import { getMainMenu } from './keyboard.js'
const app = express()
const bot = new Telegraf(TOKEN)


bot.start(ctx => {
    ctx.reply('Добро пожаловать в музыкальный бот про певицу Земфира!😄', getMainMenu())
})

bot.command('time', ctx=>{
    ctx.reply(String(new Date()))
})


bot.hears('Добавить музыку', ctx => {
ctx.reply('Вы успешно добавили музыку!')
})

bot.hears('Добавить в плейлист', ctx => {
    ctx.reply('Какую  вы хотите добавить песню?')
ctx.reply('Успешно добавлено!')
})

bot.hears('Топ чарт', ctx => {
    ctx.replyWithPhoto('https://i.ytimg.com/vi/U_EddG1dFhk/maxresdefault.jpg',{caption: 'Земфира, альбом ПММЛ, СОЗРЕЛА'})
    ctx.replyWithPhoto('https://interesnyefakty.org/wp-content/uploads/zemfira.jpg', {caption:'Земифра, альбом Вендетта, Итоги'})
ctx.replyWithPhoto('https://i.ytimg.com/vi/a6UbcxVQKvs/maxresdefault.jpg', {caption: 'Земфира, альбом Земфира, Ромашки'})
ctx.replyWithPhoto('https://avatars.dzeninfra.ru/get-zen_doc/4480952/pub_602f752e3ad6ee787c30cf3b_602f75cdbc490b672518fc48/scale_1200', {caption: 'Зефмра, альбом  Бодерлайн, Остин'})
})


bot.help(ctx => {
    ctx.reply('Чем могу быть полезен?');
    })
bot.command( 'restart', ctx =>{
    ctx.reply('До свидания!')
})
bot.command('create', ctx =>{
    ctx.reply('Вы создали плейлист!')
})


bot.command('add', ctx=> {
    ctx.reply('Вы добавили песню!')
})
bot.launch()

app.listen(PORT, () => console.log('Server is run on port 3000'))
