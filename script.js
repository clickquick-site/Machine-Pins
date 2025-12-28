const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Tajawal:wght@500;800;900&display=swap');
            
            body { background: #f0f2f5; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; overflow-x: hidden; }
            .main-wrapper { width: 100%; max-width: 450px; margin: 0 auto; background: white; min-height: 100vh; position: relative; }
            
            .top-black-bar { background: #000; color: white; padding: 15px; text-align: center; font-size: 1.6rem; font-weight: 900; }

            .content-header { padding: 20px 15px; text-align: center; }
            .title-straight { font-size: 1.6rem; font-weight: 800; color: #444; margin: 10px 0; white-space: nowrap; }
            .machine-name-red { font-size: 2.8rem; font-weight: 900; color: #e63946; margin: 5px 0; }

            /* الإطار الذهبي الثابت */
            .gold-frame-box { 
                border: 2px solid #d4af37; border-radius: 12px; padding: 12px; margin: 15px auto;
                background: #fffcf0; max-width: 90%;
            }
            .gold-frame-box p { font-family: 'Tajawal', sans-serif; font-size: 1.3rem; font-weight: 800; color: #856404; margin: 5px 0; white-space: nowrap; }

            .brand-click { font-size: 2.5rem; font-weight: 900; color: #007bff; margin-top: 10px; }
            .solution-text { font-size: 1.5rem; font-weight: 800; color: #28a745; margin-bottom: 20px; }

            /* الوميض الشرطي (الحركة الوحيدة مع السعر) */
            @keyframes policeSiren { 
                0% { filter: drop-shadow(0 0 5px red); transform: scale(1); }
                50% { filter: drop-shadow(0 0 20px blue); transform: scale(1.2); }
                100% { filter: drop-shadow(0 0 5px red); transform: scale(1); }
            }
            @keyframes pricePulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }

            .price-section { border: 2px dashed #e63946; border-radius: 15px; padding: 15px; margin: 0 15px; background: #fffafa; }
            .price-display { display: flex; align-items: center; justify-content: center; gap: 10px; margin: 10px 0; }
            .price-num { color: #e63946; font-size: 3.2rem; font-weight: 900; margin: 0; animation: pricePulse 0.5s infinite; }
            .siren-emoji { animation: policeSiren 0.4s infinite; font-size: 2.2rem; }

            .form-area { padding: 20px; }
            .input-style { width: 100%; padding: 15px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 10px; font-family: 'Cairo'; font-size: 1.1rem; box-sizing: border-box; }
            .delivery-box { border: 2px solid #e63946; color: #e63946; font-weight: 900; }
            .pay-note-final { font-family: 'Tajawal', sans-serif; font-weight: 900; font-size: 1.3rem; color: #333; text-align: center; margin: 15px 0; }
            .order-button { width: 100%; padding: 20px; background: #e63946; color: white; border: none; border-radius: 12px; font-size: 1.7rem; font-weight: 900; cursor: pointer; }
        </style>

        <div class="main-wrapper" id="store-page">
            <div class="top-black-bar">🇩🇿 Click-Quick 🇩🇿</div>

            <div class="content-header">
                <div class="title-straight">آلة صناعة الشارات الإحترافية</div>
                <h1 class="machine-name-red">Machine Pin's</h1>
                
                <div class="gold-frame-box">
                    <p>أصحاب المشاريع المصغرة</p>
                    <p>وأصحاب المشاريع المنزلية</p>
                </div>

                <div class="brand-click">CLICK QUICK</div>
                <div class="solution-text">💡 جابتلكم الحل</div>

                <div class="price-section">
                    <span style="text-decoration: line-through; color: #bbb; font-size: 1.3rem;">25,000 دج</span>
                    <div class="price-display">
                        <span class="siren-emoji">🚨</span>
                        <h2 class="price-num">24,300 دج</h2>
                        <span class="siren-emoji">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #eee; padding-top: 10px;">
                        <h4 style="color: #28a745; margin: 0; font-size: 1.6rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #28a745; font-weight: 800; margin: 5px 0;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="form-area">
                <input type="text" id="fn_name" class="input-style" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="fn_phone" inputmode="numeric" class="input-style" placeholder="رقم الهاتف (أرقام فقط) *">
                
                <select id="fn_offer" class="input-style">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="fn_wilaya" class="input-style">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="fn_address" class="input-style" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin: 10px 0 5px 0;">وسيلة التوصيل:</p>
                <select id="fn_delivery" class="input-style delivery-box">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <div class="pay-note-final">ملاحظة: الدفع عند الإستلام</div>

                <button onclick="processOrder()" id="btn-submit-final" class="order-button">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function processOrder() {
    const orderData = {
        name: document.getElementById('fn_name').value.trim(),
        phone: document.getElementById('fn_phone').value.trim(),
        offer: document.getElementById('fn_offer').value,
        wilaya: document.getElementById('fn_wilaya').value,
        address: document.getElementById('fn_address').value.trim(),
        delivery: document.getElementById('fn_delivery').value
    };

    if(!orderData.name || !orderData.phone || !orderData.wilaya || !orderData.address) return alert("يرجى ملء كافة البيانات");

    const b = document.getElementById('btn-submit-final');
    b.disabled = true; b.innerText = "جاري الحفظ...";

    try {
        const r = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [orderData] })
        });
        if(r.ok) {
            document.getElementById('store-page').innerHTML = `<div style="padding: 150px 20px; text-align: center;"><h2>✅ شكراً لك! تم استلام طلبك.</h2></div>`;
        } else throw new Error();
    } catch (e) {
        alert("فشل، حاول مجدداً");
        b.disabled = false; b.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
