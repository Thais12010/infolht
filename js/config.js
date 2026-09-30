/**
 * ====================================================================
 *                 LƯƠNG THÁI BIO - CẤU HÌNH TÙY CHỈNH (CONFIG)
 * ====================================================================
 * Professional English Configuration & Elite Bio Information
 */

const CONFIG = {
    // 1. DISCORD USER ID:
    discordId: "1141722307195306005",

    // 2. THÔNG TIN PROFILE:
    profile: {
        name: "Lương Thái",
        username: "luongthaik11",
        title: "Gamer • Music Lover • Coffee Addict",
        avatar: "https://i.ibb.co/qYd0vXH5/anh-dz.png",
        banner: "assets/img/server-banner.png",
        bio: "Just a normal guy who enjoys the simple things in life. Passionate about gaming and good music. Welcome to my little corner of the internet.",
        location: "Bắc Ninh, Việt Nam",
        quotes: [
            "Gaming, coffee & good vibes.",
            "Living one chill day at a time.",
            "Music on, worries off.",
            "Collecting moments, not things."
        ],
        badges: [
            { icon: "fa-solid fa-gamepad", label: "Gamer", color: "#ffffff" },
            { icon: "fa-solid fa-headphones", label: "Nghe nhạc", color: "#e0e0e0" },
            { icon: "fa-solid fa-terminal", label: "Skider", color: "#ffffff" }
        ]
    },

    // 3. DANH SÁCH DISCORD SERVER:
    servers: [
        {
            name: "Lương Thái",
            role: "Cộng đồng của Lương Thái",
            description: "Cộng đồng Discord chính thức của Lương Thái — nơi giao lưu, chia sẻ và kết nối.",
            inviteUrl: "https://discord.com/invite/DapSM4weVe",
            icon: "https://i.ibb.co/fjPcYkd/26c2d836d3aca60ef4e5089582a1588d.png",
            banner: "assets/img/server-banner.png",
            cdnIcon: "https://i.ibb.co/fjPcYkd/26c2d836d3aca60ef4e5089582a1588d.png",
            cdnBanner: "assets/img/server-banner.png",
            members: "1,008 Members",
            online: "129 Online",
            tag: "COMMUNITY",
            featured: true
        }
    ],

    // 4. MẠNG XÃ HỘI / LIÊN HỆ (DIRECT CONNECTIONS):
    socials: [
        { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@luonghongthai_" }
    ],

    // 5. NHẠC NỀN & PLAYLIST (AUDIO PLAYLIST):
    music: {
        autoplayOnEnter: true,
        volume: 0.4,
        playlist: [
            {
                title: "Mưa Đợi Chờ",
                artist: "Lương Thái",
                url: "assets/audio/bai1.mp3"
            },
            {
                title: "Birthday Six",
                artist: "Lương Thái",
                url: "assets/audio/bai2.mp3"
            }
        ],
        // Default / Initial Track Fallback
        title: "Mưa Đợi Chờ",
        artist: "Lương Thái",
        url: "assets/audio/bai1.mp3"
    },

    // 6. HIỆU ỨNG:
    effects: {
        enableTilt: true,
        enableSpotlight: true,
        enableCustomCursor: true,
        enableParticles: true,
        enableShootingStars: true
    },

    // 7. SỞ THÍCH & PHONG CÁCH SỐNG (CORE - 6 PILLARS):
    techStack: [
        { name: "Gaming", domain: "PC • Mobile • Co-op", icon: "fa-solid fa-gamepad" },
        { name: "Nghe nhạc", domain: "Lofi • Chill • V-Pop", icon: "fa-solid fa-headphones" },
        { name: "Skider", domain: "Script • Tools • Code", icon: "fa-solid fa-terminal" }
    ]
};



