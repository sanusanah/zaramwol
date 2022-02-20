const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/q2brLTY.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━✨️MADE BY SANU✨️━━━━━⛦
𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 zara mwol 𝐛𝐨𝐭.
            *sanu sanah*
■□■□■□■□■□■□■□■□■□■□
NO COMMANDS AT THIS TIME
■□■□■□■□■□■□■□■□■□■□
═════💢zaramwol💢═════
▣▣▣▣▣▣▣▣▣sanu▣▣▣▣▣▣▣▣▣▣▣
`}) 

}));
