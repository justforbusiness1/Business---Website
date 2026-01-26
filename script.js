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
            form_title: "Get In Touch",
            info_email: "Email",
            form_name: "Name",
            form_ph_name: "Your name and company name",
            form_email: "Email",
            form_message: "Message",
            form_send: "Send Message",
            form_sending: "Sending...",
            form_success: "Thank you, your message has been sent successfully.",
            form_error: "Oops! There was a problem submitting your form. Please try again."
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
            form_title: "Hubungi Kami",
            info_email: "Email",
            form_name: "Nama",
            form_ph_name: "Nama Anda dan nama perusahaan",
            form_email: "Email",
            form_message: "Pesan",
            form_send: "Kirim Pesan",
            form_sending: "Mengirim...",
            form_success: "Terima kasih, pesan Anda telah berhasil terkirim.",
            form_error: "Oops! Terjadi masalah saat mengirim formulir Anda. Silakan coba lagi."
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
            form_title: "联系我们",
            info_email: "电子邮件",
            form_name: "姓名",
            form_ph_name: "您的姓名和公司名称",
            form_email: "电子邮件",
            form_message: "留言",
            form_send: "发送留言",
            form_sending: "发送中...",
            form_success: "谢谢，您的留言已成功发送。",
            form_error: "糟糕！提交您的表单时出现问题。请再试一次。"
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
            form_title: "تواصل معنا",
            info_email: "بريد إلكتروني",
            form_name: "الاسم",
            form_ph_name: "اسمك واسم الشركة",
            form_email: "البريد الإلكتروني",
            form_message: "الرسالة",
            form_send: "إرسال الرسالة",
            form_sending: "جار الإرسال...",
            form_success: "شكرًا لك، لقد تم إرسال رسالتك بنجاح.",
            form_error: "عفوًا! حدثت مشكلة أثناء إرسال النموذج الخاص بك. يرجى المحاولة مرة أخرى."
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

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[currentLang][key]) {
                el.placeholder = translations[currentLang][key];
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
                title: 'Indonesian Robusta Coffee',
                desc: `Indonesian Robusta coffee is globally recognized for its full-bodied character and bold flavor profile. Grown at lower altitudes and containing a higher caffeine level than Arabica, Robusta is the preferred choice for those seeking a strong, intense coffee experience—or as a solid base for modern milk-based coffee beverages.<br><br>
<strong>General Characteristics of Our Robusta</strong><br>
<strong>Body:</strong> Thick, bold, and powerful on the palate.<br>
<strong>Aroma:</strong> Chocolatey, nutty notes, sometimes complemented by distinctive earthy tones.<br>
<strong>Flavor:</strong> Dominated by dark chocolate flavors with very low to almost no acidity.<br>
<strong>Aftertaste:</strong> Clean, long-lasting finish with lingering caramel sweetness.<br><br>
<strong>Robusta Variant List</strong><br>
Below is our selection of premium Robusta coffees sourced from Indonesia’s main coffee-producing regions:
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>Sumatra & Western Regions</th>
            <th>Java & Central Regions</th>
            <th>Eastern & Specialty</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Aceh</td><td>Java</td><td>Bali / Bali Fine</td></tr>
        <tr><td>Bengkulu</td><td>Jember</td><td>Flores</td></tr>
        <tr><td>Lampung</td><td>Kudus</td><td>Papua</td></tr>
        <tr><td>Medan</td><td>Malang</td><td>Sulawesi</td></tr>
        <tr><td>Pagar Alam</td><td>Magelang</td><td>Toraja</td></tr>
        <tr><td>Semendo</td><td>Sumedang</td><td>Excelsa Ijen</td></tr>
        <tr><td>Sidikalang</td><td>Temanggung</td><td>Liberica Jambi</td></tr>
        <tr><td>Sumatra / Samosir</td><td>Kali Putih</td><td>Vietnam (Import Quality)</td></tr>
    </tbody>
</table>`,
                flavor: 'Creamy, Nutty, Sweet',
            },
            id: {
                title: 'Robusta Premium',
                desc: `Kopi Robusta Indonesia dikenal dunia karena karakter tubuhnya yang tebal (full body) dan profil rasa yang kuat. Biji kopi ini tumbuh di dataran yang lebih rendah dan memiliki kadar kafein yang lebih tinggi dibandingkan Arabica, menjadikannya pilihan utama bagi mereka yang mencari sensasi kopi yang "nendang" atau sebagai bahan dasar campuran kopi susu kekinian.<br><br>
<strong>Karakter Umum Robusta Kami:</strong><br>
<strong>Body:</strong> Tebal dan mantap di mulut.<br>
<strong>Aroma:</strong> Cokelat, kacang-kacangan (nutty), dan terkadang muncul sentuhan aroma tanah yang khas (earthy).<br>
<strong>Flavor:</strong> Dominasi rasa cokelat hitam (dark chocolate) dengan tingkat keasaman yang sangat rendah atau hampir tidak ada.<br>
<strong>Aftertaste:</strong> Bersih dengan rasa manis karamel yang tertinggal lama.<br><br>
<strong>DAFTAR VARIAN ROBUSTA</strong><br>
Berikut adalah koleksi Robusta terbaik kami yang berasal dari berbagai daerah penghasil kopi utama di Indonesia:
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>Sumatera & Barat</th>
            <th>Jawa & Tengah</th>
            <th>Timur & Spesial</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Aceh</td><td>Jawa</td><td>Bali / Bali Fine</td></tr>
        <tr><td>Bengkulu</td><td>Jember</td><td>Flores</td></tr>
        <tr><td>Lampung</td><td>Kudus</td><td>Papua</td></tr>
        <tr><td>Medan</td><td>Malang</td><td>Sulawesi</td></tr>
        <tr><td>Pagar Alam</td><td>Magelang</td><td>Toraja</td></tr>
        <tr><td>Semendo</td><td>Sumedang</td><td>Excelsa Ijen</td></tr>
        <tr><td>Sidikalang</td><td>Temanggung</td><td>Liberca Jambi</td></tr>
        <tr><td>Sumatra / Samosir</td><td>Kali Putih</td><td>Vietnam (Import Quality)</td></tr>
    </tbody>
</table>`,
                flavor: 'Creamy, Kacang, Manis',
            },
            zh: {
                title: '优质罗布斯塔',
                desc: `印尼罗布斯塔咖啡以其醇厚的口感和大胆的风味特征而闻名全球。生长在较低海拔，咖啡因含量高于阿拉比卡，是寻求强烈、浓郁咖啡体验的人的首选——或者是现代牛奶咖啡饮料的坚实基底。<br><br>
<strong>我们罗布斯塔的一般特征</strong><br>
<strong>醇度：</strong> 厚实、大胆、口感强劲。<br>
<strong>香气：</strong> 巧克力味、坚果味，有时伴有独特的泥土气息。<br>
<strong>风味：</strong> 以黑巧克力风味为主，酸度极低甚至没有。<br>
<strong>余韵：</strong> 干净、持久，带有焦糖的甜味。<br><br>
<strong>罗布斯塔品种列表</strong><br>
以下是我们精选的来自印尼主要咖啡产区的优质罗布斯塔咖啡：
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>苏门答腊 & 西部</th>
            <th>爪哇 & 中部</th>
            <th>东部 & 特色</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>亚齐 (Aceh)</td><td>爪哇 (Java)</td><td>巴厘岛 (Bali / Bali Fine)</td></tr>
        <tr><td>明古鲁 (Bengkulu)</td><td>任抹 (Jember)</td><td>弗洛勒斯 (Flores)</td></tr>
        <tr><td>楠榜 (Lampung)</td><td>古突士 (Kudus)</td><td>巴布亚 (Papua)</td></tr>
        <tr><td>棉兰 (Medan)</td><td>玛朗 (Malang)</td><td>苏拉威西 (Sulawesi)</td></tr>
        <tr><td>帕加尔阿拉姆 (Pagar Alam)</td><td>马格朗 (Magelang)</td><td>托拉雅 (Toraja)</td></tr>
        <tr><td>塞门多 (Semendo)</td><td>苏梅当 (Sumedang)</td><td>Excelsa Ijen</td></tr>
        <tr><td>西迪卡兰 (Sidikalang)</td><td>特曼古 (Temanggung)</td><td>Liberica Jambi</td></tr>
        <tr><td>苏门答腊 / 沙摩西 (Samosir)</td><td>Kali Putih</td><td>越南 (进口品质)</td></tr>
    </tbody>
</table>`,
                flavor: '奶油味，坚果味，甜味',
            },
            ar: {
                title: 'روبوستا فاخرة',
                desc: `تشتهر قهوة روبوستا الإندونيسية عالميًا بقوامها الممتلئ ونكهتها الجريئة. تُزرع على ارتفاعات منخفضة وتحتوي على نسبة كافيين أعلى من أرابيكا، وتعد الخيار المفضل لمن يبحثون عن تجربة قهوة قوية ومكثفة - أو كقاعدة صلبة لمشروبات القهوة الحديثة بالحليب.<br><br>
<strong>الخصائص العامة لروبوستا لدينا</strong><br>
<strong>القوام:</strong> سميك، جريء، وقوي في الفم.<br>
<strong>الرائحة:</strong> نوتات الشوكولاتة والمكسرات، تكتمل أحيانًا بنغمات ترابية مميزة.<br>
<strong>النكهة:</strong> تسيطر عليها نكهات الشوكولاتة الداكنة مع حموضة منخفضة جدًا أو معدومة تقريبًا.<br>
<strong>المذاق اللاحق:</strong> نهاية نظيفة وطويلة الأمد مع حلاوة الكراميل المتبقية.<br><br>
<strong>قائمة أصناف روبوستا</strong><br>
فيما يلي مجموعتنا المختارة من قهوة روبوستا الفاخرة التي يتم الحصول عليها من مناطق إنتاج القهوة الرئيسية في إندونيسيا:
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>سومطرة والمناطق الغربية</th>
            <th>جاوة والمناطق الوسطى</th>
            <th>المناطق الشرقية والمختصة</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>آتشيه (Aceh)</td><td>جاوة (Java)</td><td>بالي (Bali / Bali Fine)</td></tr>
        <tr><td>بنغكولو (Bengkulu)</td><td>جمبر (Jember)</td><td>فلوريس (Flores)</td></tr>
        <tr><td>لامبونج (Lampung)</td><td>كودوس (Kudus)</td><td>بابوا (Papua)</td></tr>
        <tr><td>ميدان (Medan)</td><td>مالانج (Malang)</td><td>سولاويزي (Sulawesi)</td></tr>
        <tr><td>باجار عالم (Pagar Alam)</td><td>ماجيلانج (Magelang)</td><td>توراجا (Toraja)</td></tr>
        <tr><td>سيميندو (Semendo)</td><td>سوميدانج (Sumedang)</td><td>إكسيلسا إيجين (Excelsa Ijen)</td></tr>
        <tr><td>سيديكالانج (Sidikalang)</td><td>تيمانجونج (Temanggung)</td><td>ليبيريكا جامبي (Liberica Jambi)</td></tr>
        <tr><td>سومطرة / ساموسير (Samosir)</td><td>كالي بوتيه (Kali Putih)</td><td>فيتنام (جودة استيراد)</td></tr>
    </tbody>
</table>`,
                flavor: 'كريمي، مكسرات، حلو',
            },
            img: 'img/overview 3.jpeg'
        },
        'arabica': {
            en: {
                title: 'Premium Arabica',
                desc: `<strong>1. Full Wash Process</strong><br>
<strong>Description</strong><br>
A process in which coffee cherries are pulped and fermented in water to completely remove the mucilage before drying.<br>
<strong>Flavor Profile</strong><br>
Produces a very clean cup, bright acidity, and highlights the original characteristics of its growing region.<br>
<strong>Arabica Full Wash Product List</strong><br>
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <tbody>
        <tr><td>Aceh Gayo</td><td>Mekarwangi</td><td>Arjuno</td></tr>
        <tr><td>Papandayan</td><td>Bali Premium</td><td>Papua</td></tr>
        <tr><td>Batang</td><td>Papua Wamena</td><td>Blue Batak</td></tr>
        <tr><td>Puntang</td><td>Cikuray</td><td>Preanger</td></tr>
        <tr><td>Ciuhurip</td><td>Samosir</td><td>Ciwidey</td></tr>
        <tr><td>Semeru</td><td>Enrekang</td><td>Somendo</td></tr>
        <tr><td>Flores Manggarai</td><td>Temanggung</td><td>Flores Bajawa</td></tr>
        <tr><td>Timor Timur</td><td>Garut Nanas</td><td>Toraja Kalosi</td></tr>
        <tr><td>Garut Yellow Bourbon</td><td>Gunung Tilu</td><td>Garut Yellow Caturra</td></tr>
        <tr><td>Kerinci</td><td>Gayo Premium</td><td>Kintamani</td></tr>
        <tr><td>Gunung Halu</td><td>Malabar</td><td>Gunung Lawu</td></tr>
        <tr><td>Linggar Jati</td><td>Mandailing</td><td>Mandailing Specialty</td></tr>
    </tbody>
</table><br>

<strong>2. Semi Wash Process (Wet-Hulled)</strong><br>
<strong>Description</strong><br>
A traditional Indonesian process where the outer skin is removed, and the coffee is partially dried before the parchment layer is hulled.<br>
<strong>Flavor Profile</strong><br>
Full-bodied with low acidity, often featuring spicy and earthy notes.<br>
<strong>Arabica Semi Wash Product List</strong><br>
<table class="variant-table">
    <tbody>
        <tr><td>Aceh Long Berry</td><td>Aceh Pea Berry</td><td>Lintong</td></tr>
        <tr><td>Sidikalang</td><td>Gayo Special</td><td>Toraja Mamasa</td></tr>
    </tbody>
</table><br>

<strong>3. Honey Process</strong><br>
<strong>Description</strong><br>
The outer skin is removed while some of the sweet mucilage remains attached to the beans during the drying process.<br>
<strong>Flavor Profile</strong><br>
Soft honey-like sweetness, creamy body, and balanced acidity.<br>
<strong>Arabica Honey Product List</strong><br>
<table class="variant-table">
    <tbody>
        <tr><td>Bali Kintamani</td><td>Ethiopia</td><td>Bondowoso</td></tr>
        <tr><td>Garut</td><td>Brazil</td><td>Gayo</td></tr>
        <tr><td>Burundi</td><td>Kenya</td><td>Colombia</td></tr>
        <tr><td>Kilimanjaro</td><td>Puntang Black</td><td></td></tr>
    </tbody>
</table><br>

<strong>4. Natural Process</strong><br>
<strong>Description</strong><br>
Coffee cherries are dried whole with the skin and pulp intact under natural sunlight.<br>
<strong>Flavor Profile</strong><br>
Intense fruity notes, berry-like sweetness, and a highly complex flavor profile.<br>
<strong>Arabica Natural Product List</strong><br>
<table class="variant-table">
    <tbody>
        <tr><td>Bali Natural</td><td>Flores Bajawa</td><td>Gayo Natural</td></tr>
        <tr><td>Gunung Patuha</td><td>Java Carlos</td><td>Red Natural</td></tr>
    </tbody>
</table><br>

<strong>5. Anaerobic & Wine Process</strong><br>
<strong>Description</strong><br>
Fermentation is carried out in airtight containers (without oxygen) to create highly aromatic and distinctive flavor profiles.<br>
<strong>Flavor Profile</strong><br>
Wine-like character with strong exotic fruit notes and intense aromatics.<br>
<strong>Arabica Specialty Product List</strong><br>
<table class="variant-table">
    <tbody>
        <tr><td>Exotis Jagong Jeget (Anaerobic)</td><td>Gunung Puntang (Wine)</td></tr>
        <tr><td>Gayo (Wine)</td><td>Garut (Wine)</td></tr>
    </tbody>
</table>`,
                flavor: 'Floral, Fruity, Berry',
            },
            id: {
                title: 'Arabika Premium',
                desc: 'Kopi Arabika menonjolkan kemurnian dan kompleksitas, menawarkan cangkir yang bersih dan aromatik yang mencerminkan karakter asalnya. Halus, elegan, dan manis alami — ini adalah kopi dalam bentuk paling murni.',
                flavor: 'Floral, Buah, Berry',
            },
            zh: {
                title: '优质阿拉比卡',
                desc: `<strong>1. 全水洗处理 (Full Wash)</strong><br>
<strong>描述</strong><br>
将咖啡樱桃去皮并在水中发酵以完全去除果胶，然后干燥。<br>
<strong>风味特征</strong><br>
口感非常干净，酸度明亮，突出了产地的原始特征。<br>
<strong>阿拉比卡全水洗产品列表</strong><br>
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <tbody>
        <tr><td>Aceh Gayo</td><td>Mekarwangi</td><td>Arjuno</td></tr>
        <tr><td>Papandayan</td><td>Bali Premium</td><td>Papua</td></tr>
        <tr><td>Batang</td><td>Papua Wamena</td><td>Blue Batak</td></tr>
        <tr><td>Puntang</td><td>Cikuray</td><td>Preanger</td></tr>
        <tr><td>Ciuhurip</td><td>Samosir</td><td>Ciwidey</td></tr>
        <tr><td>Semeru</td><td>Enrekang</td><td>Somendo</td></tr>
        <tr><td>Flores Manggarai</td><td>Temanggung</td><td>Flores Bajawa</td></tr>
        <tr><td>Timor Timur</td><td>Garut Nanas</td><td>Toraja Kalosi</td></tr>
        <tr><td>Garut Yellow Bourbon</td><td>Gunung Tilu</td><td>Garut Yellow Caturra</td></tr>
        <tr><td>Kerinci</td><td>Gayo Premium</td><td>Kintamani</td></tr>
        <tr><td>Gunung Halu</td><td>Malabar</td><td>Gunung Lawu</td></tr>
        <tr><td>Linggar Jati</td><td>Mandailing</td><td>Mandailing Specialty</td></tr>
    </tbody>
</table><br>

<strong>2. 半水洗 / 湿刨法 (Semi Wash / Wet-Hulled)</strong><br>
<strong>描述</strong><br>
一种传统的印尼工艺，去除外皮，咖啡在部分干燥后去壳。<br>
<strong>风味特征</strong><br>
醇度厚实，酸度低，通常带有辛辣和泥土气息。<br>

<strong>3. 蜜处理 (Honey Process)</strong><br>
<strong>描述</strong><br>
去除外皮，但在干燥过程中保留部分甜味果胶。<br>
<strong>风味特征</strong><br>
柔和的蜂蜜般甜味，奶油般口感，酸度平衡。<br>

<strong>4. 日晒处理 (Natural Process)</strong><br>
<strong>描述</strong><br>
咖啡樱桃在自然阳光下带皮干燥。<br>
<strong>风味特征</strong><br>
强烈的果香，浆果般的甜味，风味极其复杂。<br>

<strong>5. 厌氧 & 红酒处理 (Anaerobic & Wine Process)</strong><br>
<strong>描述</strong><br>
在密闭容器（无氧）中发酵，创造出高度芳香和独特的风味。<br>
<strong>风味特征</strong><br>
具有红酒般的特征，带有强烈的异国水果味和浓郁香气。`,
                flavor: '花香，果香，浆果味',
            },
            ar: {
                title: 'أرابيكا فاخرة',
                desc: `<strong>1. عملية الغسيل الكامل (Full Wash)</strong><br>
<strong>الوصف</strong><br>
عملية يتم فيها نزع لب كرز القهوة وتخميره في الماء لإزالة الصمغ تمامًا قبل التجفيف.<br>
<strong>ملف النكهة</strong><br>
ينتج كوبًا نظيفًا للغاية، وحموضة مشرقة، ويبرز الخصائص الأصلية لمنطقة زراعته.<br>
<strong>قائمة منتجات أرابيكا غسيل كامل</strong><br>
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <tbody>
        <tr><td>Aceh Gayo</td><td>Mekarwangi</td><td>Arjuno</td></tr>
        <tr><td>Papandayan</td><td>Bali Premium</td><td>Papua</td></tr>
        <tr><td>Batang</td><td>Papua Wamena</td><td>Blue Batak</td></tr>
        <tr><td>Puntang</td><td>Cikuray</td><td>Preanger</td></tr>
        <tr><td>Ciuhurip</td><td>Samosir</td><td>Ciwidey</td></tr>
        <tr><td>Semeru</td><td>Enrekang</td><td>Somendo</td></tr>
        <tr><td>Flores Manggarai</td><td>Temanggung</td><td>Flores Bajawa</td></tr>
        <tr><td>Timor Timur</td><td>Garut Nanas</td><td>Toraja Kalosi</td></tr>
        <tr><td>Garut Yellow Bourbon</td><td>Gunung Tilu</td><td>Garut Yellow Caturra</td></tr>
        <tr><td>Kerinci</td><td>Gayo Premium</td><td>Kintamani</td></tr>
        <tr><td>Gunung Halu</td><td>Malabar</td><td>Gunung Lawu</td></tr>
        <tr><td>Linggar Jati</td><td>Mandailing</td><td>Mandailing Specialty</td></tr>
    </tbody>
</table><br>

<strong>2. الغسيل النصفي / التقشير الرطب (Semi Wash)</strong><br>
<strong>الوصف</strong><br>
عملية إندونيسية تقليدية حيث يتم إزالة القشرة الخارجية، ويتم تجفيف القهوة جزئيًا قبل تقشير طبقة البرشمان.<br>
<strong>ملف النكهة</strong><br>
قوام ممتلئ مع حموضة منخفضة، وغالبًا ما يتميز بنوتات التوابل والترابية.<br>

<strong>3. المعالجة العسلية (Honey Process)</strong><br>
<strong>الوصف</strong><br>
تتم إزالة القشرة الخارجية بينما يظل بعض الصمغ الحلو ملتصقًا بالحبوب أثناء عملية التجفيف.<br>
<strong>ملف النكهة</strong><br>
حلاوة ناعمة تشبه العسل، وقوام كريمي، وحموضة متوازنة.<br>

<strong>4. المعالجة الطبيعية (Natural Process)</strong><br>
<strong>الوصف</strong><br>
يتم تجفيف كرز القهوة كاملاً مع القشرة واللب تحت أشعة الشمس الطبيعية.<br>
<strong>ملف النكهة</strong><br>
نوتات فاكهية مكثفة، وحلاوة تشبه التوت، وملف نكهة معقد للغاية.<br>

<strong>5. المعالجة اللاهوائية والنبيذية (Anaerobic & Wine)</strong><br>
<strong>الوصف</strong><br>
يتم التخمير في حاويات محكمة الإغلاق (بدون أكسجين) لإنشاء ملفات نكهة عطرية ومميزة للغاية.<br>
<strong>ملف النكهة</strong><br>
طابع يشبه النبيذ مع نوتات فواكه استوائية قوية وروائح مكثفة.`,
                flavor: 'زهري، فاكهي، توت',
            },
            img: 'img/overview8.jpeg'
        },
        'blend': {
            en: {
                title: 'Signature Blend',
                desc: `<strong>INDONESIAN COFFEE BLENDS: THE PERFECT HARMONY</strong><br>
Our coffee blends are the art of combining selected coffee beans from various regions of Indonesia to create flavor profiles that are unique, consistent, and perfectly balanced. We carefully unite the aromatic and complex characteristics of Arabica with the bold, full-bodied strength of Robusta—resulting in a perfect cup for every purpose.<br><br>
<strong>Why Choose Our Blends?</strong><br>
<strong>Flavor Balance</strong><br>
Precisely crafted to harmonize acidity, sweetness, and body.<br>
<strong>Consistency</strong><br>
Every batch is produced with the same flavor profile to maintain reliable quality standards.<br>
<strong>Versatility</strong><br>
Ideal for various brewing methods, from Espresso machines and Moka Pots to modern milk-based coffee beverages.<br><br>
<strong>House Blend & Mix Variants</strong><br>
Below is our exclusive collection of signature blends:
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>Blend Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr><td><strong>1. Specialty Blend</strong></td><td>A premium blend of selected Arabica beans (Blue Mountain & Bali), delivering a luxurious and complex flavor profile.</td></tr>
        <tr><td><strong>2. House Blend</strong></td><td>A balanced combination of Gayo Arabica and Toraja Robusta, suitable for both black coffee and milk-based drinks.</td></tr>
        <tr><td><strong>3. Espresso Blend</strong></td><td>A specially formulated blend of Gayo Arabica, Dampit Robusta, and Toraja coffee, producing thick crema and bold flavor.</td></tr>
        <tr><td><strong>4. Kopi Susu Blend</strong></td><td>Specifically designed to ensure the coffee character remains dominant when combined with milk and palm sugar.</td></tr>
        <tr><td><strong>5. Classic Blend</strong></td><td>A blend of Kerinci Robusta with Puntang & Majalaya Arabica, offering an authentic traditional coffee experience.</td></tr>
        <tr><td><strong>6. Italian Roast</strong></td><td>Dark roast profile for an intensely bold taste with very low acidity.</td></tr>
        <tr><td><strong>7. Jackfruit Blend</strong></td><td>A unique blend featuring exotic jackfruit aroma with natural sweetness.</td></tr>
        <tr><td><strong>8. Honey Blend</strong></td><td>A blend of Honey-processed coffee beans, highlighting smooth texture and honey-like sweetness.</td></tr>
    </tbody>
</table><br>
<strong>Blend Selection Guide</strong><br>
<strong>For Black Coffee Lovers</strong><br>
Choose Arabica-dominant options such as Specialty Blend or Honey Blend.<br>
<strong>For Coffee Shops / Iced Milk Coffee</strong><br>
Use Espresso Blend or Kopi Susu Blend for bold flavor and cost efficiency.<br>
<strong>For Traditional Indonesian Coffee (Kopi Tubruk)</strong><br>
Classic Blend delivers a familiar aroma and taste loved by local coffee drinkers.`,
                flavor: 'Dark Chocolate, Caramel',
            },
            id: {
                title: 'Signature Blend',
                desc: 'Signature Blend adalah jantung dari Universal Java Coffee — perpaduan yang seimbang dirancang untuk menciptakan harmoni di setiap cangkir. Berani namun halus, dibuat untuk dikenang, menenangkan, dan tak tertukar.',
                flavor: 'Cokelat Hitam, Karamel',
            },
            zh: {
                title: '招牌拼配',
                desc: `<strong>印尼咖啡拼配：完美的和谐</strong><br>
我们的咖啡拼配是将来自印尼不同地区的精选咖啡豆结合在一起的艺术，旨在创造独特、一致且完美平衡的风味特征。我们仔细地将阿拉比卡的芳香和复杂特征与罗布斯塔的大胆、醇厚强度结合起来——为每种用途带来完美的咖啡。<br><br>
<strong>为什么选择我们的拼配？</strong><br>
<strong>风味平衡</strong><br>
精确制作，以协调酸度、甜度和醇度。<br>
<strong>一致性</strong><br>
每一批次都以相同的风味特征生产，以保持可靠的质量标准。<br>
<strong>多功能性</strong><br>
非常适合各种冲泡方法，从意式浓缩咖啡机和摩卡壶到现代牛奶咖啡饮料。<br><br>
<strong>招牌拼配列表</strong><br>
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>拼配名称</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr><td><strong>1. 精品拼配 (Specialty Blend)</strong></td><td>精选阿拉比卡豆（蓝山 & 巴厘岛）的优质拼配，提供奢华而复杂的风味。</td></tr>
        <tr><td><strong>2. 招牌拼配 (House Blend)</strong></td><td>Gayo 阿拉比卡和 Toraja 罗布斯塔的平衡组合，适合黑咖啡和牛奶饮品。</td></tr>
        <tr><td><strong>3. 浓缩拼配 (Espresso Blend)</strong></td><td>Gayo 阿拉比卡、Dampit 罗布斯塔和 Toraja 咖啡的特殊配方，产生厚实的油脂和大胆的风味。</td></tr>
        <tr><td><strong>4. 牛奶咖啡拼配 (Kopi Susu Blend)</strong></td><td>专为与牛奶和棕榈糖结合时保持咖啡特征主导而设计。</td></tr>
        <tr><td><strong>5. 经典拼配 (Classic Blend)</strong></td><td>Kerinci 罗布斯塔与 Puntang & Majalaya 阿拉比卡的拼配，提供正宗的传统咖啡体验。</td></tr>
        <tr><td><strong>6. 意式烘焙 (Italian Roast)</strong></td><td>深烘焙，口感强烈，酸度极低。</td></tr>
        <tr><td><strong>7. 波罗蜜拼配 (Jackfruit Blend)</strong></td><td>具有异国情调的波罗蜜香气和自然甜味的独特拼配。</td></tr>
        <tr><td><strong>8. 蜜处理拼配 (Honey Blend)</strong></td><td>蜜处理咖啡豆的拼配，突出口感顺滑和蜂蜜般的甜味。</td></tr>
    </tbody>
</table>`,
                flavor: '黑巧克力，焦糖',
            },
            ar: {
                title: 'مزيج التوقيع',
                desc: `<strong>مزيج القهوة الإندونيسية: التناغم المثالي</strong><br>
خلطات القهوة لدينا هي فن الجمع بين حبوب البن المختارة من مناطق مختلفة في إندونيسيا لإنشاء ملفات نكهة فريدة ومتسقة ومتوازنة تمامًا. نحن نوحد بعناية الخصائص العطرية والمعقدة لأرابيكا مع القوة الجريئة والممتلئة لروبوستا - مما ينتج عنه كوب مثالي لكل غرض.<br><br>
<strong>لماذا تختار خلطاتنا؟</strong><br>
<strong>توازن النكهة</strong><br>
مصنوعة بدقة لتحقيق التناغم بين الحموضة والحلاوة والقوام.<br>
<strong>الاتساق</strong><br>
يتم إنتاج كل دفعة بنفس ملف النكهة للحفاظ على معايير جودة موثوقة.<br>
<strong>تعدد الاستخدامات</strong><br>
مثالية لطرق التخمير المختلفة، من آلات الإسبريسو وأواني الموكا إلى مشروبات القهوة الحديثة بالحليب.<br><br>
<strong>قائمة خلطات التوقيع</strong><br>
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>اسم المزيج</th>
            <th>الوصف</th>
        </tr>
    </thead>
    <tbody>
        <tr><td><strong>1. مزيج مختص (Specialty Blend)</strong></td><td>مزيج فاخر من حبوب أرابيكا المختارة (بلو ماونتن وبالي)، يقدم ملف نكهة فاخر ومعقد.</td></tr>
        <tr><td><strong>2. مزيج المنزل (House Blend)</strong></td><td>مزيج متوازن من جايو أرابيكا وتوراجا روبوستا، مناسب لكل من القهوة السوداء والمشروبات القائمة على الحليب.</td></tr>
        <tr><td><strong>3. مزيج الإسبريسو (Espresso Blend)</strong></td><td>مزيج مركب خصيصًا من جايو أرابيكا، ودامبيت روبوستا، وقهوة توراجا، ينتج كريمة سميكة ونكهة جريئة.</td></tr>
        <tr><td><strong>4. مزيج كوبي سوسو (Kopi Susu Blend)</strong></td><td>مصمم خصيصًا لضمان بقاء طابع القهوة مهيمنًا عند مزجه بالحليب وسكر النخيل.</td></tr>
        <tr><td><strong>5. مزيج كلاسيكي (Classic Blend)</strong></td><td>مزيج من كيرينشي روبوستا مع بونتانج وماجالايا أرابيكا، يقدم تجربة قهوة تقليدية أصيلة.</td></tr>
        <tr><td><strong>6. تحميص إيطالي (Italian Roast)</strong></td><td>تحميص داكن لطعم جريء للغاية مع حموضة منخفضة جدًا.</td></tr>
        <tr><td><strong>7. مزيج الجاك فروت (Jackfruit Blend)</strong></td><td>مزيج فريد يتميز برائحة الجاك فروت الغريبة مع حلاوة طبيعية.</td></tr>
        <tr><td><strong>8. مزيج العسل (Honey Blend)</strong></td><td>مزيج من حبوب البن المعالجة بالعسل، يبرز الملمس الناعم والحلاوة التي تشبه العسل.</td></tr>
    </tbody>
</table>`,
                flavor: 'شوكولاتة داكنة، كراميل',
            },
            img: 'img/overview 2.jpeg'
        },
        'green': {
            en: {
                title: 'Green Coffee',
                desc: `<strong>GREEN BEANS FROM INDONESIA: THE SOURCE OF EXCELLENCE</strong><br>
Our green coffee beans are sourced from the finest coffee plantations across the Indonesian archipelago. Carefully selected and strictly quality-controlled, our green beans are ideal for home roasters and professional roasteries looking to explore and develop their own unique roast profiles.<br><br>
<strong>TECHNICAL & QUALITY SPECIFICATIONS</strong><br>
To ensure optimal roasting performance, all of our green beans meet the following industry standards:
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>Quality Parameter</th>
            <th>Standard Description</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Grade</td><td>Grade 1 / Specialty Grade (Minimal defects)</td></tr>
        <tr><td>Moisture Content</td><td>11% – 12.5% (Ideal for storage stability)</td></tr>
        <tr><td>Density</td><td>High Density (Hard beans, resistant to high heat)</td></tr>
        <tr><td>Harvest Year</td><td>Current Crop (Latest harvest for maximum freshness)</td></tr>
        <tr><td>Sorting</td><td>Double / Triple Picked (Manual defect removal)</td></tr>
    </tbody>
</table><br>
<strong>GREEN BEAN COLLECTION</strong><br>
Our available green bean selections are categorized by processing method and origin:<br><br>
<strong>1. By Processing Method</strong><br>
<strong>Full Wash</strong><br>
Clean cup profile with bright acidity and excellent consistency.<br>
<strong>Semi Wash (Wet-Hulled)</strong><br>
Strong body with distinctive Indonesian spicy and earthy notes.<br>
<strong>Honey Process</strong><br>
High sweetness with a creamy mouthfeel.<br>
<strong>Natural Process</strong><br>
Intense fruity flavors and complex aroma.<br>
<strong>Anaerobic / Wine Process</strong><br>
Exotic aromatics with highly distinctive and unique flavor profiles.<br><br>
<strong>2. By Region (Single Origin)</strong><br>
<strong>Sumatra</strong><br>
Aceh Gayo, Mandailing, Lintong, Sidikalang, Lampung, Pagar Alam<br>
<strong>Java</strong><br>
Preanger, Garut, Malabar, Temanggung, Ijen, Muria<br>
<strong>Bali & Nusa Tenggara</strong><br>
Kintamani, Flores Bajawa<br>
<strong>Sulawesi</strong><br>
Toraja Kalosi, Enrekang, Mamasa<br>
<strong>Papua</strong><br>
Wamena, Moanemani<br><br>
<strong>WHY BUY FROM UNIVERSAL JAVA COFFEE</strong><br>
<strong>Traceability</strong><br>
100% guaranteed origin authenticity for every coffee bean.<br>
<strong>Freshness</strong><br>
Fast stock turnover ensures consistently fresh green beans.<br>
<strong>Stable Quality</strong><br>
High sorting standards make it easier for roasters to define and maintain precise roast profiles`,
                flavor: 'Grassy, Earthy, Fresh',
            },
            id: {
                title: 'Kopi Hijau',
                desc: 'Kopi Hijau menawarkan profil segar dan bersemangat, menampilkan karakter mentah biji yang belum dipanggang. Ringan, herbal, dan memberi energi, memberikan pengalaman unik bagi mereka yang mencari sesuatu yang alami berbeda.',
                flavor: 'Rumput, Tanah, Segar',
            },
            zh: {
                title: '生咖啡',
                desc: `<strong>来自印尼的生咖啡豆：卓越之源</strong><br>
我们的生咖啡豆源自印尼群岛最好的咖啡种植园。经过精心挑选和严格的质量控制，我们的生豆非常适合家庭烘焙师和专业烘焙坊探索和开发自己独特的烘焙曲线。<br><br>
<strong>技术与质量规格</strong><br>
为了确保最佳的烘焙性能，我们所有的生豆都符合以下行业标准：
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>质量参数</th>
            <th>标准描述</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>等级</td><td>一级 / 精品级 (Grade 1 / Specialty - 极少缺陷)</td></tr>
        <tr><td>含水量</td><td>11% – 12.5% (理想的储存稳定性)</td></tr>
        <tr><td>密度</td><td>高密度 (硬豆，耐高温)</td></tr>
        <tr><td>收获年份</td><td>当季作物 (最新收获以确保最大新鲜度)</td></tr>
        <tr><td>分拣</td><td>双重 / 三重手选 (人工去除缺陷)</td></tr>
    </tbody>
</table><br>
<strong>生豆系列</strong><br>
我们现有的生豆选择按加工方法和产地分类：<br><br>
<strong>1. 按加工方法</strong><br>
<strong>全水洗 (Full Wash):</strong> 干净的口感，明亮的酸度和出色的一致性。<br>
<strong>湿刨法 (Semi Wash):</strong> 醇度强劲，带有独特的印尼辛辣和泥土气息。<br>
<strong>蜜处理 (Honey Process):</strong> 高甜度，奶油般口感。<br>
<strong>日晒 (Natural Process):</strong> 强烈的果味和复杂的香气。<br>
<strong>厌氧 / 红酒处理:</strong> 异国情调的香气，具有非常独特和鲜明的风味特征。<br><br>
<strong>2. 按地区 (单一产地)</strong><br>
<strong>苏门答腊:</strong> Aceh Gayo, Mandailing, Lintong, Sidikalang, Lampung, Pagar Alam<br>
<strong>爪哇:</strong> Preanger, Garut, Malabar, Temanggung, Ijen, Muria<br>
<strong>巴厘岛 & 努沙登加拉:</strong> Kintamani, Flores Bajawa<br>
<strong>苏拉威西:</strong> Toraja Kalosi, Enrekang, Mamasa<br>
<strong>巴布亚:</strong> Wamena, Moanemani`,
                flavor: '青草味，泥土味，清新',
            },
            ar: {
                title: 'قهوة خضراء',
                desc: `<strong>حبوب البن الأخضر من إندونيسيا: مصدر التميز</strong><br>
يتم الحصول على حبوب البن الأخضر لدينا من أرقى مزارع البن في جميع أنحاء الأرخبيل الإندونيسي. تم اختيارها بعناية ومراقبتها بصرامة من حيث الجودة، وتعد حبوبنا الخضراء مثالية للمحامص المنزلية والمحامص المحترفة التي تتطلع إلى استكشاف وتطوير ملفات التحميص الفريدة الخاصة بها.<br><br>
<strong>المواصفات الفنية والجودة</strong><br>
لضمان أداء تحميص مثالي، تلبي جميع حبوبنا الخضراء معايير الصناعة التالية:
<style>
    .variant-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9em; }
    .variant-table th, .variant-table td { padding: 8px; border: 1px solid #ddd; text-align: left; vertical-align: top; }
    .variant-table th { background-color: #f5f5f5; font-weight: 600; }
</style>
<table class="variant-table">
    <thead>
        <tr>
            <th>معيار الجودة</th>
            <th>وصف المعيار</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>الدرجة</td><td>درجة 1 / درجة مختصة (عيوب قليلة جدًا)</td></tr>
        <tr><td>محتوى الرطوبة</td><td>11% – 12.5% (مثالي لاستقرار التخزين)</td></tr>
        <tr><td>الكثافة</td><td>كثافة عالية (حبوب صلبة، مقاومة للحرارة العالية)</td></tr>
        <tr><td>سنة الحصاد</td><td>المحصول الحالي (أحدث حصاد لأقصى نضارة)</td></tr>
        <tr><td>الفرز</td><td>فرز مزدوج / ثلاثي (إزالة العيوب يدويًا)</td></tr>
    </tbody>
</table><br>
<strong>مجموعة الحبوب الخضراء</strong><br>
يتم تصنيف اختياراتنا المتاحة من الحبوب الخضراء حسب طريقة المعالجة والمنشأ:<br><br>
<strong>1. حسب طريقة المعالجة</strong><br>
<strong>غسيل كامل:</strong> ملف كوب نظيف مع حموضة مشرقة واتساق ممتاز.<br>
<strong>غسيل نصفي (تقشير رطب):</strong> قوام قوي مع نوتات توابل وترابية إندونيسية مميزة.<br>
<strong>معالجة عسلية:</strong> حلاوة عالية مع ملمس كريمي في الفم.<br>
<strong>معالجة طبيعية:</strong> نكهات فاكهية مكثفة ورائحة معقدة.<br>
<strong>معالجة لاهوائية / نبيذية:</strong> روائح غريبة مع ملفات نكهة مميزة وفريدة للغاية.<br><br>
<strong>2. حسب المنطقة (أصل واحد)</strong><br>
<strong>سومطرة:</strong> Aceh Gayo, Mandailing, Lintong, Sidikalang, Lampung, Pagar Alam<br>
<strong>جاوة:</strong> Preanger, Garut, Malabar, Temanggung, Ijen, Muria<br>
<strong>بالي ونوسا تينجارا:</strong> Kintamani, Flores Bajawa<br>
<strong>سولاويزي:</strong> Toraja Kalosi, Enrekang, Mamasa<br>
<strong>بابوا:</strong> Wamena, Moanemani`,
                flavor: 'عشبي، ترابي، طازج',
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
            document.getElementById('product-desc').innerHTML = content.desc;
            document.getElementById('product-flavor').textContent = content.flavor;
        } else {
            document.getElementById('product-name').textContent = "Product Not Found";
        }
    }

    // --- Contact Form Handler ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // Initialize EmailJS (Replace "YOUR_PUBLIC_KEY" with your actual public key from EmailJS dashboard)
        if (typeof emailjs !== 'undefined') {
            emailjs.init("QtTiMITKt9XhiLImZ");
        }

        async function handleSubmit(event) {
            event.preventDefault();
            const status = document.getElementById('form-status');
            const form = event.target;
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            // Honeypot Spam Protection
            const honeypot = form.querySelector('input[name="_gotcha"]');
            if (honeypot && honeypot.value) {
                return; // Silent return for bots
            }

            const currentLang = localStorage.getItem('ujc_lang') || 'en';
            const langTranslations = translations[currentLang] || translations['en'];

            submitBtn.textContent = langTranslations.form_sending;
            submitBtn.disabled = true;
            status.innerHTML = '';
            status.className = '';

            // EmailJS Configuration (Replace with your actual IDs)
            const serviceID = "service_6m9v6e4";
            const templateID = "template_3bd8j1s";

            try {
                const response = await emailjs.sendForm(serviceID, templateID, form);

                if (response.status === 200) {
                    status.innerHTML = langTranslations.form_success;
                    status.className = 'form-status-success';
                    form.reset();
                } else {
                    status.innerHTML = langTranslations.form_error;
                    status.className = 'form-status-error';
                }
            } catch (error) {
                console.error("EmailJS Error:", error);
                status.innerHTML = langTranslations.form_error;
                status.className = 'form-status-error';
            } finally {
                submitBtn.disabled = false;
                // Restore button text to the correct language
                const finalLang = localStorage.getItem('ujc_lang') || 'en';
                submitBtn.textContent = (translations[finalLang] || translations['en']).form_send;
            }
        }
        contactForm.addEventListener("submit", handleSubmit);
    }

    // Initialize
    updateContent();
});
