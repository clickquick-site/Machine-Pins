const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Tajawal:wght@500;800;900&display=swap');
            
            body { background: #f8f9fa; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; overflow-x: hidden; }
            .shop-container { width: 100%; max-width: 480px; margin: 0 auto; background: white; min-height: 100vh; box-shadow: 0 0 20px rgba(0,0,0,0.05); }
            
            .black-nav { background: #000; color: #fff; padding: 15px; text-align: center; font-size: 1.6rem; font-weight: 900; }

            .header-info { padding: 25px 15px; text-align: center; }
            .main-title { font-size: 1.7rem; font-weight: 800; color: #333; margin: 0 0 5px 0; white-space: nowrap; }
            .product-name { font-size: 3.2rem; font-weight: 900; color: #e63946; margin: 0; line-height: 1.1; }

            /* الإطار الذهبي للمشاريع */
            .target-frame { 
                border: 2.5px solid #d4af37; border-radius: 15px; padding: 15px; margin: 20px auto;
                background: #fffcf0; width: 85%;
            }
            .target-frame p { font-family: 'Tajawal', sans-serif; font-size: 1.4rem; font-weight: 900; color: #856404; margin: 5px 0; white-space: nowrap; }

            .brand-id { font-size: 2.6rem; font-weight: 900; color: #007bff; margin: 15px 0 0 0; }
            .solution-bulb { font-size: 1.6rem; font-weight: 800; color: #28a745; margin-bottom: 25px; }

            /* الوميض الشرطي والسعر في خط واحد مستقيم */
            @keyframes policeColors { 
                0% { filter: drop-shadow(0 0 8px red); color: #ff0000; transform: scale(1); }
                50% { filter: drop-shadow(0 0 25px blue); color: #0000ff; transform: scale(1.15); }
                100% { filter: drop-shadow(0 0 8px red); color: #ff0000; transform: scale(1); }
            }
            @keyframes pricePulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.04); }
                100% { transform: scale(1); }
            }

            .price-card { border: 2.5px dashed #e63946; border-radius: 20px; padding: 20px; margin: 0 15px; background: #fffafa; }
            .price-row-inline { display: flex; align-items: center; justify-content: center; gap: 12px; white-space: nowrap; margin: 10px 0; }
            .price-tag { color: #e63946; font-size: 3.4rem; font-weight: 900; margin: 0; animation: pricePulse 0.4s infinite; }
            .police-siren { animation: policeColors 0.3s infinite; font-size: 2.6rem; display: inline-block; }

            .order-form-container { padding: 25px; }
            .custom-input { width: 100%; padding: 18px; margin-bottom: 15px; border: 1.5px solid #ddd; border-radius: 12px; font-family: 'Cairo'; font-size: 1.15rem; box-sizing: border-box; }
            .delivery-highlight { border: 2.5px solid #e63946 !important; color: #e63946; font-weight: 900; }
            .pay-notice { font-family: 'Tajawal', sans-serif; font-weight: 900; font-size: 1.4rem; color: #2d3436; text-align: center; margin: 20px 0; }
            .confirm-btn { width: 100%; padding: 22px; background: #e63946; color: white; border: none; border-radius: 15px; font-size: 1.8rem; font-weight: 900; cursor: pointer; box-shadow: 0 10px 20px rgba(230, 57, 70, 0.2); }
        </style>

        <div class="shop-container" id="final-layout">
            <div class="black-nav">🇩🇿 Click-Quick 🇩🇿</div>

            <div class="header-info">
                <div class="main-title">آلة صناعة الشارات الإحترافية</div>
                <h1 class="product-name">Machine Pin's</h1>
                
                <div class="target-frame">
                    <p>أصحاب المشاريع المصغرة</p>
                    <p>وأصحاب المشاريع المنزلية</p>
                </div>

                <div class="brand-id">CLICK QUICK</div>
                <div class="solution-bulb">جابتلكم الحل 💡</div>

                <div class="price-card">
                    <span style="text-decoration: line-through; color: #bbb; font-size: 1.4rem;">25,000 دج</span>
                    <div class="price-row-inline">
                        <span class="police-siren">🚨</span>
                        <h2 class="price-tag">24,300 دج</h2>
                        <span class="police-siren">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px;">
                        <h4 style="color: #28a745; margin: 0; font-size: 1.8rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #28a745; font-weight: 800; margin: 5px 0;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="order-form-container">
                <input type="text" id="user_name" class="custom-input" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="user_phone" inputmode="numeric" class="custom-input" placeholder="رقم الهاتف (أرقام فقط) *">
                
                <select id="user_offer" class="custom-input">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="user_wilaya" class="custom-input">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="user_addr" class="custom-input" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin: 10px 0 5px 0;">وسيلة التوصيل:</p>
                <select id="user_deliv" class="custom-input delivery-highlight">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <div class="pay-notice">ملاحظة: الدفع عند الإستلام</div>

                <button onclick="submitFinalOrder()" id="final-btn" class="confirm-btn">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function submitFinalOrder() {
    const payload = {
        name: document.getElementById('user_name').value.trim(),
        phone: document.getElementById('user_phone').value.trim(),
        offer: document.getElementById('user_offer').value,
        wilaya: document.getElementById('user_wilaya').value,
        address: document.getElementById('user_addr').value.trim(),
        delivery: document.getElementById('user_deliv').value
    };

    if(!payload.name || !payload.phone || !payload.wilaya || !payload.address) return alert("يرجى ملء كافة الخانات الإلزامية");

    const b = document.getElementById('final-btn');
    b.disabled = true; b.innerText = "جاري التأكيد...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [payload] })
        });
        if(response.ok) {
            document.getElementById('final-layout').innerHTML = `<div style="padding: 150px 20px; text-align: center;"><h2>✅ شكراً لك!</h2><p>تم استلام طلبك بنجاح وسنتصل بك قريباً.</p></div>`;
        } else throw new Error();
    } catch (e) {
        alert("حدث خطأ، يرجى المحاولة لاحقاً");
        b.disabled = false; b.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
