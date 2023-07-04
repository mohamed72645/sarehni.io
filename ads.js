(function() {
    var adContainer = document.getElementById("ad-container"); // قم بتحديد معرف العنصر الذي تريد عرض الإعلان فيه
  
    if (!adContainer) {
      console.error("لم يتم العثور على عنصر الإعلان.");
      return;
    }
  
    // استبدل 'YOUR_AD_CLIENT' برمز عميل الإعلان الخاص بك من Google AdSense
    var adClient = '7465157167';
  
    // استبدل 'YOUR_AD_SLOT' بوحدة الإعلان الخاصة بك من Google AdSense
    var adSlot = 'YOUR_AD_SLOT';
  
    // إنشاء عنصر إعلان جديد
    var ad = document.createElement('ins');
    ad.className = 'adsbygoogle';
    ad.style.display = 'block';
    ad.style.textAlign = 'center';
  
    // تعيين معلومات الإعلان
    ad.setAttribute('data-ad-client', adClient);
    ad.setAttribute('data-ad-slot', adSlot);
    ad.setAttribute('data-ad-format', 'auto');
    ad.setAttribute('data-full-width-responsive', 'true');
  
    // إضافة الإعلان إلى عنصر العرض
    adContainer.appendChild(ad);
  
    // إعادة تحميل الإعلانات بعد تحميل الصفحة
    (adsbygoogle = window.adsbygoogle || []).push({});
  })();
  