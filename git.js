// 1. 🕵️‍♂️ صيادو الإمساك في أعلى الملف (مطابقين لـ الـ IDs والـ كلاسات بملف الـ HTML تبعكِ!)
const Searchbtn = document.querySelector("#ss button"); // صياد الزر جوات فورم ss
const InputUser = document.querySelector("#search-input"); // صياد بوكس الإدخال تبعكِ
const ImageUser = document.querySelector("#git"); // صياد الصورة الشخصية
const Repose = document.querySelector(".repos-num"); // صياد رقم الـ Repos المعزول
const folloeing = document.querySelector(".following-num"); // صياد رقم الـ Following
const followers = document.querySelector(".followers-num"); // صياد رقم الـ Followers
const form = document.querySelector("#ss"); // صياد الفورم تبعكِ المحمي بالـ ID
const status = document.querySelector("#search-status"); // صياد نص الحالة والتحذير بالأسفل

// 2. 🕹️ الجاسوس الإداري (يستمع ويقفل الريفريش وينادي الدالة)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // 👈 فرام منع ريفريش الصفحة
    const userName = InputUser.value.trim();
    
    if (userName !== "") {
        getUserData(userName); // طيران للدالة بالأسفل
    } else {
        status.textContent = "Please enter a GitHub username.";
    }
}); // 👈 قفل قوس الجاسوس الصارم الممسوخ بالـ );

// 3. 🌐 دالة السفر والـ API (السهلة والصافية جداً بدون أي تعقيد!)
async function getUserData(userName) {
    status.textContent = "Searching..."; // نص مساعد مؤقت أثناء جلب البيانات
    
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    
    // 🚀 الضربة القاضية: قذف البيانات الحية داخل تاغات الـ HTML تبعكِ بالمليمتر!
    ImageUser.src = data.avatar_url; // تحديث الصورة
    document.querySelector("#ii").textContent = data.name || data.login; // تحديث الاسم العريض
    document.querySelector("#username").textContent = `@${data.login}`; // تحديث اسم اليوزر بالـ @
    document.querySelector("#uou").textContent = `Joined ${new Date(data.created_at).toLocaleDateString()}`; // تحديث تاريخ الانضمام
    document.querySelector("#hoho").textContent = data.bio || "This profile has no bio"; // تحديث الـ Bio
    
    // قذف بوكس الأرقام الثلاثة المعزولين
    Repose.textContent = data.public_repos;
    followers.textContent = data.followers;
    folloeing.textContent = data.following;
    
    // تحديث روابط الاتصال والأيقونات بالأسفل
    document.querySelector("#location").textContent = data.location || "Not available";
    document.querySelector("#not").textContent = data.twitter_username ? `@${data.twitter_username}` : "Not available";
    document.querySelector("#ll").textContent = data.blog || "Not available";
    document.querySelector("#buil").textContent = data.company || "Not available";
    
    status.textContent = ""; // تصفية نص البحث بعد النجاح
}