##############################################
############################################## IMPORTS
##############################################

import discord
from discord.ext import commands
from config import settings
import asyncio

##############################################
############################################## SETTINGS PREFIX
##############################################

client = commands.Bot(command_prefix = settings['prefix'])
client.remove_command('help')

##############################################
############################################## LOGS BOT CONNECTED 
##############################################

@client.event
async def on_ready():
    print('Bot connection...\nLoading\nBot connected!')

##############################################
############################################## TEST ONLINE BOT
##############################################

@client.command()
async def test(ctx):
    author = ctx.message.author
    await ctx.send(f'{author}, bot online!')

##############################################
############################################## CLEAR MESSAGE
##############################################

@client.command()
@commands.has_permissions(administrator = True)
async def clear(ctx, amount = 1000):
    await ctx.channel.purge(limit = amount)

    author = ctx.message.author
    await ctx.send(f'{author.mention}, было успешно удалено!')

##############################################
############################################## KICK
##############################################

@client.command()
@commands.has_permissions(administrator = True)
async def kick(ctx, member: discord.Member, *, reason = None):
    await member.kick(reason = reason)
    await ctx.send(f'Был кикнут {member.mention}. `{member.name}`')

##############################################
############################################## BAN
##############################################

@client.command()
@commands.has_permissions(administrator = True)
async def ban(ctx, member: discord.Member, *, reason = None):
    await member.ban(reason = reason)
    await ctx.send(f'Был забанен {member.mention}. `{member.name}`')

##############################################
############################################## UNBAN
##############################################

@client.command()
@commands.has_permissions(administrator = True)
async def unban(ctx,*, member):
    banned_users = await ctx.guild.bans()
    for ban_entry in banned_users: 
        user = ban_entry.user
        await ctx.guild.unban(uesr)
        await ctx.send(f'`{user.name}` был разбанен! ')
        return

##############################################
############################################## 
##############################################

@client.command()
async def help(ctx):
    emb = discord.Embed(title = ':compass: Навигация по командам :compass: ')
    emb.add_field(name = '`s!clear`', value = 'Очистка чата. до 1-ой тысячи сообщений.')
    emb.add_field(name = '`s!unban`', value = 'Разбанить забаненного пользователя.')
    emb.add_field(name = '`s!ban`', value = 'Забанить пользователя.')
    emb.add_field(name = '`s!kick`', value = 'Кикнуть пользователя.')
    emb.add_field(name = '`s!test`', value = 'Проверить состояние бота.')
    emb.add_field(name = '`s!help`', value = 'Вывести список команд бота.')
    await ctx.send(embed = emb)

##############################################
############################################## 
##############################################

client.run(env.process.token)
