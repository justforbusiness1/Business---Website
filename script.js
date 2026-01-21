document.addEventListener('DOMContentLoaded', () => {
    
    // --- Language Logic ---
    const translations = {
        en: {
            meta_title: "Universal Java Coffee | Premium Indonesian Coffee Exporter",
            meta_desc: "Universal Java Coffee is a trusted Indonesian exporter of premium Arabica and Robusta coffee beans. Sustainable sourcing directly from farmers to the world.",
            nav_home: "Home",
            nav_about: "About",
            nav_products: "Products",
            nav_contact: "Contact",
            hero_pretitle: "Indonesian Coffee Bean Exporter",
            hero_title: "Universal Java Coffee",
            hero_subtitle: "is an Indonesian export company specializing in premium Arabica and Robusta coffee beans.",
            hero_overview_title: "Company Overview",
            hero_desc: "Universal Java Coffee is an Indonesian export company specializing in high-quality Arabica and Robusta beans, with a strong focus on sustainability, traceability, and long-term partnerships with local farmers.",
            prod_subtitle: "OUR PRODUCT",
            provide_vertical: "INDONESIAN COFFEE BEAN EXPORTER",
            provide_title: "What We Provide",
            provide_desc: "Universal Java Coffee is a supplier of premium-grade green coffee beans from Indonesia, offering both Arabica and Robusta varieties, sourced from highland regions and available in multiple grades for international markets.",
            btn_explore: "Explore our product →",
            diff_subtitle: "WHAT MAKES US DIFFERENT",
            diff_title: "Why Choose Us",
            diff_1_title: "High-Quality Beans",
            diff_1_desc: "Selected Arabica and Robusta beans with consistent flavor and export-grade quality.",
            diff_2_title: "Direct from Farmers",
            diff_2_desc: "Coffee sourced directly from trusted Indonesian farmers to ensure freshness, transparency, and traceability.",
            diff_3_title: "Various Processing Options",
            diff_3_desc: "Full Wash, Natural, and Honey processes tailored to different roasting and market needs.",
            diff_4_title: "Reliable Export Support",
            diff_4_desc: "Professional export handling with clear communication and timely worldwide delivery.",
            export_label: "EXPORT WORLDWIDE",
            export_title: "Exporting the Essence of Indonesian Coffee Worldwide",
            export_desc: "Universal Java Coffee is a trusted Indonesian coffee exporter with strong logistics expertise, consistent quality, and long-term international trade partnerships.",
            btn_contact: "Contact us →",
            partner_subtitle: "EXPORT PARTNER",
            partner_title: "Reliable Export Operations and Logistics",
            btn_menu: "View Menu",
            btn_visit: "Visit Us",
            sect_visit: "Visit Us",
            loc_title: "Location",
            email_title: "Email",
            ig_title: "Instagram",
            wa_title: "WhatsApp",
            footer_text: "© 2026 Universal Java Coffee. All rights reserved.",
            about_story_title: "Our Story",
            about_story_sub: "From Bean to Cup",
            about_story_p1: "Universal Java Coffee is a modern coffee brand rooted in the rich landscapes and traditions of Indonesian coffee. Born from volcanic soil and shaped by generations of craftsmanship, our coffee carries the depth, warmth, and character that make Indonesian beans truly exceptional.",
            about_story_p2: "We carefully select high-quality Indonesian coffee beans and craft each cup with precision and respect — honoring tradition while embracing modern brewing techniques. From bold, earthy flavors to smooth, comforting finishes, every sip is designed to awaken the senses and slow the moment.",
            about_phil_title: "Our Philosophy",
            about_phil_desc: "Rooted in Indonesian heritage, we craft coffee with respect, balance, and intention — creating moments meant to be felt.",
            founder_role: "Founder",
            founder_quote: "\"Coffee isn't just a drink; it's a ritual. I created Universal Java Coffee to share that daily moment of peace with you.\"",
            mission_title: "Our Mission",
            mis_1_title: "Uncompromising Quality",
            mis_1_desc: "We source only the finest Indonesian beans, roasting them to perfection to ensure every cup is a masterpiece of flavor.",
            mis_2_title: "Ethical Sourcing",
            mis_2_desc: "We believe in fair trade and direct partnerships, ensuring our farmers are respected and compensated fairly for their craft.",
            mis_3_title: "Customer Experience",
            mis_3_desc: "Creating a warm, welcoming community where every sip is a moment of peace, connection, and simple joy.",
            mis_4_title: "Sustainability",
            mis_4_desc: "We are dedicated to protecting our planet through eco-friendly farming, sustainable packaging, and waste reduction.",
            vision_title: "Our Vision",
            vis_1_title: "Global Recognition",
            vis_1_desc: "Becoming a recognized coffee brand that represents the pinnacle of Indonesian coffee culture on the world stage.",
            vis_2_title: "Brewing Innovation",
            vis_2_desc: "Continuously exploring new techniques and technologies to refine the brewing process and unlock new flavor dimensions.",
            vis_3_title: "Eco-Conscious Future",
            vis_3_desc: "Leading the way in environmental responsibility by adopting sustainable practices that protect our planet and communities.",
            vis_4_title: "Meaningful Experiences",
            vis_4_desc: "Creating café spaces that are more than just stops—they are destinations for connection, inspiration, and peace.",
            prod_selection: "Our Selection",
            prod_robusta: "Premium Robusta",
            prod_arabica: "Premium Arabica",
            prod_blend: "Signature Blend",
            prod_green: "Green Coffee",
            btn_details: "View Details",
            btn_back: "Back to Menu",
            label_origin: "Origin:",
            label_brew: "Brew Style:",
            // FAQ
            faq_subtitle: "FAQ – MOST ASKED",
            faq_title: "Frequently Asked Questions",
            faq_desc: "Curious about our sourcing, grading, or export process? We provide transparency at every step, ensuring you get the finest Indonesian beans with clear documentation and reliable shipping.",
            faq_q1: "What types of coffee do you offer?",
            faq_a1: "We specialize in premium Indonesian Arabica (Gayo, Toraja, Kintamani) and Robusta beans. We supply them as Green Beans, Roasted Beans, or Ground Coffee, available in various grades including Specialty, Grade 1, and Commercial.",
            faq_q2: "What is your minimum order quantity (MOQ)?",
            faq_a2: "For Green Coffee Beans, our standard MOQ is 1,000 kg (1 Metric Ton). For Roasted or Ground Coffee, we are flexible and can discuss smaller quantities for trial orders or specific market testing.",
            faq_q3: "Can I request samples before placing a bulk order?",
            faq_a3: "Yes, absolutely. We strongly encourage cupping our beans. We provide samples (typically 200g-500g) for quality verification. While the samples are often free, shipping costs are usually covered by the client.",
            faq_q4: "What are your payment terms?",
            faq_a4: "Our standard terms are T/T (Telegraphic Transfer) with a 50% down payment to start processing and the balance upon Bill of Lading issuance. For large volume contracts, we also accept Irrevocable L/C (Letter of Credit) at sight.",
            // Contact Page
            contact_hero_title: "Ready to bring Indonesian coffee to your market?",
            contact_hero_desc: "We are dedicated to sourcing the finest beans from the archipelago. Let's discuss how we can support your business with premium quality and reliable logistics.",
            contact_btn_hero: "Contact",
            info_phone: "Phone",
            info_email: "Email",
            form_name: "Name",
            form_email: "Email",
            form_message: "Message",
            form_send: "Send Message"
        },
        id: {
            meta_title: "Universal Java Coffee | Eksportir Kopi Indonesia Premium",
            meta_desc: "Universal Java Coffee adalah eksportir terpercaya biji kopi Arabika dan Robusta premium Indonesia. Sumber berkelanjutan langsung dari petani ke dunia.",
            nav_home: "Beranda",
            nav_about: "Tentang Kami",
            nav_products: "Produk",
            nav_contact: "Kontak",
            hero_pretitle: "Eksportir Biji Kopi Indonesia",
            hero_title: "Universal Java Coffee",
            hero_subtitle: "adalah perusahaan ekspor Indonesia yang mengkhususkan diri pada biji kopi Arabika dan Robusta premium.",
            hero_overview_title: "Gambaran Perusahaan",
            hero_desc: "Universal Java Coffee adalah perusahaan ekspor Indonesia yang mengkhususkan diri pada biji Arabika dan Robusta berkualitas tinggi, dengan fokus kuat pada keberlanjutan, ketelusuran, dan kemitraan jangka panjang dengan petani lokal.",
            prod_subtitle: "PRODUK KAMI",
            provide_vertical: "EKSPORTIR BIJI KOPI INDONESIA",
            provide_title: "Apa yang Kami Sediakan",
            provide_desc: "Universal Java Coffee adalah pemasok biji kopi hijau berkualitas premium dari Indonesia, menawarkan varietas Arabika dan Robusta, yang bersumber dari dataran tinggi dan tersedia dalam berbagai tingkatan untuk pasar internasional.",
            btn_explore: "Jelajahi produk kami →",
            diff_subtitle: "APA YANG MEMBEDAKAN KAMI",
            diff_title: "Mengapa Memilih Kami",
            diff_1_title: "Biji Berkualitas Tinggi",
            diff_1_desc: "Biji Arabika dan Robusta pilihan dengan rasa konsisten dan kualitas ekspor.",
            diff_2_title: "Langsung dari Petani",
            diff_2_desc: "Kopi bersumber langsung dari petani Indonesia terpercaya untuk menjamin kesegaran, transparansi, dan ketelusuran.",
            diff_3_title: "Berbagai Opsi Pemrosesan",
            diff_3_desc: "Proses Full Wash, Natural, dan Honey yang disesuaikan dengan kebutuhan pemanggangan dan pasar yang berbeda.",
            diff_4_title: "Dukungan Ekspor Terpercaya",
            diff_4_desc: "Penanganan ekspor profesional dengan komunikasi yang jelas dan pengiriman tepat waktu ke seluruh dunia.",
            export_label: "EKSPOR KE SELURUH DUNIA",
            export_title: "Mengekspor Esensi Kopi Indonesia ke Seluruh Dunia",
            export_desc: "Universal Java Coffee adalah eksportir kopi Indonesia terpercaya dengan keahlian logistik yang kuat, kualitas konsisten, dan kemitraan perdagangan internasional jangka panjang.",
            btn_contact: "Hubungi Kami →",
            partner_subtitle: "MITRA EKSPOR",
            partner_title: "Operasi Ekspor dan Logistik Terpercaya",
            btn_menu: "Lihat Menu",
            btn_visit: "Kunjungi Kami",
            sect_visit: "Kunjungi Kami",
            loc_title: "Lokasi",
            email_title: "Email",
            ig_title: "Instagram",
            wa_title: "WhatsApp",
            footer_text: "© 2026 Universal Java Coffee. Hak cipta dilindungi.",
            about_story_title: "Cerita Kami",
            about_story_sub: "Dari Biji hingga Cangkir",
            about_story_p1: "Universal Java Coffee adalah merek kopi modern yang berakar pada kekayaan alam dan tradisi kopi Indonesia. Lahir dari tanah vulkanik dan dibentuk oleh keahlian turun-temurun, kopi kami membawa kedalaman, kehangatan, dan karakter yang membuat biji kopi Indonesia sungguh istimewa.",
            about_story_p2: "Kami menyeleksi biji kopi Indonesia berkualitas tinggi dan meracik setiap cangkir dengan presisi dan rasa hormat — menghargai tradisi sambil merangkul teknik penyeduhan modern. Dari rasa yang berani dan bersahaja hingga sentuhan akhir yang lembut dan menenangkan, setiap tegukan dirancang untuk membangkitkan indra dan menenangkan momen.",
            about_phil_title: "Filosofi Kami",
            about_phil_desc: "Berakar pada warisan Indonesia, kami meracik kopi dengan rasa hormat, keseimbangan, dan niat — menciptakan momen yang bermakna.",
            founder_role: "Pendiri",
            founder_quote: "\"Kopi bukan sekadar minuman; itu adalah ritual. Saya menciptakan Universal Java Coffee untuk berbagi momen kedamaian harian itu dengan Anda.\"",
            mission_title: "Misi Kami",
            mis_1_title: "Kualitas Tanpa Kompromi",
            mis_1_desc: "Kami hanya mengambil biji kopi Indonesia terbaik, memanggangnya dengan sempurna untuk memastikan setiap cangkir adalah mahakarya rasa.",
            mis_2_title: "Sumber Etis",
            mis_2_desc: "Kami percaya pada perdagangan yang adil dan kemitraan langsung, memastikan petani kami dihormati dan diberi kompensasi yang adil atas keahlian mereka.",
            mis_3_title: "Pengalaman Pelanggan",
            mis_3_desc: "Menciptakan komunitas yang hangat dan ramah di mana setiap tegukan adalah momen kedamaian, koneksi, dan kegembiraan sederhana.",
            mis_4_title: "Keberlanjutan",
            mis_4_desc: "Kami berdedikasi untuk melindungi planet kita melalui pertanian ramah lingkungan, kemasan berkelanjutan, dan pengurangan limbah.",
            vision_title: "Visi Kami",
            vis_1_title: "Pengakuan Global",
            vis_1_desc: "Menjadi merek kopi yang diakui yang mewakili puncak budaya kopi Indonesia di panggung dunia.",
            vis_2_title: "Inovasi Penyeduhan",
            vis_2_desc: "Terus mengeksplorasi teknik dan teknologi baru untuk menyempurnakan proses penyeduhan dan membuka dimensi rasa baru.",
            vis_3_title: "Masa Depan Sadar Lingkungan",
            vis_3_desc: "Memimpin jalan dalam tanggung jawab lingkungan dengan mengadopsi praktik berkelanjutan yang melindungi planet dan komunitas kita.",
            vis_4_title: "Pengalaman Bermakna",
            vis_4_desc: "Menciptakan ruang kafe yang lebih dari sekadar tempat singgah—mereka adalah tujuan untuk koneksi, inspirasi, dan kedamaian.",
            prod_selection: "Pilihan Kami",
            prod_robusta: "Robusta Premium",
            prod_arabica: "Arabika Premium",
            prod_blend: "Signature Blend",
            prod_green: "Kopi Hijau",
            btn_details: "Lihat Detail",
            btn_back: "Kembali ke Menu",
            label_origin: "Asal:",
            label_brew: "Gaya Seduh:",
            // FAQ
            faq_subtitle: "FAQ – PALING SERING DITANYAKAN",
            faq_title: "Pertanyaan yang Sering Diajukan",
            faq_desc: "Kami memahami bahwa mencari sumber kopi secara internasional melibatkan banyak detail. Berikut adalah jawaban atas pertanyaan umum tentang biji kopi, logistik, dan ketentuan kami.",
            faq_q1: "Jenis kopi apa yang Anda tawarkan?",
            faq_a1: "Kami mengkhususkan diri pada kopi Arabika Indonesia premium (Gayo, Toraja, Kintamani) dan Robusta. Kami menyediakannya sebagai Green Bean, Roasted Bean, atau Kopi Bubuk dalam berbagai grade.",
            faq_q2: "Berapa jumlah pesanan minimum (MOQ) Anda?",
            faq_a2: "Untuk Green Bean, MOQ standar kami adalah 1.000 kg (1 Metrik Ton). Untuk Kopi Sangrai atau Bubuk, kami fleksibel dan dapat mendiskusikan jumlah yang lebih kecil untuk pesanan percobaan.",
            faq_q3: "Bisakah saya meminta sampel sebelum memesan dalam jumlah besar?",
            faq_a3: "Ya, tentu saja. Kami menyediakan sampel (biasanya 200g-500g) untuk verifikasi kualitas. Meskipun sampel seringkali gratis, biaya pengiriman biasanya ditanggung oleh klien.",
            faq_q4: "Apa syarat pembayaran Anda?",
            faq_a4: "Syarat standar kami adalah T/T (Transfer Telegrafis) dengan uang muka 50% dan pelunasan saat penerbitan Bill of Lading. Untuk kontrak volume besar, kami juga menerima L/C (Letter of Credit).",
            // Contact Page
            contact_hero_title: "Siap membawa kopi Indonesia ke pasar Anda?",
            contact_hero_desc: "Kami berdedikasi untuk mencari biji kopi terbaik dari nusantara. Mari diskusikan bagaimana kami dapat mendukung bisnis Anda dengan kualitas premium dan logistik yang andal.",
            contact_btn_hero: "Hubungi",
            info_phone: "Telepon",
            info_email: "Email",
            form_name: "Nama",
            form_email: "Email",
            form_message: "Pesan",
            form_send: "Kirim Pesan"
        },
        zh: {
            meta_title: "Universal Java Coffee | 优质印尼咖啡出口商",
            meta_desc: "Universal Java Coffee 是一家值得信赖的优质阿拉比卡和罗布斯塔咖啡豆印尼出口商。直接源自农民的可持续采购，面向全球。",
            nav_home: "首页",
            nav_about: "关于我们",
            nav_products: "产品",
            nav_contact: "联系我们",
            hero_pretitle: "印尼咖啡豆出口商",
            hero_title: "Universal Java Coffee",
            hero_subtitle: "是一家专门从事优质阿拉比卡和罗布斯塔咖啡豆的印尼出口公司。",
            hero_overview_title: "公司概况",
            hero_desc: "Universal Java Coffee 是一家专门从事高品质阿拉比卡和罗布斯塔咖啡豆的印尼出口公司，重点关注可持续性、可追溯性以及与当地农民的长期合作关系。",
            prod_subtitle: "我们的产品",
            provide_vertical: "印尼咖啡豆出口商",
            provide_title: "我们要提供什么",
            provide_desc: "Universal Java Coffee 是印尼优质生咖啡豆的供应商，提供阿拉比卡和罗布斯塔品种，源自高地地区，有多种等级可供国际市场选择。",
            btn_explore: "探索我们的产品 →",
            diff_subtitle: "是什么让我们与众不同",
            diff_title: "为什么选择我们",
            diff_1_title: "优质咖啡豆",
            diff_1_desc: "精选阿拉比卡和罗布斯塔咖啡豆，风味一致，达到出口级质量。",
            diff_2_title: "直接源自农民",
            diff_2_desc: "咖啡直接源自值得信赖的印尼农民，以确保新鲜度、透明度和可追溯性。",
            diff_3_title: "多种加工选择",
            diff_3_desc: "全水洗、日晒和蜜处理工艺，专为不同的烘焙和市场需求量身定制。",
            diff_4_title: "可靠的出口支持",
            diff_4_desc: "专业的出口处理，沟通清晰，并在全球范围内及时交货。",
            export_label: "出口全球",
            export_title: "将印尼咖啡的精髓出口到全世界",
            export_desc: "Universal Java Coffee 是一家值得信赖的印尼咖啡出口商，拥有强大的物流专业知识、稳定的质量和长期的国际贸易合作伙伴关系。",
            btn_contact: "联系我们 →",
            partner_subtitle: "出口合作伙伴",
            partner_title: "可靠的出口运营和物流",
            btn_menu: "查看菜单",
            btn_visit: "参观我们",
            sect_visit: "参观我们",
            loc_title: "位置",
            email_title: "电子邮件",
            ig_title: "Instagram",
            wa_title: "WhatsApp",
            footer_text: "© 2026 Universal Java Coffee. 版权所有。",
            about_story_title: "我们的故事",
            about_story_sub: "从豆子到杯子",
            about_story_p1: "Universal Java Coffee 是一个植根于印尼咖啡丰富景观和传统的现代咖啡品牌。我们的咖啡诞生于火山土壤，经过几代人的工艺塑造，承载着使印尼咖啡豆真正卓越的深度、温暖和个性。",
            about_story_p2: "我们精心挑选高品质的印尼咖啡豆，并以精确和尊重的态度制作每一杯咖啡——既尊重传统，又拥抱现代冲泡技术。从大胆、泥土的风味到顺滑、舒适的余味，每一口都旨在唤醒感官并放慢时光。",
            about_phil_title: "我们的理念",
            about_phil_desc: "植根于印尼传统，我们以尊重、平衡和意图制作咖啡——创造值得感受的时刻。",
            founder_role: "创始人",
            founder_quote: "“咖啡不仅仅是一种饮料；它是一种仪式。我创建 Universal Java Coffee 是为了与您分享那份日常的宁静时刻。”",
            mission_title: "我们的使命",
            mis_1_title: "不妥协的质量",
            mis_1_desc: "我们只采购最好的印尼咖啡豆，将其烘焙至完美，以确保每一杯都是风味的杰作。",
            mis_2_title: "道德采购",
            mis_2_desc: "我们相信公平贸易和直接合作，确保我们的农民受到尊重并获得公平的报酬。",
            mis_3_title: "客户体验",
            mis_3_desc: "创造一个温暖、热情的社区，让每一口都是宁静、连接和简单快乐的时刻。",
            mis_4_title: "可持续性",
            mis_4_desc: "我们致力于通过环保农业、可持续包装和减少废物来保护我们的地球。",
            vision_title: "我们的愿景",
            vis_1_title: "全球认可",
            vis_1_desc: "成为一个在世界舞台上代表印尼咖啡文化巅峰的知名咖啡品牌。",
            vis_2_title: "冲泡创新",
            vis_2_desc: "不断探索新技术和工艺，以完善冲泡过程并解锁新的风味维度。",
            vis_3_title: "生态意识的未来",
            vis_3_desc: "通过采用保护我们地球和社区的可持续做法，引领环境责任。",
            vis_4_title: "有意义的体验",
            vis_4_desc: "创造不仅仅是停靠点的咖啡馆空间——它们是连接、灵感和宁静的目的地。",
            prod_selection: "我们的精选",
            prod_robusta: "优质",
            prod_arabica: "优质阿拉比卡",
            prod_blend: "招牌拼配",
            prod_green: "生咖啡",
            btn_details: "查看详情",
            btn_back: "返回菜单",
            label_origin: "产地：",
            label_brew: "冲泡风格：",
            faq_subtitle: "常见问题 – 最常问",
            faq_title: "常见问题解答",
            faq_desc: "对我们的采购、分级或出口流程感到好奇？我们在每一步都提供透明度，确保您获得最好的印尼咖啡豆，并附带清晰的文件和可靠的运输。",
            faq_q1: "你们提供什么类型的咖啡？",
            faq_a1: "我们专注于优质印尼阿拉比卡（Gayo, Toraja, Kintamani）和罗布斯塔咖啡豆。我们供应生豆、烘焙豆或研磨咖啡，有多种等级可供选择。",
            faq_q2: "你们的最低订购量 (MOQ) 是多少？",
            faq_a2: "对于生咖啡豆，我们的标准 MOQ 是 1,000 公斤（1 公吨）。对于烘焙或研磨咖啡，我们很灵活，可以讨论较小的数量用于试订单。",
            faq_q3: "我可以在批量订购前索取样品吗？",
            faq_a3: "是的，当然。我们强烈建议杯测我们的咖啡豆。我们提供样品（通常为 200g-500g）用于质量验证。样品通常免费，运费由客户承担。",
            faq_q4: "你们的付款条件是什么？",
            faq_a4: "我们的标准条款是 T/T（电汇），首付 50% 开始处理，余额在提单签发时支付。对于大批量合同，我们也接受即期不可撤销信用证 (L/C)。",
            contact_hero_title: "准备好将印尼咖啡带入您的市场了吗？",
            contact_hero_desc: "我们致力于从群岛采购最好的咖啡豆。让我们讨论如何以优质的质量和可靠的物流支持您的业务。",
            contact_btn_hero: "联系",
            info_phone: "电话",
            info_email: "电子邮件",
            form_name: "姓名",
            form_email: "电子邮件",
            form_message: "留言",
            form_send: "发送留言"
        },
        ar: {
            meta_title: "Universal Java Coffee | مصدر القهوة الإندونيسية الفاخرة",
            meta_desc: "Universal Java Coffee هو مصدر موثوق لحبوب البن الإندونيسية أرابيكا وروبوستا الفاخرة. مصادر مستدامة مباشرة من المزارعين إلى العالم.",
            nav_home: "الرئيسية",
            nav_about: "من نحن",
            nav_products: "المنتجات",
            nav_contact: "اتصل بنا",
            hero_pretitle: "مُصدر حبوب البن الإندونيسي",
            hero_title: "Universal Java Coffee",
            hero_subtitle: "هي شركة تصدير إندونيسية متخصصة في حبوب البن أرابيكا وروبوستا الفاخرة.",
            hero_overview_title: "نظرة عامة على الشركة",
            hero_desc: "Universal Java Coffee هي شركة تصدير إندونيسية متخصصة في حبوب أرابيكا وروبوستا عالية الجودة، مع تركيز قوي على الاستدامة، وإمكانية التتبع، والشراكات طويلة الأمد مع المزارعين المحليين.",
            prod_subtitle: "منتجاتنا",
            provide_vertical: "مُصدر حبوب البن الإندونيسي",
            provide_title: "ماذا نقدم",
            provide_desc: "Universal Java Coffee هي مورد لحبوب البن الأخضر عالية الجودة من إندونيسيا، وتقدم أصناف أرابيكا وروبوستا، التي يتم الحصول عليها من المناطق المرتفعة وتتوفر بدرجات متعددة للأسواق الدولية.",
            btn_explore: "استكشف منتجاتنا ←",
            diff_subtitle: "ما الذي يميزنا",
            diff_title: "لماذا تختارنا",
            diff_1_title: "حبوب عالية الجودة",
            diff_1_desc: "حبوب أرابيكا وروبوستا مختارة بنكهة متسقة وجودة تصدير.",
            diff_2_title: "مباشرة من المزارعين",
            diff_2_desc: "يتم الحصول على القهوة مباشرة من المزارعين الإندونيسيين الموثوق بهم لضمان النضارة والشفافية وإمكانية التتبع.",
            diff_3_title: "خيارات معالجة متنوعة",
            diff_3_desc: "عمليات الغسيل الكامل، والطبيعية، والعسلية المصممة لتلبية احتياجات التحميص والسوق المختلفة.",
            diff_4_title: "دعم تصدير موثوق",
            diff_4_desc: "تعامل احترافي مع التصدير مع تواصل واضح وتسليم في الوقت المناسب لجميع أنحاء العالم.",
            export_label: "تصدير لجميع أنحاء العالم",
            export_title: "تصدير جوهر القهوة الإندونيسية إلى العالم",
            export_desc: "Universal Java Coffee هو مصدر قهوة إندونيسي موثوق به يتمتع بخبرة لوجستية قوية وجودة متسقة وشراكات تجارية دولية طويلة الأمد.",
            btn_contact: "تواصل معنا ←",
            partner_subtitle: "شريك التصدير",
            partner_title: "عمليات تصدير ولوجستيات موثوقة",
            btn_menu: "عرض القائمة",
            btn_visit: "قم بزيارتنا",
            sect_visit: "قم بزيارتنا",
            loc_title: "الموقع",
            email_title: "البريد الإلكتروني",
            ig_title: "إنستغرام",
            wa_title: "واتساب",
            footer_text: "© 2026 Universal Java Coffee. جميع الحقوق محفوظة.",
            about_story_title: "قصتنا",
            about_story_sub: "من الحبة إلى الكوب",
            about_story_p1: "Universal Java Coffee هي علامة تجارية حديثة للقهوة متجذرة في المناظر الطبيعية الغنية وتقاليد القهوة الإندونيسية. ولدت من التربة البركانية وتشكلت عبر أجيال من الحرفية، تحمل قهوتنا العمق والدفء والشخصية التي تجعل الحبوب الإندونيسية استثنائية حقًا.",
            about_story_p2: "نختار بعناية حبوب البن الإندونيسية عالية الجودة ونصنع كل كوب بدقة واحترام - مع تكريم التقاليد واحتضان تقنيات التخمير الحديثة. من النكهات الجريئة والترابية إلى النهايات السلسة والمريحة، تم تصميم كل رشفة لإيقاظ الحواس وإبطاء اللحظة.",
            about_phil_title: "فلسفتنا",
            about_phil_desc: "متجذرون في التراث الإندونيسي، نصنع القهوة باحترام وتوازن ونية - لخلق لحظات تستحق الشعور بها.",
            founder_role: "المؤسس",
            founder_quote: "\"القهوة ليست مجرد مشروب؛ إنها طقس. لقد أنشأت Universal Java Coffee لمشاركة تلك اللحظة اليومية من السلام معك.\"",
            mission_title: "مهمتنا",
            mis_1_title: "جودة لا هوادة فيها",
            mis_1_desc: "نحن نستورد فقط أجود الحبوب الإندونيسية، ونحمصها إلى حد الكمال لضمان أن كل كوب هو تحفة من النكهة.",
            mis_2_title: "المصادر الأخلاقية",
            mis_2_desc: "نحن نؤمن بالتجارة العادلة والشراكات المباشرة، مما يضمن احترام مزارعينا وتعويضهم بشكل عادل عن حرفتهم.",
            mis_3_title: "تجربة العملاء",
            mis_3_desc: "خلق مجتمع دافئ ومرحب حيث كل رشفة هي لحظة من السلام والتواصل والفرح البسيط.",
            mis_4_title: "الاستدامة",
            mis_4_desc: "نحن ملتزمون بحماية كوكبنا من خلال الزراعة الصديقة للبيئة، والتغليف المستدام، والحد من النفايات.",
            vision_title: "رؤيتنا",
            vis_1_title: "الاعتراف العالمي",
            vis_1_desc: "أن نصبح علامة تجارية معترف بها للقهوة تمثل قمة ثقافة القهوة الإندونيسية على المسرح العالمي.",
            vis_2_title: "ابتكار التخمير",
            vis_2_desc: "استكشاف تقنيات وتقنيات جديدة باستمرار لتحسين عملية التخمير وفتح أبعاد نكهة جديدة.",
            vis_3_title: "مستقبل واعي بيئيًا",
            vis_3_desc: "قيادة الطريق في المسؤولية البيئية من خلال تبني ممارسات مستدامة تحمي كوكبنا ومجتمعاتنا.",
            vis_4_title: "تجارب ذات مغزى",
            vis_4_desc: "إنشاء مساحات مقاهي تكون أكثر من مجرد محطات توقف - فهي وجهات للتواصل والإلهام والسلام.",
            prod_selection: "اختياراتنا",
            prod_robusta: "روبوستا ممتاز",
            prod_arabica: "أرابيكا فاخرة",
            prod_blend: "مزيج التوقيع",
            prod_green: "قهوة خضراء",
            btn_details: "عرض التفاصيل",
            btn_back: "العودة للقائمة",
            label_origin: "الأصل:",
            label_brew: "أسلوب التحضير:",
            faq_subtitle: "الأسئلة الشائعة - الأكثر طرحًا",
            faq_title: "الأسئلة المتكررة",
            faq_desc: "هل تشعر بالفضول بشأن عملية التوريد أو التصنيف أو التصدير لدينا؟ نحن نقدم الشفافية في كل خطوة، مما يضمن حصولك على أجود الحبوب الإندونيسية مع وثائق واضحة وشحن موثوق.",
            faq_q1: "ما أنواع القهوة التي تقدمونها؟",
            faq_a1: "نحن متخصصون في حبوب أرابيكا الإندونيسية الفاخرة (جايو، توراجا، كينتاماني) وروبوستا. نقوم بتوريدها كحبوب خضراء، أو حبوب محمصة، أو قهوة مطحونة، وتتوفر بدرجات مختلفة.",
            faq_q2: "ما هو الحد الأدنى لكمية الطلب (MOQ)؟",
            faq_a2: "بالنسبة لحبوب البن الأخضر، فإن الحد الأدنى القياسي للطلب هو 1000 كجم (1 طن متري). بالنسبة للقهوة المحمصة أو المطحونة، نحن مرنون ويمكننا مناقشة كميات أصغر لطلبات التجربة.",
            faq_q3: "هل يمكنني طلب عينات قبل تقديم طلب بالجملة؟",
            faq_a3: "نعم، بالتأكيد. نحن نشجع بشدة تذوق حبوبنا. نقدم عينات (عادة 200 جم - 500 جم) للتحقق من الجودة. بينما تكون العينات غالبًا مجانية، عادة ما يغطي العميل تكاليف الشحن.",
            faq_q4: "ما هي شروط الدفع الخاصة بكم؟",
            faq_a4: "شروطنا القياسية هي T/T (التحويل البرقي) مع دفعة أولى بنسبة 50% لبدء المعالجة والرصيد عند إصدار بوليصة الشحن. بالنسبة للعقود كبيرة الحجم، نقبل أيضًا خطاب اعتماد غير قابل للإلغاء (L/C).",
            contact_hero_title: "هل أنت مستعد لجلب القهوة الإندونيسية إلى سوقك؟",
            contact_hero_desc: "نحن ملتزمون بتوريد أجود الحبوب من الأرخبيل. دعنا نناقش كيف يمكننا دعم عملك بجودة ممتازة ولوجستيات موثوقة.",
            contact_btn_hero: "اتصل",
            info_phone: "هاتف",
            info_email: "بريد إلكتروني",
            form_name: "الاسم",
            form_email: "البريد الإلكتروني",
            form_message: "الرسالة",
            form_send: "إرسال الرسالة"
        }
    };

    // Add placeholder translations for new languages by copying the English version
    const placeholderLangs = ['ar', 'de', 'ja', 'it', 'ms', 'ko', 'zh', 'es', 'tl', 'nl', 'vi', 'ru', 'fr'];
    placeholderLangs.forEach(lang => {
        if (!translations[lang]) {
            translations[lang] = { ...translations.en };
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    let currentLang = urlParams.get('lang') || localStorage.getItem('ujc_lang') || 'en';

    // Expose function to global scope for button clicks
    window.changeLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('ujc_lang', lang);
        updateContent();
    };

    const flagMap = {
        en: 'img/usa.png',
        id: 'img/indonesia.png',
        zh: 'img/china.png',
        ar: 'img/arab.png'
    };

    const updateContent = () => {
        // Update HTML lang and dir attributes for SEO and Layout
        document.documentElement.lang = currentLang;
        if (currentLang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        // Update Document Title and Meta Description for SEO
        if (translations[currentLang].meta_title) {
            document.title = translations[currentLang].meta_title;
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && translations[currentLang].meta_desc) {
            metaDesc.setAttribute('content', translations[currentLang].meta_desc);
        }

        // Update static text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });

        // Update active flag (optional if using dropdown, but good for compatibility)
        // document.querySelectorAll('.lang-btn').forEach(btn => {
        //     btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
        // });

        // Update the current language display text
        const currentLangTextEl = document.getElementById('current-lang-text');
        if (currentLangTextEl) {
            currentLangTextEl.textContent = currentLang.toUpperCase();
        }

        // Update the current language flag
        const currentFlagEl = document.getElementById('current-lang-flag');
        if (currentFlagEl && flagMap[currentLang]) {
            currentFlagEl.src = flagMap[currentLang];
        }

        // Re-render single product if on that page
        if (document.getElementById('prodetails')) {
            renderSingleProduct();
        }
    };
    
    // --- Navbar Style on Scroll/Page ---
    const navbar = document.querySelector('.navbar');
    const hero = document.getElementById('home'); // Hero section on index.html

    const handleNavbarStyle = () => {
        // On pages without a hero, navbar is always solid.
        if (!hero) {
            navbar.classList.add('solid-nav');
            return;
        }
        // On homepage, make it solid on scroll.
        if (window.scrollY > 50) {
            navbar.classList.add('solid-nav');
        } else {
            navbar.classList.remove('solid-nav');
        }
    };

    window.addEventListener('scroll', handleNavbarStyle);
    handleNavbarStyle(); // Also run on page load

    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    }));

    // --- Hero Slider ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        setInterval(nextSlide, slideInterval);
    }

    // --- Export Section Slider ---
    const exportSlides = document.querySelectorAll('.export-slide');
    if (exportSlides.length > 0) {
        let currentExportSlide = 0;
        const exportInterval = 4000; // 4 seconds
        function nextExportSlide() {
            exportSlides[currentExportSlide].classList.remove('active');
            currentExportSlide = (currentExportSlide + 1) % exportSlides.length;
            exportSlides[currentExportSlide].classList.add('active');
        }
        setInterval(nextExportSlide, exportInterval);
    }

    // --- Scroll Animations (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15 // Trigger when 15% visible
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all others
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // --- Product Data & Navigation Logic ---
    
    // Product Data Object (Moved to global scope within DOMContentLoaded)
    const productData = {
        'robusta': {
            en: {
                title: 'Premium Robusta',
                desc: 'A perfect balance of espresso, steamed milk, and foam. Robusta is a timeless classic, crafted with rich espresso and perfectly textured milk foam. Balanced and smooth, it delivers a comforting warmth with every sip — ideal for those who appreciate tradition with refined execution.',
                flavor: 'Creamy, Nutty, Sweet',
                origin: 'Sumatra & Java',
                brew: 'Espresso Machine, Steamed milk with velvety foam'
            },
            id: {
                title: 'Robusta Premium',
                desc: 'Keseimbangan sempurna espresso, susu kukus, dan busa. Robusta adalah klasik abadi, dibuat dengan espresso kaya dan busa susu bertekstur sempurna. Seimbang dan halus, memberikan kehangatan yang menenangkan di setiap tegukan — ideal bagi mereka yang menghargai tradisi dengan eksekusi yang halus.',
                flavor: 'Creamy, Kacang, Manis',
                origin: 'Sumatera & Jawa',
                brew: 'Mesin Espresso, Susu kukus dengan busa lembut'
            },
            zh: {
                title: '优质罗布斯塔',
                desc: '浓缩咖啡、蒸奶和奶泡的完美平衡。罗布斯塔是永恒的经典，由浓郁的浓缩咖啡和质地完美的奶泡制成。平衡而顺滑，每一口都带来舒适的温暖——非常适合那些欣赏传统和精致工艺的人。',
                flavor: '奶油味，坚果味，甜味',
                origin: '苏门答腊和爪哇',
                brew: '意式浓缩咖啡机，带天鹅绒般泡沫的蒸奶'
            },
            ar: {
                title: 'روبوستا فاخرة',
                desc: 'توازن مثالي بين الإسبريسو والحليب المبخر والرغوة. روبوستا هي كلاسيكية خالدة، مصنوعة من الإسبريسو الغني ورغوة الحليب ذات القوام المثالي. متوازنة وسلسة، توفر دفئًا مريحًا مع كل رشفة - مثالية لأولئك الذين يقدرون التقاليد مع التنفيذ المتقن.',
                flavor: 'كريمي، مكسرات، حلو',
                origin: 'سومطرة وجاوة',
                brew: 'آلة إسبريسو، حليب مبخر برغوة مخملية'
            },
            img: 'img/overview 3.jpeg'
        },
        'arabica': {
            en: {
                title: 'Premium Arabica',
                desc: 'Arabica coffee highlights purity and complexity, offering a clean and aromatic cup that reflects the character of its origin. Smooth, elegant, and naturally sweet — this is coffee in its most refined form.',
                flavor: 'Floral, Fruity, Berry',
                origin: 'Gayo (Aceh), Toraja, and Bali Kintamani',
                brew: 'Pour Over / V60, Drip coffee'
            },
            id: {
                title: 'Arabika Premium',
                desc: 'Kopi Arabika menonjolkan kemurnian dan kompleksitas, menawarkan cangkir yang bersih dan aromatik yang mencerminkan karakter asalnya. Halus, elegan, dan manis alami — ini adalah kopi dalam bentuk paling murni.',
                flavor: 'Floral, Buah, Berry',
                origin: 'Gayo (Aceh), Toraja, dan Bali Kintamani',
                brew: 'Pour Over / V60, Kopi Tetes'
            },
            zh: {
                title: '优质阿拉比卡',
                desc: '阿拉比卡咖啡突出了纯度和复杂性，提供干净而芳香的口感，反映了其原产地的特征。顺滑、优雅且自然甘甜——这是咖啡最精致的形式。',
                flavor: '花香，果香，浆果味',
                origin: 'Gayo (亚齐), Toraja, 和巴厘岛 Kintamani',
                brew: '手冲 / V60, 滴滤咖啡'
            },
            ar: {
                title: 'أرابيكا فاخرة',
                desc: 'تبرز قهوة أرابيكا النقاء والتعقيد، وتقدم كوبًا نظيفًا وعطريًا يعكس طابع أصلها. سلسة وأنيقة وحلوة بشكل طبيعي - هذه هي القهوة في أرقى صورها.',
                flavor: 'زهري، فاكهي، توت',
                origin: 'جايو (آتشيه)، توراجا، وبالي كينتاماني',
                brew: 'سكب / V60، قهوة مقطرة'
            },
            img: 'img/overview8.jpeg'
        },
        'blend': {
            en: {
                title: 'Signature Blend',
                desc: 'Signature Blend is the heart of Universal Java Coffee — a carefully balanced fusion designed to create harmony in every cup. Bold yet smooth, it’s crafted to be memorable, comforting, and unmistakably ours.',
                flavor: 'Dark Chocolate, Caramel',
                origin: 'Sumatra, Java, Sulawesi, and Bali',
                brew: 'French Press'
            },
            id: {
                title: 'Signature Blend',
                desc: 'Signature Blend adalah jantung dari Universal Java Coffee — perpaduan yang seimbang dirancang untuk menciptakan harmoni di setiap cangkir. Berani namun halus, dibuat untuk dikenang, menenangkan, dan tak tertukar.',
                flavor: 'Cokelat Hitam, Karamel',
                origin: 'Sumatera, Jawa, Sulawesi, dan Bali',
                brew: 'French Press'
            },
            zh: {
                title: '招牌拼配',
                desc: '招牌拼配是 Universal Java Coffee 的核心——一种精心平衡的融合，旨在为每一杯创造和谐。大胆而顺滑，旨在令人难忘、舒适且具有我们独特的风格。',
                flavor: '黑巧克力，焦糖',
                origin: '苏门答腊，爪哇，苏拉威西和巴厘岛',
                brew: '法式压滤壶'
            },
            ar: {
                title: 'مزيج التوقيع',
                desc: 'مزيج التوقيع هو قلب Universal Java Coffee - اندماج متوازن بعناية مصمم لخلق الانسجام في كل كوب. جريء ولكنه سلس، تم تصميمه ليكون لا يُنسى ومريحًا ومميزًا لنا.',
                flavor: 'شوكولاتة داكنة، كراميل',
                origin: 'سومطرة، جاوة، سولاويزي، وبالي',
                brew: 'فرنش برس'
            },
            img: 'img/overview 2.jpeg'
        },
        'green': {
            en: {
                title: 'Green Coffee',
                desc: 'Green Coffee offers a fresh and vibrant profile, showcasing the raw character of unroasted beans. Light, herbal, and energizing, it delivers a unique experience for those seeking something naturally different.',
                flavor: 'Grassy, Earthy, Fresh',
                origin: 'Central Java and Bali',
                brew: 'Light roast infusion, Cold brew'
            },
            id: {
                title: 'Kopi Hijau',
                desc: 'Kopi Hijau menawarkan profil segar dan bersemangat, menampilkan karakter mentah biji yang belum dipanggang. Ringan, herbal, dan memberi energi, memberikan pengalaman unik bagi mereka yang mencari sesuatu yang alami berbeda.',
                flavor: 'Rumput, Tanah, Segar',
                origin: 'Jawa Tengah dan Bali',
                brew: 'Infusi sangrai ringan, Cold brew'
            },
            zh: {
                title: '生咖啡',
                desc: '生咖啡提供清新而充满活力的风味，展示了未烘焙咖啡豆的原始特征。清淡、草本且充满活力，为寻求自然不同体验的人提供独特的体验。',
                flavor: '青草味，泥土味，清新',
                origin: '中爪哇和巴厘岛',
                brew: '浅烘焙浸泡，冷萃'
            },
            ar: {
                title: 'قهوة خضراء',
                desc: 'تقدم القهوة الخضراء ملفًا طازجًا وحيويًا، حيث تعرض الطابع الخام للحبوب غير المحمصة. خفيفة وعشبية ومنشطة، توفر تجربة فريدة لأولئك الذين يبحثون عن شيء مختلف بشكل طبيعي.',
                flavor: 'عشبي، ترابي، طازج',
                origin: 'جاوة الوسطى وبالي',
                brew: 'منقوع تحميص خفيف، تحضير بارد'
            },
            img: 'img/overview 6.jpeg'
        }
    };

    // 1. Handle Clicks on Products Page (Redirect to sproduct.html)
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.getAttribute('data-id');
            window.location.href = `sproduct.html?id=${productId}`;
        });
    });

    // 2. Handle Display on Single Product Page (sproduct.html)
    function renderSingleProduct() {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const data = productData[productId];

        if (data) {
            const content = data[currentLang];
            document.getElementById('MainImg').src = data.img;
            document.getElementById('product-name').textContent = content.title;
            document.getElementById('product-desc').textContent = content.desc;
            document.getElementById('product-flavor').textContent = content.flavor;
            document.getElementById('product-origin').textContent = content.origin;
            document.getElementById('product-brew').textContent = content.brew;
        } else {
            document.getElementById('product-name').textContent = "Product Not Found";
        }
    }

    // --- Contact Form Handler ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Allow the form to submit naturally to the action URL
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
        });
    }

    // Initialize
    updateContent();
});
