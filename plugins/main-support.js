 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName}ᴮᴼᵀ ┃ SUPPORT*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Canal
${fgcanal}

▢ Grupo *1*
${bgp}

▢ Grupo *2*
${bgp2}

▢ Grupo *NSFW* 🔞
${bgp3}

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Todos los Grupos
 https://chat.whatsapp.com/IGCpz17I0JYA9U6RtGuczK

▢ *Rengel1*
• 
 ▢ *Rengel2*
• 
▢ *Rengel3*
• `)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
