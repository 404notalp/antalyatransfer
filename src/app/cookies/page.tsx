'use client';
import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';

const CookiePolicyPage: React.FC = () => {
  const { language } = useLanguage();
   // Basic content - replace with your actual cookie policy text
   const policyContent: Record<string, { title: string, content: React.ReactNode }> = {
    en: {
      title: 'Cookie Policy',
      content: (
        <>
          <p>This Cookie Policy explains how Algul VIP Transfers ("we", "us", or "our") uses cookies and similar technologies on our website.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">What Are Cookies?</h3>
          <p>Cookies are small text files stored on your device (computer, tablet, mobile) when you visit certain websites. They help websites remember information about your visit, like your preferred language and other settings.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">How We Use Cookies</h3>
          <p>We use cookies for various purposes, including:</p>
          <ul className="list-disc pl-6">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly (e.g., managing your session).</li>
            <li><strong>Performance Cookies:</strong> To analyze how visitors use our website and monitor performance (e.g., Google Analytics).</li>
            <li><strong>Functionality Cookies:</strong> To remember choices you make (like language preference) and provide enhanced features.</li>
            {/* Add Marketing/Targeting cookies if applicable */}
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">Managing Cookies</h3>
          <p>Most web browsers allow you to control cookies through their settings preferences. You can set your browser to block or alert you about these cookies, but some parts of the site may not work then.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Changes to This Policy</h3>
          <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
           <p className="mt-4">Last updated: [Insert Date]</p>
        </>
      ),
    },
     tr: {
      title: 'Çerez Politikası',
      content: (
        <>
          <p>Bu Çerez Politikası, Algul VIP Transfer ("biz", "bize" veya "bizim") web sitemizde çerezleri ve benzer teknolojileri nasıl kullandığını açıklar.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Çerezler Nedir?</h3>
          <p>Çerezler, belirli web sitelerini ziyaret ettiğinizde cihazınızda (bilgisayar, tablet, mobil) saklanan küçük metin dosyalarıdır. Web sitelerinin ziyaretinizle ilgili tercih ettiğiniz dil ve diğer ayarlar gibi bilgileri hatırlamasına yardımcı olurlar.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Çerezleri Nasıl Kullanıyoruz</h3>
          <p>Çerezleri aşağıdakiler de dahil olmak üzere çeşitli amaçlarla kullanırız:</p>
           <ul className="list-disc pl-6">
            <li><strong>Temel Çerezler:</strong> Web sitesinin düzgün çalışması için gereklidir (ör. oturumunuzu yönetmek).</li>
            <li><strong>Performans Çerezleri:</strong> Ziyaretçilerin web sitemizi nasıl kullandığını analiz etmek ve performansı izlemek için (ör. Google Analytics).</li>
            <li><strong>İşlevsellik Çerezleri:</strong> Yaptığınız seçimleri (dil tercihi gibi) hatırlamak ve gelişmiş özellikler sağlamak için.</li>
            {/* Varsa Pazarlama/Hedefleme çerezlerini ekleyin */}
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">Çerezleri Yönetme</h3>
          <p>Çoğu web tarayıcısı, ayar tercihleri aracılığıyla çerezleri kontrol etmenize olanak tanır. Tarayıcınızı bu çerezleri engelleyecek veya sizi uyaracak şekilde ayarlayabilirsiniz, ancak sitenin bazı bölümleri çalışmayabilir.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Bu Politikadaki Değişiklikler</h3>
          <p>Bu Çerez Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişikliği bu sayfada yeni Çerez Politikasını yayınlayarak size bildireceğiz.</p>
           <p className="mt-4">Son güncelleme: [Tarih Ekleyin]</p>
        </>
      ),
    },
     // Add translations for other languages (ar, ru, de) here
      ar: {
      title: 'سياسة ملفات تعريف الارتباط',
      content: (
           // Add Arabic translation
           <p>[Arabic Cookie Policy Content Here]</p>
      ),
    },
     ru: {
      title: 'Политика использования файлов cookie',
      content: (
          // Add Russian translation
          <p>[Russian Cookie Policy Content Here]</p>
      ),
    },
      de: {
      title: 'Cookie-Richtlinie',
      content: (
           // Add German translation
            <p>[German Cookie Policy Content Here]</p>
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

export default CookiePolicyPage;
