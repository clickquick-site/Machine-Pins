const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Tajawal:wght@500;800;900&display=swap');
            
            body { background: #fdfdfd; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; overflow-x: hidden; }
            .main-container { width: 100%; max-width: 480px; margin: 0 auto; background: white; min-height: 100vh; box-shadow: 0 0 15px rgba(0,0,0,0.1); overflow: hidden; }
            
            .header-black { background: #000; color: #fff; padding: 12px; text-align: center; font-size: 1.5rem; font-weight: 900; }

            .content-section { padding: 20px 10px; text-align: center; }
            .top-title { font-size: 1.4rem; font-weight: 700; color: #444; margin: 0; white-space: nowrap; }
            .machine-title { font-size: 2.8rem; font-weight: 900; color: #e63946; margin: 5px 0; white-space: nowrap; }

            /* إطار المشاريع الذهبي - دقة عالية */
            .gold-box { 
                border: 2px solid #d4af37; border-radius: 12px; padding: 10px; margin: 15px auto;
                background: #fffcf0; width: 90%; box-sizing: border-box;
            }
            .gold-box p { font-family: 'Tajawal', sans-serif; font-size: 1.25rem; font-weight: 800; color: #856404; margin: 4px 0; white-space: nowrap; }

            .brand-blue { font-size: 2.4rem; font-weight: 900; color: #007bff; margin: 10px 0 0 0; }
            .solution-green { font-size: 1.5rem; font-weight: 800; color: #28a745; margin-bottom: 20px; }

            /* الوميض والسعر - خط مستقيم متناسق */
            @keyframes policeFlash { 
                0% { color: #ff0000; text-shadow: 0 0 5px red; }
                50% { color: #0000ff; text-shadow: 0 0 15px blue; }
                100% { color: #ff0000; text-shadow: 0 0 5px red; }
            }
            @keyframes pricePulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.03); }
            }

            .price-wrapper { border: 2px dashed #e63946; border-radius: 15px; padding: 15px; margin: 0 10px; background: #fffafa; }
            .price-line { display: flex; align-items: center; justify-content: center; gap: 8px; margin: 5px 0; }
            .price-text { color: #e63946; font-size: 3rem; font-weight: 900; margin: 0; animation: pricePulse 0.5s infinite; }
            .siren-icon { animation: policeFlash 0.3s infinite; font-size: 2.2rem; line-height: 1; }

            .form-container { padding: 20px; }
            .input-field { width: 100%; padding: 15px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 8px; font-family: 'Cairo'; font-size: 1.1rem; box-sizing: border-box; }
            .delivery-select { border: 2px solid #e63946 !important; color: #e63946; font-weight: 900; }
            .footer-note { font-family: 'Tajawal', sans-serif; font-weight: 900; font-size: 1.3rem; color: #333; text-align: center; margin: 15px 0; }
            .btn-order { width: 100%; padding: 20px; background: #e63946; color: white; border: none; border-radius: 12px; font-size: 1.7rem; font-weight: 900; cursor: pointer; }
        </style>

        <div class="main-container" id="main-view">
            <div class="header-black">🇩🇿 Click-Quick 🇩🇿</div>

            <div class="content-section">
                <div class="top-title">آلة صناعة الشارات الإحترافية</div>
                <h1 class="machine-title">Machine Pin's</h1>
                
                <div class="gold-box">
                    <p>أصحاب المشاريع المصغرة</p>
                    <p>وأصحاب المشاريع المنزلية</p>
                </div>

                <div class="brand-blue">CLICK QUICK</div>
                <div class="solution-green">جابتلكم الحل 💡</div>

                <div class="price-wrapper">
                    <span style="text-decoration: line-through; color: #bbb; font-size: 1.2rem;">25,000 دج</span>
                    <div class="price-line">
                        <span class="siren-icon">🚨</span>
                        <h2 class="price-text">24,300 دج</h2>
                        <span class="siren-icon">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #eee; margin-top: 8px; padding-top: 8px;">
                        <h4 style="color: #28a745; margin: 0; font-size: 1.6rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #28a745; font-weight: 800; margin: 5px 0;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="form-container">
                <input type="text" id="f_name" class="input-field" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="f_phone" inputmode="numeric" class="input-field" placeholder="رقم الهاتف (أرقام فقط) *">
                
                <select id="f_offer" class="input-field">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="f_wilaya" class="input-field">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="f_address" class="input-field" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin: 10px 0 5px 0;">وسيلة التوصيل:</p>
                <select id="f_delivery" class="input-field delivery-select">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <div class="footer-note">ملاحظة: الدفع عند الإستلام</div>

                <button onclick="sendOrder()" id="btn-submit" class="btn-order">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function sendOrder() {
    const data = {
        name: document.getElementById('f_name').value.trim(),
        phone: document.getElementById('f_phone').value.trim(),
        offer: document.getElementById('f_offer').value,
        wilaya: document.getElementById('f_wilaya').value,
        address: document.getElementById('f_address').value.trim(),
        delivery: document.getElementById('f_delivery').value
    };

    if(!data.name || !data.phone || !data.wilaya || !data.address) return alert("يرجى ملء جميع البيانات الإلزامية");

    const btn = document.getElementById('btn-submit');
    btn.disabled = true; btn.innerText = "جاري التأكيد...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [data] })
        });
        if(response.ok) {
            document.getElementById('main-view').innerHTML = `<div style="padding: 100px 20px; text-align: center;"><h2>✅ تم استلام طلبك!</h2><p>سنتصل بك قريباً لتأكيد الشحن.</p></div>`;
        } else throw new Error();
    } catch (e) {
        alert("فشل في الإرسال، تحقق من الإنترنت");
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
