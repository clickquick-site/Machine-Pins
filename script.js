const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Tajawal:wght@500;800&display=swap');
            body { background: #f4f7f6; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; }
            .container { width: 100%; max-width: 500px; margin: 0 auto; background: white; min-height: 100vh; box-shadow: 0 0 20px rgba(0,0,0,0.05); }
            
            /* تنسيق النصوص الجديدة المطلوبة */
            .target-audience { font-family: 'Tajawal', sans-serif; color: #2d3436; font-size: 1.3rem; font-weight: 800; margin: 15px 0 5px 0; line-height: 1.4; }
            .brand-name { color: #0984e3; font-size: 2rem; font-weight: 900; margin: 0; letter-spacing: 1px; }
            .solution-text { color: #636e72; font-size: 1.2rem; font-weight: 700; margin-bottom: 15px; }

            @keyframes policeSiren { 
                0% { color: #ff0000; text-shadow: 0 0 8px #ff0000; } 
                50% { color: #0000ff; text-shadow: 0 0 12px #0000ff; } 
                100% { color: #ff0000; text-shadow: 0 0 8px #ff0000; }
            }
            .price-row { display: flex; align-items: center; justify-content: center; gap: 12px; white-space: nowrap; margin: 10px 0; }
            .price-tag { color: #e63946; font-size: 3rem; font-weight: 900; margin: 0; }
            .siren { animation: policeSiren 0.5s infinite; font-size: 2rem; }
            
            .form-box { padding: 20px 25px; }
            .input-item { width: 100%; padding: 16px; margin-bottom: 12px; border: 1.5px solid #ddd; border-radius: 12px; font-family: 'Cairo'; font-size: 1.1rem; box-sizing: border-box; }
            .btn-confirm { width: 100%; padding: 20px; background: #e63946; color: white; border: none; border-radius: 12px; font-size: 1.6rem; font-weight: 900; cursor: pointer; box-shadow: 0 6px 15px rgba(230,57,70,0.3); }
        </style>

        <div class="container" id="page-card">
            <div style="padding: 25px 15px; text-align: center;">
                <h3 style="color: #636e72; margin-bottom: 0px; font-weight: 400;">آلة صنع الشارات الاحترافية</h3>
                <h1 style="color: #000; font-size: 2.8rem; font-weight: 900; margin: 0;">Machine PIN'S</h1>
                
                <div style="margin: 20px 0; padding: 10px; border-bottom: 1px solid #eee; border-top: 1px solid #eee;">
                    <div class="target-audience">أصحاب المشاريع المصغرة وأصحاب المشاريع المصغرة</div>
                    <div class="brand-name">CLICK-QUICK</div>
                    <div class="solution-text">جابتلكم الحل</div>
                </div>

                <p style="color: #e63946; font-weight: 900; margin: 10px 0;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="background: #fffafa; border: 2px dashed #e63946; padding: 20px; border-radius: 20px;">
                    <span style="text-decoration: line-through; color: #b2bec3; font-size: 1.3rem;">25,000 دج</span>
                    <div class="price-row">
                        <span class="siren">🚨</span>
                        <h2 class="price-tag">24,300 دج</h2>
                        <span class="siren">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #ffebeb; margin-top: 15px; padding-top: 10px;">
                        <h4 style="color: #27ae60; margin: 0; font-size: 1.8rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #27ae60; font-weight: 900; margin: 5px 0; font-size: 1.2rem;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="form-box">
                <input type="text" id="f_name" class="input-item" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="f_phone" inputmode="numeric" class="input-item" placeholder="رقم الهاتف *">
                
                <select id="f_offer" class="input-item">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="f_wilaya" class="input-item">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="f_address" class="input-item" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin-bottom: 8px;">وسيلة التوصيل:</p>
                <select id="f_delivery" class="input-item" style="border: 2px solid #e63946; color: #e63946; font-weight: 900;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <button onclick="submitOrder()" id="btn-sub" class="btn-confirm">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function submitOrder() {
    const data = {
        name: document.getElementById('f_name').value.trim(),
        phone: document.getElementById('f_phone').value.trim(),
        offer: document.getElementById('f_offer').value,
        wilaya: document.getElementById('f_wilaya').value,
        address: document.getElementById('f_address').value.trim(),
        delivery: document.getElementById('f_delivery').value
    };

    if(!data.name || !data.phone || !data.wilaya || !data.address) return alert("يرجى ملء كافة الخانات");

    const btn = document.getElementById('btn-sub');
    btn.disabled = true; btn.innerText = "جاري الإرسال...";

    try {
        const res = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [data] })
        });
        if(res.ok) {
            document.getElementById('page-card').innerHTML = `<div style="padding: 100px 20px; text-align: center;"><h2>✅ تم الطلب بنجاح!</h2><p>سنتصل بك قريباً.</p></div>`;
        } else throw new Error();
    } catch (e) {
        alert("خطأ، حاول مرة أخرى");
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}
document.addEventListener('DOMContentLoaded', displayPage);
