const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcodes = require('qrcode');
const fs = require('fs')
const gcrevoke = JSON.parse(fs.readFileSync('./database/autorevoke.json'))
blocked = []
const conn = new WAConnection()
conn.version = [2, 2119, 6]
const base64ToImage = require('base64-to-image');
exports.jadibot = async function(hexa,from,sender,reply,mek) {  
conn.on('qr' ,async qr => {
  url = await qrcodes.toDataURL(qr)
  auth = true
        //console.log(url)
        buff = await Buffer.from(url.split('data:image/png;base64,')[1], 'base64')
        await fs.writeFileSync('./jadibot.jpg', buff)
    let scen = await hexa.sendMessage(from, fs.readFileSync('./jadibot.jpg'), MessageType.image, {quoted : mek,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})
    
  setTimeout(() => {
       hexa.deleteMessage(from, scen.key)
  }, 30000);
  })
   setTimeout(() => {
       conn.close()
       reply('Waktu scan anda sudah habis')
  }, 90000);

conn.on ('open',() => {
  console.log ('credentials update')
  const authInfo = conn.base64EncodedAuthInfo()
  fs.writeFileSync(`./database/jadibot/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
})
    conn.on('chat-update', async (chat) => {
        require('./fitur.js')(conn, chat)
    })
     conn.on('group-participants-update', async (anu) => {
	try {
		const mdata = await conn.groupMetadata(anu.jid)
                const behys = mdata.participants.length
		console.log(anu)
		if (anu.action == 'add') {
                if (gcrevoke.includes(anu.jid)) {
                conn.revokeInvite(anu.jid)
                }
			num = anu.participants[0]
			hesa = `${num}`
		  mestes = (teks) => {
					return teks.replace(/['@s whatsapp.net']/g, " ");
					}
			resa = `${mestes(hesa)}`
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = conn.contacts[num] != undefined ? conn.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : conn.contacts[num].notify || conn.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await conn.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './media/image/pp.jpeg'
			}
				exec(`magick './media/image/wel.jpg' -gravity west -fill '#ffffff' -font './media/font/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 '${resa}' -pointsize 51 -annotate +460+83 '${jm} ${calender}' -pointsize 48 -annotate +100+230 'MEMBER + ${behys}' -pointsize 63 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite 'hasil.jpg'`)
				.on('error', () => conn.sendMessage(m.chat, 'error', MessageType.text))
				.on('exit', () => {
			conn.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*Hay!!,Jangan Lupa Baca Deskripsi Dan Patuhi Peraturan Grup* @${num.split('@')[0]}`, contextInfo: { mentionedJid: [num] }})
			})
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		hesa = `${num}`
		  mestes = (teks) => {
					return teks.replace(/['@s whatsapp.net']/g, " ");
					}
			resa = `${mestes(hesa)}`
const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Janua@ri 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = conn.contacts[num] != undefined ? conn.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : conn.contacts[num].notify || conn.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await conn.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './media/image/pp.jpeg'
			}
				exec(`magick './media/image/lev.jpg' -gravity west -fill '#ffffff' -font './media/font/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 '${resa}' -pointsize 51 -annotate +460+83 '${jamny} ${calender}' -pointsize 48 -annotate +100+230 'MEMBER - ${behys}' -pointsize 63 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite 'hasil.jpg'`)
				.on('error', () => conn.sendMessage(m.chat, 'error', MessageType.text))
				.on('exit', () => {
			conn.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*Sayonara👋🏻*@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})
	
	antidel = true
conn.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
conn.sendMessage(m.key.remoteJid, `\`\`\`「 Anti Delete 」\`\`\`
•> Nama : @${m.participant.split("@")[0]}
•> Waktu : ${jam} ${week} ${calender}
•> Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

conn.copyNForward(m.key.remoteJid, m.message)
})
antical = true
conn.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
conn.sendMessage(call, `*Sorry ${conn.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => conn.blockUser(call, "add"))
})
isBattre = 'Not Detect' // Battre Belum Kedetect ( MyMans APIs )
isCharge = 'Not Detect' // Charging Belum Kedetect ( MyMans APIs )
conn.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
conn.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
    
    await conn.connect().then(async ({user}) => {
      reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
    })
    conn.on('close',() => {
    hexa.sendMessage(`${conn.user.jid}`, 'Koneksi terputus...', MessageType.text)
    fs.unlinkSync(`./database/jadibot/${conn.user.jid}.json`)
    })
    }
exports.stopjadibot = async function(hexa, from, sender){
  hexa.sendMessage(from,'Kamu tidak terdaftar di ListBot!',MessageType.text)
  await fs.unlinkSync(`./database/jadibot/${sender}.json`)
  conn.close()
}
