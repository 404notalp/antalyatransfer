export type LanguageCode = 'tr' | 'en' | 'ar' | 'ru' | 'de';
  

// Add flag emoji to each language object
export const supportedLanguages = [
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' }, // Using SA flag for Arabic example
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
] as const; // Use const assertion for stricter type checking

interface Translations {
  [key: string]: any; // Using 'any' for nested structure flexibility
}
 
export const translations: Record<LanguageCode, Translations> = {
  en: {
    navbar: {
      services: 'Services',
      vehicles: 'Vehicles', 
     contact: 'Contact',
      pricing: 'Pricing',
      logoAlt: 'Antalya Greenway VIP Transfers Logo',
      bookNow: 'BOOK NOW',
    },
    hero: {
      title: 'Antalya Greenway VIP Transfer',
      subtitle: 'Experience unparalleled comfort and style with Antalya Greenway Transfer.',
      bookNow: 'Book Now', // This is for the hero section button
      bookNowMessage: 'Hello Antalya Greenway Transfer, I would like to book a VIP transfer.', // Default message for book now

    },
     testimonials: {
      title: 'What Our Clients Say',
        tripadvisorReview: 'TripAdvisor Review',
        tripadvisorAlt: 'TripAdvisor Logo',
          reviews: {
            review1: 'Excellent service! Punctual, clean vehicle, and very professional driver. Highly recommended for airport transfers in Antalya.', 
            review2: 'Antalya Greenway Transfer made our city tour unforgettable. The driver was knowledgeable and friendly. The Vito was incredibly comfortable.', 
            review3: 'The best transfer service in Antalya. Vehicles are very luxurious and drivers are very polite. Will definitely use again.', 
            review4: 'Reliable and comfortable transfer. The driver was very polite and helped with the luggage. The trip from the airport to Kemer was excellent.',
            review5: 'Very classy service and a respectable driver. The car was very clean and comfortable. Highly recommend them to anyone visiting Antalya.', 
            review6: 'Top-notch VIP experience. From booking to drop-off, everything was seamless. The Mercedes Vito is pure luxury.', 
            review7: 'Very reliable and friendly service. The custom route planning was perfect for our day trip to Pamukkale.', 
            review8: 'The best VIP transfer service I have tried in Turkey. The driver was professional and the car was very luxurious.',
            review9: 'Abdullah Algül provides an exceptional service. The attention to detail and customer care are outstanding. Truly VIP.', 
        }
    },
    services: {
        title: 'Our Premier Services', 
        airport: {
            title: 'Airport Transfers', 
            description: 'Seamless airport pickups and drop-offs in luxury Mercedes Vito vehicles. Professional drivers monitor flight status and wait for you, even if your flight is delayed.', 
        },
        cityTours: {
            title: 'Private City Tours',
            description: 'Explore Antalya and surrounding areas at your own pace with customized city tours. Discover hidden gems and major attractions with a knowledgeable, local driver.',
        },
        customRoutes: {
            title: 'Custom VIP Routes',
            description: 'Design your perfect journey with customized routes tailored to your specific needs. Whether it\'s a day trip or multi-city transport, we\'ve got you covered.',
        },
    },
    vehicles: {
        title: 'Our Luxury Vehicle: Mercedes Vito', // Updated Title
        description: 'Travel in ultimate comfort and sophistication. Our Mercedes Vito vehicles are equipped with premium features including plush leather seats, climate control, complimentary WiFi, a minibar with refreshments, tinted privacy glass, and ample space for luggage.',
        interiorTitle: 'Vehicle Interior',
        exteriorTitle: 'Vehicle Exterior',
        interiorAlt: 'Mercedes Vito Luxury Interior View',
        exteriorAlt: 'Mercedes Vito Exterior View',
        enlarge: 'View Enlarged',
        enlargedView: 'Enlarged View', 
    },
      driver: {
        title: 'Meet Your Professional Driver: Abdullah Algül',
        bio: 'Abdullah Algül is the cornerstone of Antalya Greenway Transfer\'s commitment to excellence. Meticulously selected, security-vetted, and possessing years of experience navigating Antalya and its surroundings. Dedicated to providing a safe, punctual, and discreet service, ensuring your journey is smooth and enjoyable. Multilingual capabilities available upon request to cater to your communication needs.',
        alt: 'Professional Headshot of Abdullah Algül', // Updated alt text
      securityVetted: 'Security Vetted',
     experiencedPunctual: 'Experienced & Punctual',
        multilingualAvailable: 'Multilingual Available',
    },
     pricing: {
      title: 'Transparent Pricing for Your Journey',
      tableHeadings: {
        destination: "Destination",
        oneWay: "One-Way",
        roundTrip: "Round-Trip",
      },
        oneWay: 'One-Way', 
        roundTrip: 'Round-Trip',
        tableData: [
            {
                direction: 'Antalya – Kundu',
                oneWay: '€30',
                roundTrip: '€40',
            },
            {
                direction: 'Belek',
                oneWay: '€40',
                roundTrip: '€50',
            },
            {
                direction: 'Side',
                oneWay: '€50',
                roundTrip: '€60',
            },
            {
                direction: 'K.Ağaç – Kızılot – Okurcalar',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Alanya', oneWay: '€65', roundTrip: '€75' },
            { direction: 'Mahmutlar – Kargıcak', oneWay: '€85', roundTrip: '€95' },
            { direction: 'Beldibi – Göynük – Kemer', oneWay: '€45', roundTrip: '€55' },
            {
                direction: 'Kiriş – Ç.Yuva – Tekirova',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Çıralı – Olympos – Adrasan', oneWay: '€65', roundTrip: '€75' },
        ],
        customQuotePrompt: 'Need a custom route? Contact us for a personalized quote.', // Message for quote prompt
        requestQuote: 'Request Custom Quote', // Remove extra 's' at the begining
        requestQuoteMessage: 'Hello Antalya Greenway Transfer, I would like to request a custom quote for a VIP transfer.', // Message for quote button
    }, 
    video: {
        title: 'Experience the Antalya Greenway Difference',
    },
    contact: { 
        title: 'Get in Touch', 
        whatsapp: 'Chat on WhatsApp', 
        call: 'Call Us', 
        email: 'Email Us', 
        availability: 'Available 24/7 for your transportation needs.', 
        whatsappMessage: 'Hello Antalya Greenway Transfer, I would like to inquire about your services.', 
    }, 
    footer: {
      logoAlt: 'Antalya Greenway VIP Transfers Logo', 
      quickLinks: 'Quick Links', 
      legal: 'Legal', 
      privacyPolicy: 'Privacy Policy', 
      cookiePolicy: 'Cookie Policy', 
      gdprInfo: 'GDPR Information', 
      contactInfo: 'Contact Info', 
      phoneNumber: '+90 505 299 22 98', 
      emailAddress: 'antalyagreenwaytransfer@gmail.com', 
      allRightsReserved: 'All Rights Reserved.', 
    },
    flags: {
      de: '🇩🇪', 
      gb: '🇬🇧', 
      us: '🇺🇸', 
      tr: '🇹🇷', 
      ru: '🇷🇺', 
      sa: '🇸🇦', 
      ae: '🇦🇪', 
      qa: '🇶🇦', 
    }
  },
  tr: {
    navbar: {
      services: 'Hizmetler',
      vehicles: 'Araçlar',
     contact: 'İletişim',
      pricing: 'Fiyatlar',
      bookNow: 'REZERVASYON', // Added
    },
    hero: {
      title: 'Antalya Greenway VIP Transfer',
      subtitle: 'Antalya Greenway Transfer ile eşsiz konfor ve stil deneyimleyin.',
      bookNow: 'Şimdi Rezervasyon Yap',
      bookNowMessage: 'Merhaba Antalya Greenway Transfer, VIP transfer rezervasyonu yapmak istiyorum.', 
    },
     testimonials: {
      title: 'Müşterilerimiz Ne Diyor',
        tripadvisorReview: 'TripAdvisor Yorumu',
        tripadvisorAlt: 'TripAdvisor Logosu',
          reviews: {
              review1: 'Mükemmel hizmet! Dakik, temiz araç ve çok profesyonel bir sürücü. Antalya\'daki havalimanı transferleri için şiddetle tavsiye edilir.',
            review2: 'Antalya Greenway Transfer şehir turumuzu unutulmaz kıldı. Sürücü bilgili ve arkadaş canlısıydı. Vito inanılmaz rahattı.',
            review3: 'Antalya\'daki en iyi transfer hizmeti. Araçlar çok lüks ve şoförler çok kibar. Kesinlikle tekrar kullanacağım.',
            review4: 'Güvenilir ve konforlu transfer. Sürücü çok kibardı ve bagaj konusunda yardımcı oldu. Havalimanından Kemer\'e yolculuk harika geçti.',
            review5: 'Çok klas bir hizmet ve saygın bir sürücü. Araba çok temiz ve rahattı. Antalya\'yı ziyaret eden herkese şiddetle tavsiye ederim.',
            review6: 'Birinci sınıf VIP deneyimi. Rezervasyondan bırakmaya kadar her şey sorunsuzdu. Mercedes Vito saf lüks.',
            review7: 'Çok güvenilir ve güler yüzlü hizmet. Özel rota planlaması Pamukkale\'ye yaptığımız günübirlik gezi için mükemmeldi.',
            review8: 'Türkiye\'de denediğim en iyi VIP transfer hizmeti. Sürücü profesyoneldi ve araba çok lüksdü.',
            review9: 'Abdullah Algül olağanüstü bir hizmet sunuyor. Detaylara gösterilen özen ve müşteri hizmetleri takdire şayan. Gerçekten VIP.', // Updated review text
        }
    },
    services: {
        title: 'Özel Hizmetlerimiz', 
        airport: {
            title: 'Havalimanı Transferleri', 
            description: 'Lüks Mercedes Vito araçlarımızla sorunsuz havalimanı karşılama ve bırakma hizmeti. Profesyonel sürücülerimiz uçuş durumunu takip eder ve uçuşunuz rötar yapsa bile sizi bekler.',
        },
        cityTours: {
            title: 'Özel Şehir Turları',
            description: 'Antalya ve çevresini kendi hızınızda, kişiye özel şehir turları ile keşfedin. Bilgili, yerel sürücümüzle gizli kalmış güzellikleri ve önemli turistik yerleri keşfedin.',
        },
        customRoutes: {
            title: 'Özel VIP Rotalar',
            description: 'Özel ihtiyaçlarınıza göre uyarlanmış kişiselleştirilmiş rotalarla mükemmel yolculuğunuzu tasarlayın. İster günübirlik bir gezi ister şehirlerarası ulaşım olsun, yanınızdayız.',
        },
    },
    vehicles: {
        title: 'Lüks Aracımız: Mercedes Vito',
        description: 'En üst düzey konfor ve şıklıkla seyahat edin. Mercedes Vito araçlarımız lüks deri koltuklar, klima kontrolü, ücretsiz WiFi, ikramlarla dolu minibar, renkli gizlilik camları ve geniş bagaj alanı gibi premium özelliklerle donatılmıştır.',
        interiorTitle: 'Araç İçi',
        exteriorTitle: 'Araç Dışı',
        interiorAlt: 'Mercedes Vito Lüks İç Mekan Görünümü',
        exteriorAlt: 'Mercedes Vito Dış Görünüm',
        enlarge: 'Büyütülmüş Görünüm',
        enlargedView: 'Büyütülmüş Görünüm', 
    },
      driver: {
        title: 'Profesyonel Sürücünüzle Tanışın: Abdullah Algül',
        bio: 'Abdullah Algül, Antalya Greenway Transfer\'in mükemmellik taahhüdünün temel taşıdır. Titizlikle seçilmiş, güvenlik kontrolünden geçirilmiş ve Antalya ile çevresinde yılların deneyimine sahiptir. Güvenli, dakik ve gizliliğe önem veren bir hizmet sunmaya adanmış, yolculuğunuzun sorunsuz ve keyifli geçmesini sağlar. İletişim ihtiyaçlarınızı karşılamak için talep üzerine birden fazla dil bilen sürücülerimiz mevcuttur.',
        alt: 'Abdullah Algül\'ün Profesyonel Vesikalık Fotoğrafı', // Updated alt text
      securityVetted: 'Güvenlik Kontrollü',
      experiencedPunctual: 'Deneyimli ve Dakik',
        multilingualAvailable: 'Çok Dilli Mevcut',
    },
    pricing: {
      title: 'Yolculuğunuz İçin Şeffaf Fiyatlandırma',
      tableHeadings: {
        destination: "Yön",
        oneWay: "Gidiş",
        roundTrip: "Gidiş-Dönüş",
      },
        oneWay: 'Gidiş', 
        roundTrip: 'Gidiş-Dönüş',
        tableData: [
            {
                direction: 'Antalya – Kundu',
                oneWay: '€30',
                roundTrip: '€40',
            },
            {
                direction: 'Belek',
                oneWay: '€40',
                roundTrip: '€50',
            },
            {
                direction: 'Side',
                oneWay: '€50',
                roundTrip: '€60',
            },
            {
                direction: 'K.Ağaç – Kızılot – Okurcalar',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Alanya', oneWay: '€65', roundTrip: '€75' },
            { direction: 'Mahmutlar – Kargıcak', oneWay: '€85', roundTrip: '€95' },
            { direction: 'Beldibi – Göynük – Kemer', oneWay: '€45', roundTrip: '€55' },
            {
                direction: 'Kiriş – Ç.Yuva – Tekirova',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Çıralı – Olympos – Adrasan', oneWay: '€65', roundTrip: '€75' },
        ],
        customQuotePrompt: 'Özel bir rotaya mı ihtiyacınız var? Kişiselleştirilmiş bir teklif için bizimle iletişime geçin.', // Message for quote prompt
        requestQuote: 'Özel Teklif İste', // Remove extra 's' at the begining
        requestQuoteMessage: 'Merhaba Antalya Greenway Transfer, özel bir VIP transfer teklifi almak istiyorum.', // Message for quote button
    }, 
    video: {
        title: 'Antalya Greenway Farkını Deneyimleyin',
    },
     contact: { 
        title: 'İletişime Geçin', 
        whatsapp: 'WhatsApp\'tan Yazın', 
        call: 'Bizi Arayın', 
        email: 'E-posta Gönderin', 
        availability: 'Ulaşım ihtiyaçlarınız için 7/24 hizmetinizdeyiz.', 
        whatsappMessage: 'Merhaba Antalya Greenway Transfer, hizmetleriniz hakkında bilgi almak istiyorum.', 
    },
    footer: {
        logoAlt: 'Antalya Greenway VIP Transfer Logosu', 
        quickLinks: 'Hızlı Bağlantılar', 
        legal: 'Yasal', 
        privacyPolicy: 'Gizlilik Politikası', 
        cookiePolicy: 'Çerez Politikası', 
        gdprInfo: 'KVKK Bilgilendirme', 
        contactInfo: 'İletişim Bilgileri', 
      phoneNumber: '+90 505 299 22 98', 
        emailAddress: 'antalyagreenwaytransfer@gmail.com', 
        allRightsReserved: 'Tüm Hakları Saklıdır.', 
    },
    flags: {
         de: '🇩🇪', 
         gb: '🇬🇧', 
         us: '🇺🇸', 
        tr: '🇹🇷', 
        ru: '🇷🇺', 
        sa: '🇸🇦', 
        ae: '🇦🇪', 
        qa: '🇶🇦', 
      }
  },
  ar: { // Directionality (RTL) should be handled in CSS/layout if needed
     navbar: {
        services: 'الخدمات',
        vehicles: 'المركبات',
     contact: 'اتصل بنا',
        bookNow: 'احجز الآن', // Added
    },

    hero: {
        title: 'خدمة أنطاليا غرين واي VIP للنقل',
        subtitle: 'استمتع براحة وأناقة لا مثيل لهما مع أنطاليا غرين واي ترانسفير.',
 bookNow: 'احجز الآن',
        bookNowMessage: 'مرحباً الجول ترانسفير، أود حجز خدمة نقل VIP.', 
    },
    testimonials: {
 title: 'ماذا يقول عملاؤنا',
        tripadvisorReview: 'مراجعة TripAdvisor',
        tripadvisorAlt: 'شعار TripAdvisor',
          reviews: {
              review1: 'خدمة ممتازة! دقة في المواعيد، سيارة نظيفة، وسائق محترف للغاية. موصى به بشدة لنقل المطار في أنطاليا.',
            review2: 'جعلت أنطاليا غرين واي ترانسفير جولتنا في المدينة لا تُنسى. كان السائق على دراية وودود. كانت سيارة الفيتو مريحة بشكل لا يصدق.',
            review3: 'أفضل خدمة نقل في أنطاليا. السيارات فاخرة جدا والسائقون مهذبون جدا. بالتأكيد سأستخدمها مرة أخرى.',
 review4: 'نقل موثوق ومريح. كان السائق مهذبًا جدًا وساعد في حمل الأمتعة. كانت الرحلة من المطار إلى كيمير ممتازة.',
            review5: 'خدمة راقية جداً وسائق محترم. السيارة كانت نظيفة ومريحة للغاية. أوصي بهم بشدة لأي شخص يزور أنطاليا.',
            review6: 'تجربة VIP من الدرجة الأولى. من الحجز إلى التوصيل، كان كل شيء سلسًا. مرسيدس فيتو هي رفاهية خالصة.',
            review7: 'خدمة موثوقة وودودة للغاية. كان تخطيط المسار المخصص مثاليًا لرحلتنا اليومية إلى باموكالي.',
            review8: 'أفضل خدمة نقل VIP جربتها في تركيا. كان السائق محترفاً والسيارة فاخرة جداً.',
            review9: 'يقدم عبدالله الجول خدمة استثنائية. الاهتمام بالتفاصيل ورعاية العملاء رائعان. حقًا VIP.', // Updated review text
        } 
    },
    services: {
        title: 'خدماتنا المتميزة',
        airport: {
            title: 'نقل المطار',
            description: 'خدمات استقبال وتوصيل سلسة من وإلى المطار في سيارات مرسيدس فيتو الفاخرة. يراقب السائقون المحترفون حالة الرحلة وينتظرونك، حتى لو تأخرت رحلتك.',
        },
        cityTours: {
            title: 'جولات سياحية خاصة في المدينة',
            description: 'استكشف أنطاليا والمناطق المحيطة بها بالسرعة التي تناسبك مع جولات المدينة المخصصة. اكتشف الجواهر الخفية والمعالم السياحية الرئيسية مع سائق محلي واسع المعرفة.',
        },
        customRoutes: {
            title: 'مسارات VIP مخصصة',
            description: 'صمم رحلتك المثالية مع مسارات مخصصة مصممة خصيصًا لتلبية احتياجاتك الخاصة. سواء كانت رحلة ليوم واحد أو النقل بين مدن متعددة، فنحن نوفر لك ما تحتاجه.',
        },
    },
    vehicles: {
        title: 'مركبتنا الفاخرة: مرسيدس فيتو', // Updated Title
        description: 'سافر بأقصى درجات الراحة والرقي. تم تجهيز سيارات مرسيدس فيتو الخاصة بنا بميزات فاخرة بما في ذلك مقاعد جلدية فخمة، وتحكم في المناخ، وخدمة WiFi مجانية، وميني بار مع المرطبات، وزجاج خصوصية ملون، ومساحة واسعة للأمتعة.',
        interiorTitle: 'داخل المركبة',
        exteriorTitle: 'خارج المركبة',
        interiorAlt: 'منظر داخلي فاخر لمرسيدس فيتو', 
        exteriorAlt: 'منظر خارجي لمرسيدس فيتو',
        enlarge: 'عرض مكبر',
        enlargedView: 'عرض مكبر', 
    },
      driver: {
 title: 'تعرف على سائقك المحترف: أنطاليا غرين واي', // Updated title
        bio: 'أنطاليا غرين واي ترانسفير هو حجر الزاوية في التزامنا بالتميز. يتم اختيار سائقينا بدقة، ويتم فحصهم أمنيًا، ويمتلكون سنوات من الخبرة في التنقل في أنطاليا والمناطق المحيطة بها. ملتزمون بتقديم خدمة آمنة ودقيقة وفي الوقت المحدد، مما يضمن أن تكون رحلتك سلسة وممتعة. تتوفر إمكانات متعددة اللغات عند الطلب لتلبية احتياجات الاتصال الخاصة بك.', // Updated bio
        alt: 'صورة شخصية احترافية لعبدالله الجول',
 securityVetted: 'تم فحصهم أمنيًا',
      experiencedPunctual: 'ذو خبرة ودقيق',
        multilingualAvailable: 'متعدد اللغات متاح',
    },
     pricing: {
      title: 'أسعار شفافة لرحلتك',
      tableHeadings: {
        destination: "الوجهة",
        oneWay: "ذهاب فقط",
        roundTrip: "ذهاب وعودة",
      },
        oneWay: 'Gidiş', 
        roundTrip: 'Gidiş-Dönüş',
        tableData: [
            {
                direction: 'Antalya – Kundu',
                oneWay: '€30',
                roundTrip: '€40',
            },
            {
                direction: 'Belek',
                oneWay: '€40',
                roundTrip: '€50',
            },
            {
                direction: 'Side',
                oneWay: '€50',
                roundTrip: '€60',
            },
            {
                direction: 'K.Ağaç – Kızılot – Okurcalar',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Alanya', oneWay: '€65', roundTrip: '€75' },
            { direction: 'Mahmutlar – Kargıcak', oneWay: '€85', roundTrip: '€95' },
            { direction: 'Beldibi – Göynük – Kemer', oneWay: '€45', roundTrip: '€55' },
            {
                direction: 'Kiriş – Ç.Yuva – Tekirova',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Çıralı – Olympos – Adrasan', oneWay: '€65', roundTrip: '€75' },
        ],
        customQuotePrompt: 'هل تحتاج إلى مسار مخصص؟ اتصل بنا للحصول على عرض أسعار شخصي.', // Message for quote prompt
        requestQuote: 'اطلب عرض أسعار مخصص', 
        requestQuoteMessage: 'مرحباً أنطاليا غرين واي ترانسفير، أود طلب عرض أسعار مخصص لنقل VIP.', // Message for quote button
    }, 
 video: {
 title: 'جرب فرق أنطاليا غرين واي',
    },
    contact: { 
        title: 'تواصل معنا', 
        whatsapp: 'الدردشة على WhatsApp', 
 call: 'اتصل بنا', 
        email: 'راسلنا عبر البريد الإلكتروني', 
 availability: 'متوفرون على مدار الساعة طوال أيام الأسبوع لتلبية احتياجات النقل الخاصة بك.', 
        whatsappMessage: 'مرحباً أنطاليا غرين واي ترانسفير، أود الاستفسار عن خدماتكم.', 
    }, 
     footer: {
        logoAlt: 'شعار أنطاليا غرين واي للنقل VIP', 
        quickLinks: 'روابط سريعة', 
        legal: 'قانوني', 
        privacyPolicy: 'سياسة الخصوصية', 
        cookiePolicy: 'سياسة ملفات تعريف الارتباط', 
        gdprInfo: 'معلومات GDPR', 
        contactInfo: 'معلومات الاتصال', 
        phoneNumber: '+90 505 299 22 98', 
        emailAddress: 'antalyagreenwaytransfer@gmail.com', 
        allRightsReserved: 'جميع الحقوق محفوظة.', 
    },
    flags: {
        de: '🇩🇪', 
        gb: '🇬🇧', 
        us: '🇺🇸', 
        tr: '🇹🇷', 
        ru: '🇷🇺', 
        sa: '🇸🇦', 
        ae: '🇦🇪', 
        qa: '🇶🇦', 
      }
  },
  ru: {
    navbar: {
     services: 'Услуги',
      vehicles: 'Автомобили',
      contact: 'Контакты',
     bookNow: 'ЗАБРОНИРОВАТЬ', // Added
      pricing: 'Цены',
    },
    hero: {
        title: 'Antalya Greenway VIP Трансфер',
        subtitle: 'Испытайте непревзойденный комфорт и стиль с Antalya Greenway Transfer.',
        bookNow: 'Забронировать сейчас',
        bookNowMessage: 'Здравствуйте, Antalya Greenway Transfer! Я хочу забронировать VIP-трансфер.', 
    },
     testimonials: {
      title: 'Что говорят наши клиенты',
        tripadvisorReview: 'Отзыв на TripAdvisor',
        tripadvisorAlt: 'Логотип TripAdvisor',
          reviews: {
              review1: 'Отличный сервис! Пунктуальный, чистый автомобиль и очень профессиональный водитель. Настоятельно рекомендуется для трансферов из аэропорта в Анталии.',
            review2: 'Antalya Greenway Transfer сделал нашу экскурсию по городу незабываемой. Водитель был знающим и дружелюбным. Vito был невероятно удобным.',
            review3: 'Лучший трансферный сервис в Анталии. Автомобили очень роскошные, а водители очень вежливые. Обязательно воспользуюсь снова.',
            review4: 'Надежный и комфортный трансфер. Водитель был очень вежливым и помог с багажом. Поездка из аэропорта в Кемер прошла отлично.',
            review5: 'Очень стильный сервис и респектабельный водитель. Машина была очень чистой и удобной. Настоятельно рекомендую их всем, кто посещает Анталию.',
            review6: 'Первоклассный VIP-опыт. От бронирования до высадки все было безупречно. Mercedes Vito - это чистая роскошь.',
            review7: 'Очень надежный и дружелюбный сервис. Индивидуальное планирование маршрута было идеальным для нашей однодневной поездки в Памуккале.',
            review8: 'Лучший VIP-трансфер, который я пробовал в Турции. Водитель был профессионалом, а машина очень роскошной.',
            review9: 'Абдулла Альгюль предоставляет исключительный сервис. Внимание к деталям и забота о клиентах выдающиеся. Поистине VIP.', // Updated review text
        } 
    },
    services: {
        title: 'Наши Премиум Услуги',
        airport: {
            title: 'Трансферы из/в аэропорт',
            description: 'Беспроблемные встречи и проводы в аэропорту на роскошных автомобилях Mercedes Vito. Профессиональные водители отслеживают статус рейса и ждут вас, даже если ваш рейс задерживается.',
        },
        cityTours: {
            title: 'Индивидуальные экскурсии по городу',
            description: 'Исследуйте Анталию и окрестности в своем собственном темпе с индивидуальными экскурсиями по городу. Откройте для себя скрытые жемчужины и главные достопримечательности со знающим местным водителем.',
        },
        customRoutes: {
            title: 'Индивидуальные VIP-маршруты',
            description: 'Создайте свое идеальное путешествие с индивидуальными маршрутами, адаптированными к вашим конкретным потребностям. Будь то однодневная поездка или транспорт между несколькими городами, мы всегда к вашим услугам.',
        },
    },
    vehicles: {
        title: 'Наш Роскошный Автомобиль: Mercedes Vito', // Updated Title
        description: 'Путешествуйте с максимальным комфортом и изысканностью. Наши автомобили Mercedes Vito оснащены премиальными функциями, включая роскошные кожаные сиденья, климат-контроль, бесплатный Wi-Fi, мини-бар с прохладительными напитками, тонированные стекла для конфиденциальности и достаточно места для багажа.',
        interiorTitle: 'Интерьер автомобиля',
        exteriorTitle: 'Экстерьер автомобиля',
        interiorAlt: 'Роскошный интерьер Mercedes Vito', 
        exteriorAlt: 'Внешний вид Mercedes Vito',
        enlarge: 'Увеличенный вид',
        enlargedView: 'Увеличенный вид', 
    },
      driver: {
        title: 'Познакомьтесь с вашим профессиональным водителем: Абдулла Альгюль', // Updated title
        bio: 'Абдулла Альгюль является краеугольным камнем приверженности Antalya Greenway Transfer к совершенству. Тщательно отобран, прошел проверку безопасности и имеет многолетний опыт навигации по Анталии и ее окрестностям. Предан обеспечению безопасного, пунктуального и конфиденциального обслуживания, гарантируя, что ваша поездка будет гладкой и приятной. По запросу доступны многоязычные возможности для удовлетворения ваших коммуникационных потребностей.', // Updated bio
        alt: 'Профессиональный портрет Абдуллы Альгюля',
      securityVetted: 'Проверен службой безопасности',
     experiencedPunctual: 'Опытный и пунктуальный',
        multilingualAvailable: 'Доступен многоязычный персонал',
    },
    pricing: {
      title: 'Прозрачные цены для вашей поездки',
      tableHeadings: {
        destination: "Направление",
        oneWay: "В одну сторону",
        roundTrip: "Туда и обратно",
      },
        oneWay: 'В одну сторону', 
        roundTrip: 'Туда и обратно',
        tableData: [
            {
                direction: 'Анталия – Кунду',
                oneWay: '€30',
                roundTrip: '€40',
            },
            {
                direction: 'Белек',
                oneWay: '€40',
                roundTrip: '€50',
            },
            {
                direction: 'Сиде',
                oneWay: '€50',
                roundTrip: '€60',
            },
            {
                direction: 'К.Агач – Кызылот – Окуркалар',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Аланья', oneWay: '€65', roundTrip: '€75' },
            { direction: 'Махмутлар – Каргыджак', oneWay: '€85', roundTrip: '€95' },
            { direction: 'Бельдиби – Гёйнюк – Кемер', oneWay: '€45', roundTrip: '€55' },
            {
                direction: 'Кириш – Ч.Юва – Текирова',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Чыралы – Олимпос – Адрасан', oneWay: '€65', roundTrip: '€75' },
        ],
        customQuotePrompt: 'Нужен индивидуальный маршрут? Свяжитесь с нами для получения персонального предложения.', // Message for quote prompt
        requestQuote: 'Запросить индивидуальное предложение', // Remove extra 's' at the begining
        requestQuoteMessage: 'Здравствуйте, Antalya Greenway Transfer! Я хотел бы запросить индивидуальное предложение на VIP-трансфер.', // Message for quote button
    }, 
    video: {
        title: 'Ощутите разницу с Antalya Greenway',
    },
    contact: { 
        title: 'Свяжитесь с нами', 
        whatsapp: 'Чат в WhatsApp', 
        call: 'Позвоните нам', 
        email: 'Напишите нам', 
        availability: 'Доступны круглосуточно для ваших транспортных нужд.', 
        whatsappMessage: 'Здравствуйте, Antalya Greenway Transfer! Я хотел бы узнать о ваших услугах.', 
    }, 
     footer: {
        logoAlt: 'Логотип Antalya Greenway VIP Transfers', 
        quickLinks: 'Быстрые ссылки', 
        legal: 'Правовая информация', 
        privacyPolicy: 'Политика конфиденциальности', 
        cookiePolicy: 'Политика использования файлов cookie', 
        gdprInfo: 'Информация GDPR', 
        contactInfo: 'Контактная информация', 
        phoneNumber: '+90 505 299 22 98', 
        emailAddress: 'antalyagreenwaytransfer@gmail.com', 
        allRightsReserved: 'Все права защищены.', 
    },
     flags: {
        de: '🇩🇪', 
        gb: '🇬🇧', 
        us: '🇺🇸', 
        tr: '🇹🇷', 
        ru: '🇷🇺', 
        sa: '🇸🇦', 
        ae: '🇦🇪', 
        qa: '🇶🇦', 
      }
  },
  de: {
     navbar: {
      services: 'Dienstleistungen',
      vehicles: 'Fahrzeuge',
      contact: 'Kontakt',
     pricing: 'Preise',
        bookNow: 'JETZT BUCHEN', // Added
    },
    hero: {
        title: 'Antalya Greenway VIP Transfer',
        subtitle: 'Erleben Sie unvergleichlichen Komfort und Stil mit Antalya Greenway Transfer.',
        bookNow: 'Jetzt Buchen',
        bookNowMessage: 'Hallo Antalya Greenway Transfer, ich möchte einen VIP-Transfer buchen.', 
    },
    testimonials: {
      title: 'Was unsere Kunden sagen',
        tripadvisorReview: 'TripAdvisor Bewertung',
        tripadvisorAlt: 'TripAdvisor-Logo',
          reviews: {
              review1: 'Exzellenter Service! Pünktlich, sauberes Fahrzeug und sehr professioneller Fahrer. Sehr empfehlenswert für Flughafentransfers in Antalya.',
            review2: 'Antalya Greenway Transfer hat unsere Stadtrundfahrt unvergesslich gemacht. Der Fahrer war kenntnisreich und freundlich. Der Vito war unglaublich komfortabel.',
            review3: 'Der beste Transferservice in Antalya. Fahrzeuge sind sehr luxuriös und Fahrer sehr höflich. Werde es definitiv wieder benutzen.',
            review4: 'Zuverlässiger und komfortabler Transfer. Der Fahrer war sehr höflich und half mit dem Gepäck. Die Fahrt vom Flughafen nach Kemer war ausgezeichnet.',
            review5: 'Sehr klassischer Service und ein respektabler Fahrer. Das Auto war sehr sauber und komfortabel. Ich kann sie jedem wärmstens empfehlen, der Antalya besucht.',
            review6: 'Erstklassiges VIP-Erlebnis. Von der Buchung bis zur Abgabe verlief alles reibungslos. Der Mercedes Vito ist purer Luxus.',
            review7: 'Sehr zuverlässiger und freundlicher Service. Die individuelle Routenplanung war perfekt für unseren Tagesausflug nach Pamukkale.',
            review8: 'Der beste VIP-Transferservice, den ich in der Türkei ausprobiert habe. Der Fahrer war professionell und das Auto war sehr luxuriös.',
            review9: 'Abdullah Algül bietet einen außergewöhnlichen Service. Die Liebe zum Detail und die Kundenbetreuung sind hervorragend. Wirklich VIP.', // Updated review text
        } 
    },
    services: {
        title: 'Unsere Premium-Dienstleistungen',
        airport: {
            title: 'Flughafentransfers',
            description: 'Nahtlose Abholung und Rückgabe am Flughafen in luxuriösen Mercedes Vito Fahrzeugen. Professionelle Fahrer überwachen den Flugstatus und warten auf Sie, auch wenn Ihr Flug Verspätung hat.',
        },
        cityTours: {
            title: 'Private Stadtrundfahrten',
            description: 'Erkunden Sie Antalya und die Umgebung in Ihrem eigenen Tempo mit maßgeschneiderten Stadtrundfahrten. Entdecken Sie versteckte Juwelen und wichtige Sehenswürdigkeiten mit einem sachkundigen, lokalen Fahrer.',
        },
        customRoutes: {
            title: 'Individuelle VIP-Routen',
            description: 'Gestalten Sie Ihre perfekte Reise mit maßgeschneiderten Routen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind. Ob Tagesausflug oder Transport zwischen mehreren Städten, wir sind für Sie da.',
        },
    },
    vehicles: {
        title: 'Unser Luxusfahrzeug: Mercedes Vito', // Updated Title
        description: 'Reisen Sie mit höchstem Komfort und Eleganz. Unsere Mercedes Vito Fahrzeuge sind mit Premium-Funktionen ausgestattet, darunter luxuriöse Ledersitze, Klimaanlage, kostenloses WLAN, eine Minibar mit Erfrischungen, getönte Sichtschutzverglasung und ausreichend Platz für Gepäck.',
        interiorTitle: 'Fahrzeug Innenraum',
        exteriorTitle: 'Fahrzeug Außenansicht',
        interiorAlt: 'Luxuriöse Innenansicht des Mercedes Vito', 
        exteriorAlt: 'Außenansicht des Mercedes Vito',
        enlarge: 'Vergrößerte Ansicht',
        enlargedView: 'Vergrößerte Ansicht', 
    },
      driver: {
        title: 'Treffen Sie Ihren professionellen Fahrer: Abdullah Algül', // Updated title
        bio: 'Abdullah Algül ist der Eckpfeiler des Engagements von Antalya Greenway Transfer für Exzellenz. Sorgfältig ausgewählt, sicherheitsüberprüft und mit jahrelanger Erfahrung in der Navigation durch Antalya und Umgebung. Engagiert für einen sicheren, pünktlichen und diskreten Service, der sicherstellt, dass Ihre Reise reibungslos und angenehm verläuft. Mehrsprachige Fähigkeiten auf Anfrage verfügbar, um Ihren Kommunikationsbedürfnissen gerecht zu werden.', // Updated bio
        alt: 'Professionelles Porträtfoto von Abdullah Algül',
      securityVetted: 'Sicherheitsüberprüft',
      experiencedPunctual: 'Erfahren & Pünktlich',
        multilingualAvailable: 'Mehrsprachig Verfügbar',
    },
    pricing: {
      title: 'Transparente Preise für Ihre Reise',
      tableHeadings: {
        destination: "Richtung",
        oneWay: "Einfach",
        roundTrip: "Hin- und Rückfahrt",
      },
        oneWay: 'Einfach', 
        roundTrip: 'Hin- und Rückfahrt',
        tableData: [
            {
                direction: 'Antalya – Kundu',
                oneWay: '€30',
                roundTrip: '€40',
            },
            {
                direction: 'Belek',
                oneWay: '€40',
                roundTrip: '€50',
            },
            {
                direction: 'Side',
                oneWay: '€50',
                roundTrip: '€60',
            },
            {
                direction: 'K.Ağaç – Kızılot – Okurcalar',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Alanya', oneWay: '€65', roundTrip: '€75' },
            { direction: 'Mahmutlar – Kargıcak', oneWay: '€85', roundTrip: '€95' },
            { direction: 'Beldibi – Göynük – Kemer', oneWay: '€45', roundTrip: '€55' },
            {
                direction: 'Kiriş – Ç.Yuva – Tekirova',
                oneWay: '€55',
                roundTrip: '€65',
            },
            { direction: 'Çıralı – Olympos – Adrasan', oneWay: '€65', roundTrip: '€75' },
        ],
        customQuotePrompt: 'Benötigen Sie eine individuelle Route? Kontaktieren Sie uns für ein persönliches Angebot.', // Message for quote prompt
        requestQuote: 'Individuelles Angebot Anfordern', // Remove extra 's' at the begining
        requestQuoteMessage: 'Hallo Antalya Greenway Transfer, ich möchte ein individuelles Angebot für einen VIP-Transfer anfordern.', // Message for quote button
    }, 
     video: {
        title: 'Erleben Sie den Antalya Greenway-Unterschied',
    },
    contact: { 
        title: 'Kontaktieren Sie uns', 
        whatsapp: 'Chat auf WhatsApp', 
        call: 'Rufen Sie uns an', 
        email: 'Senden Sie uns eine E-Mail', 
        availability: 'Rund um die Uhr für Ihre Transportbedürfnisse verfügbar.', 
        whatsappMessage: 'Hallo Antalya Greenway Transfer, ich möchte mich nach Ihren Dienstleistungen erkundigen.', 
    }, 
    footer: {
        logoAlt: 'Antalya Greenway VIP Transfers Logo', 
        quickLinks: 'Schnelllinks', 
        legal: 'Rechtliches', 
        privacyPolicy: 'Datenschutzrichtlinie', 
        cookiePolicy: 'Cookie-Richtlinie', 
        gdprInfo: 'DSGVO Informationen', 
        contactInfo: 'Kontaktinformationen', 
        phoneNumber: '+90 505 299 22 98', 
        emailAddress: 'antalyagreenwaytransfer@gmail.com', 
        allRightsReserved: 'Alle Rechte vorbehalten.', 
    },
    flags: {
        de: '🇩🇪', 
        gb: '🇬🇧', 
        us: '🇺🇸', 
        tr: '🇹🇷', 
        ru: '🇷🇺', 
        sa: '🇸🇦', 
        ae: '🇦🇪', 
        qa: '🇶🇦', 
      }
  },
};

// Function to get translated link text for vehicles 


// Function to get translated link text for vehicles
export const getVehicleLinkText = (language: LanguageCode): string => {
 const vehicleTitle = translations[language]?.vehicles?.title || translations.en.vehicles.title;
 // Split the title by ':' or use the full title if no ':' exists
 return vehicleTitle.split(':')[0] || vehicleTitle;
};
