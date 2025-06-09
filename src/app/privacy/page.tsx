'use client';
import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';

const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();
  // Basic content - replace with your actual privacy policy text
  const policyContent: Record<string, { title: string, content: React.ReactNode }> = {
    en: {
      title: 'Privacy Policy',
      content: (
        <>
          <p>This Privacy Policy describes how Algul VIP Transfers ("we", "us", or "our") collects, uses, and discloses your personal information when you use our website and services.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Information We Collect</h3>
          <p>We may collect personal information such as your name, contact details (email, phone number), flight details, pickup/drop-off locations, and payment information when you make a booking or inquiry.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">How We Use Your Information</h3>
          <p>We use your information to provide and manage our transfer services, process payments, communicate with you about your booking, and improve our services. We may also use your information for marketing purposes with your consent.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Your Rights</h3>
          <p>You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <p className="mt-4">Last updated: [Insert Date]</p>
        </>
      ),
    },
    tr: {
      title: 'Gizlilik Politikası',
      content: (
        <>
          <p>Bu Gizlilik Politikası, Algul VIP Transfer ("biz", "bize" veya "bizim") web sitemizi ve hizmetlerimizi kullandığınızda kişisel bilgilerinizi nasıl topladığını, kullandığını ve ifşa ettiğini açıklar.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Topladığımız Bilgiler</h3>
          <p>Rezervasyon veya sorgulama yaptığınızda adınız, iletişim bilgileriniz (e-posta, telefon numarası), uçuş bilgileriniz, alma/bırakma konumlarınız ve ödeme bilgileriniz gibi kişisel bilgileri toplayabiliriz.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Bilgilerinizi Nasıl Kullanıyoruz</h3>
          <p>Bilgilerinizi transfer hizmetlerimizi sağlamak ve yönetmek, ödemeleri işlemek, rezervasyonunuz hakkında sizinle iletişim kurmak ve hizmetlerimizi iyileştirmek için kullanırız. Onayınızla bilgilerinizi pazarlama amacıyla da kullanabiliriz.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Veri Güvenliği</h3>
          <p>Kişisel bilgilerinizi yetkisiz erişime, değiştirilmeye, ifşa edilmeye veya yok edilmeye karşı korumak için uygun güvenlik önlemleri uygularız.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Haklarınız</h3>
          <p>Kişisel bilgilerinize erişme, düzeltme veya silme hakkına sahipsiniz. Bu haklarınızı kullanmak isterseniz lütfen bizimle iletişime geçin.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Bu Politikadaki Değişiklikler</h3>
          <p>Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişikliği bu sayfada yeni Gizlilik Politikasını yayınlayarak size bildireceğiz.</p>
          <p className="mt-4">Son güncelleme: [Tarih Ekleyin]</p>
        </>
      ),
    },
    // Add translations for other languages (ar, ru, de) here
    ar: {
      title: 'سياسة الخصوصية',
      content: (
          // Add Arabic translation
          <p>[Arabic Privacy Policy Content Here]</p>
      ),
    },
     ru: {
      title: 'Политика конфиденциальности',
      content: (
          // Add Russian translation
           <p>[Russian Privacy Policy Content Here]</p>
      ),
    },
      de: {
      title: 'Datenschutzrichtlinie',
      content: (
          // Add German translation
           <p>[German Privacy Policy Content Here]</p>
      ),
    },
  };

  const currentPolicy = policyContent[language] || policyContent.en; // Fallback to English

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20"> {/* Added mt-20 for navbar offset */}
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">{currentPolicy.title}</h1>
      <div className="prose prose-invert max-w-none text-foreground/90"> {/* Use prose for basic styling */}
        {currentPolicy.content}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
