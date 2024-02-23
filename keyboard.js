import { Markup } from "telegraf";

export function getMainMenu(){
    return Markup.keyboard(['Добавить музыку', 'Добавить в плейлист', 'Топ чарт', 'Популярная песня']).resize()
}

export function yesNoKeyboard(){
    return Markup.inlineKeyboard([Markup.button.callback('Да', 'yes'), Markup.button.callback('Нет', 'no')])
}