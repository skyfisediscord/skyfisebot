import discord
from discord.ext import commands

TOKEN = 'NzI1NDYzMzM3MTgxMjQ5NTg2.XvT5kA.P5mDxkmiHy-hNDhrU2ouBRGMGeY'
bot = commands.Bot(command_prefix='!')


@bot.command(pass_context=True)  # разрешаем передавать агрументы
async def test(ctx, arg):  # создаем асинхронную фунцию бота
    await ctx.send(arg)  # отправляем обратно аргумент


bot.run("NzI1NDYzMzM3MTgxMjQ5NTg2.XvT5kA.P5mDxkmiHy-hNDhrU2ouBRGMGeY")
