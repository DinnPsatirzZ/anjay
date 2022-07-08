const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia & english
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
global.botname = "Ilham" //namabot kalian
global.ownername= "Ilham" //nama kalian
global.myweb = "Ilham" //bebas asal jan hapus
global.youtube = "Ilham" //bebas asal jan hapus
global.github = "Ilham" //bebas
global.email = "ilham@gmail.com" //bebas
global.region = "Bekasi" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.owner = ["0"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "0" // nomor wa kalian
global.ownernomerr = "+0" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay

global.packname = 'Ilham' //sticker wm ubah
global.author = 'Gaming' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'Tch.',
    admin: 'Tch.',
    botAdmin: 'Tch.',
    owner: 'Tch.',
    group: 'Tch.',
    private: 'Tch.',
	bot: 'Tch.',
    errtoimg: 'Tch.',
    wait: 'Tch.',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Tch.'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Tch.`))
	delete require.cache[file]
	require(file)
})
