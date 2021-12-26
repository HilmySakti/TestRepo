const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'));

// Other
global.owner = ["6281217779427","6288228661473","6281358181668","62859194143712"]
global.packname = 'SAGIRI BOT-MD'
global.youtube = 'https://www.youtube.com/channel/UCK3tm53XlprZXas76Vz5mAA'
global.author = '© HilmySakti'
global.sessionName = 'session'
global.prefa = ['#']
global.sp = '⭔'
global.mess = {
    sukses: '*[ DONE ]* Perintah Berhasil!',
    admin: '*[ WARN ]* Perintah Ini Hanya Bisa Digunakan Oleh Admin!',
    botAdmin: '*[ WARN ]* Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin!',
    owner: '*[ WARN ]* Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '*[ WARN ] *Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: '*[ WARN ]* Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: '*[ ERR ]* Fitur Khusus Pengguna Nomor Bot',
    errtoimg: '*[ ERR ]* Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '*[ WAIT ]* ⏳ Sedang Di Proses',
	lockCmd: '*[ ERR ]* Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync(setting.thumbnail)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
