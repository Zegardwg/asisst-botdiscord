// Import modul yang dibutuhkan
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

// Buat instance Client dengan intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Untuk mendeteksi server
        GatewayIntentBits.GuildMessages, // Untuk menangkap pesan di server
        GatewayIntentBits.MessageContent, // Untuk membaca isi pesan
        GatewayIntentBits.GuildMembers, // Jika bot perlu informasi anggota server
    ],
});

// Event saat bot siap
client.once('ready', () => {
    console.log(`${client.user.username} is online!`);

    // Daftar status yang akan ditampilkan
    const statuses = [
        { name: 'Jasa Dev SAMP, FiveM, Website', type: ActivityType.Watching },
        { name: 'Jasa Media Sosial Murah ', type: ActivityType.Listening },
        { name: 'TikTok & Instagram', type: ActivityType.Playing },
    ];

    let index = 0;

    // Ganti status setiap 30 detik
    setInterval(() => {
        const status = statuses[index];
        client.user.setActivity(status.name, { type: status.type });
        index = (index + 1) % statuses.length; // Bergilir ke status berikutnya
    }, 30000); // 30 detik
});

// Login bot (ganti dengan token bot Anda)
client.login('TOKEN');
