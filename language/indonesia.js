exports.wait = () => {
    return `*[ WAIT ]* ⏳ Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `*[ DONE ]* Perintah Berhasil!`
}

exports.err = () => {
    return `*[ WARN ]* Fitur Sedang Error`
}
exports.erorLink = () => {
    return `*[ WARN ]* Link nya error`
}
exports.media = () => {
    return `*[ INFO ]* Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `*[ INFO ]* Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `*[ WARN ]* Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `*[ WARN ]* Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `*[ WARN ]* Command *${cmd}* tidak terdaftar di *menu*`
}

exports.ownerOnly = () => {
    return `*[ WARN ]* Command ini khusus Owner!`
}

exports.doneOwner = () => {
    return `*[ DONE ]*  ️Sudah selesai, Hilmy Sayang ~`
}

exports.groupOnly = () => {
    return `*[ WARN ]*  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `*[ WARN ]*  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `*[ WARN ]* Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF STUPID 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `*[ INFO ]* User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `*[ WARN ]* Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `*[ WARN ]* Jadikan Sagiri sebagai admin terlebih dahulu! `
}

exports.received = (pushname) => {
    return `*[ DONE ]*
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `*[ WARN ]*Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `*[ WARN ]* "${q}", bukan angka!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
Menu Sagiri Di Sini Yang Onii Chan~

╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Group 」 
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]


╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}film [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」 
├ ${prefix}stiker [reply image]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image]
├ ${prefix}utatoo [reply image]
├ ${prefix}unsharpen [reply image]
├ ${prefix}thanos [reply image]
├ ${prefix}sniper [reply image]
├ ${prefix}sharpen [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}scary [reply image]
├ ${prefix}rip [reply image]
├ ${prefix}redple [reply image]
├ ${prefix}rejected [reply image]
├ ${prefix}posterize [reply image]
├ ${prefix}ps4 [reply image]
├ ${prefix}pixelize [reply image]
├ ${prefix}missionpassed [reply image]
├ ${prefix}moustache [reply image]
├ ${prefix}lookwhatkarenhave [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}instagram [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}glitch [reply image]
├ ${prefix}gay [reply image]
├ ${prefix}frame [reply image]
├ ${prefix}fire [reply image]
├ ${prefix}distort [reply image]
├ ${prefix}dictator [reply image]
├ ${prefix}deepfry [reply image]
├ ${prefix}ddungeon [reply image]
├ ${prefix}circle [reply image]
├ ${prefix}challenger [reply image]
├ ${prefix}burn [reply image]
├ ${prefix}brazzers [reply image]
├ ${prefix}beautiful [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}red [reply image]
├ ${prefix}gay [reply image]
├ ${prefix}bloo [reply image]
├ ${prefix}blue [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}green [reply image]
├ ${prefix}glass [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}blurple [reply image]
├ ${prefix}blurple2 [reply image]
├ ${prefix}wasted [reply image]
├ ${prefix}passed [reply image]
├ ${prefix}triggered [reply image]
├ ${prefix}comrade [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}threshold [reply image]
├ ${prefix}brightness [reply image]
╰❒ ${prefix}invertgreyscale [reply image]


╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
╰❒ ${prefix}twitter link


╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe


╭─❒ 「 TqTo 」 
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ ZeeoneOfc
├ HilmySakti
├ Penyedia Module
╰❒ And All Support

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini Single Prefix jadi... prefix yang di gunakan hanya *'#'*

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan SagiriBot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu!
`
}
exports.welcome = () =>{
	return`*[ INFO ]*
𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 Onii Chan!
	
𝖭𝖺𝗆𝖺 :
𝖴𝗆𝗎𝗋 :
𝖦𝖾𝗇𝖽𝖾𝗋 :
𝖠𝗌𝗄𝗈𝗍 :
 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 Onii Chann!`
}
exports.leave = () =>{
	return`*[ INFO ]* Yah kok out 😣 Mental aman kan Onii Chan >.<
Goodbye`
}
exports.source = () =>{
return`*── 「 SOURCE 」 ──*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://github.com/zeeoneofc/Alphabot-Md
Recode2 : https://github.com/HilmySakti/SagiriBot-MD
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 081217779427 (GoPay)
📱 https://trakteer.id/HiSkayXD (Trakteer)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownernomer} (Owner)

    `
}
