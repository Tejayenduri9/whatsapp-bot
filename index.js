const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('📱 Scan this QR code with WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ WhatsApp Bot is ready!');
});

client.on('message', async (message) => {
    if (message.body.toLowerCase().includes('new order')) {
        await message.reply('Thank you for your order🙏. Our team will shortly review your order and send you the confirmation.');
    }
});

client.initialize();
