const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/q2brLTY.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*zaramwol bot created by sanu*
*Creator number : wa.me/918089915818*

*support group : https://chat.whatsapp.com/IIlNnP83Nd25i5W5rCr5wi*

*Githublink (Setup)  :    https://github.com/sanusanah/zaramwol*

*Audio commads :   https://github.com/sanusanah/zaramwol/pikachu/tree/master/uploads*

*Sticker commads : https://github.com/sanusanah/zaramwol/tree/master/uploads*

*support group 2 : https://chat.whatsapp.com/H1X6sQsRtCe9W10HkZblle*

*For More Updates Subscribe The Channel ☝*
`}) 

}));
