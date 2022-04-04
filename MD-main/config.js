/**
   * Create By SOLID
   * Contact Me on wa.me/6283175691841
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6282257155167','0','6282257155167']
global.pemilik = ['6282257155167']
global.premium = ['Gak Ada']
global.pengguna = 'SOLID'
global.botnma = 'SOLID-MD'
global.footer = 'SOLID' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://www.youtube.com/channel/UCgg4cD17udpfP6n78KjvQ1g' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'Wa.me/6282257155167' //Ubah Jga Bebas Sama lu 
global.ganti = 'Y O U T U B E ME' //Edit Terserah Lu Mau Apa
global.ganti2 = 'WhatsApp'
global.ownernma = 'ReomitAzzam'
global.packname = 'ReoBot'
global.author =   'ReomitAzzam'
global.sessionName = 'nahh'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
