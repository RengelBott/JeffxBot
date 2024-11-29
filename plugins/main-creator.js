let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Jeffx;;\nFN:Jeffx\nORG:Jeffx\nTITLE:\nTEL;waid=17207568895:5218261275256\nX-ABLabel:Jeffx\nEND:VCARD`
  
  await conn.sendMessage(m.chat, { 
    contacts: { 
      displayName: 'Jeffx', 
      contacts: [{ vcard }] 
    }
  }, { quoted: m })
}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño']

export default handler
