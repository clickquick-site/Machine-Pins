const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Tajawal:wght@500;800;900&display=swap');
            
            body { background: #f4f6f9; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; }
            .container { width: 100%; max-width: 500px; margin: 0 auto; background: white; min-height: 100vh; box-shadow: 0 0 30px rgba(0,0,0,0.1); }
            
            /* السطر العلوي الجديد */
            .top-bar { background: #000; color: white; padding: 12px; text-align: center; font-size: 1.4rem; font-weight: 900; }

            .main-header { padding: 20px 10px; text-align: center; }
            .heading-bold { font-size: 1.8rem; font-weight: 900; color: #2d3436; margin: 10px 0 5px 0; line-height: 1.2; }
            .machine-red { font-size: 2.8rem; font-weight: 900; color: #e63946; margin: 0; line-height: 1; }

            /* الإطار الذهبي الجذاب للمشاريع */
            .gold-box { 
                border: 3px solid #d4af37; background: linear-gradient(145deg, #fffcf0, #ffffff);
                border-radius: 15px; padding: 15px; margin: 15px 20px;
                box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
            }
            .audience-text { font-family: 'Tajawal', sans-serif; font-size: 1.3rem; font-weight: 800; color: #996515; margin: 0; }

            .brand-blue { font-size: 2.4rem; font-weight: 900; color: #007bff; margin: 10px 0 0 0; }
            .solution-bulb { font-size: 1.5rem; font-weight: 800; color: #2ecc71; margin-bottom: 15px; }

            /* الوميض الشرطي المحسن */
            @keyframes policeActive { 
                0% { filter: drop-shadow(0 0 5px red); transform: scale(1); }
                50% { filter: drop-shadow(0 0 25px blue); transform: scale(1.2); }
                100% { filter: drop-shadow(0 0 5px red); transform: scale(1); }
            }
            @keyframes priceJump {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }

            .price-container { 
                background: #fffafa; border: 2.5px dashed #e63946; border-radius: 20px; 
                padding: 20px; margin: 0 15px; text-align: center; 
            }
            .price-row { display: flex; align-items: center; justify-content: center; gap: 10px; white-space: nowrap; margin: 10px 0; }
            .price-val { color: #e63946; font-size: 3.3rem; font-weight: 900; margin: 0; animation: priceJump 0.4s infinite; }
            .siren { animation: policeActive 0.3s infinite; font-size: 2.3rem; }

            .form-section { padding: 25px; }
            .input-field { width: 100%; padding: 18px; margin-bottom: 12px; border: 1.8px solid #eee; border-radius: 12px; font-family: 'Cairo'; font-size: 1.1rem; box-sizing: border-box; }
            
            .pay-note { font-family: 'Tajawal', sans-serif; font-weight: 900; font-size: 1.3rem; color: #2d3436; text-align: center; margin: 15px 0; }
            .submit-btn { 
                width: 100%; padding: 22px; background: #e63946; color: white; 
                border: none; border-radius: 15px; font-size: 1.8rem; font-weight: 900; 
                cursor: pointer; box-shadow: 0 10px 25px rgba(230, 57, 70, 0.3); 
            }
        </style>

        <div class="container" id="main-view">
            <div class="top-bar">🇩🇿 Click-Quick 📣</div>

            <div class="main-header">
                <div class="heading-bold">آلة صناعة الشارات الإحترافية</div>
                <h1 class="machine-red">Machine Pin's</h1>
                
                <div class="gold-box">
                    <div class="audience-text">أصحاب المشاريع المصغرة</div>
                    <div class="audience-text">وأصحاب المشاريع المنزلية</div>
                </div>

                <div class="brand-blue">CLICK QUICK</div>
                <div class="solution-bulb">جابتلكم الحل 💡</div>

                <div class="price-container">
                    <span style="text-decoration: line-through; color: #bbb; font-size: 1.4rem;">25,000 دج</span>
                    <div class="price-row">
                        <span class="siren">🚨</span>
                        <h2 class="price-val">24,300 دج</h2>
                        <span class="siren">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #ffebeb; margin-top: 10px; padding-top: 10px;">
                        <h4 style="color: #28a745; margin: 0; font-size: 1.8rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #28a745; font-weight: 800; margin: 5px 0;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="form-section">
                <input type="text" id="c_name" class="input-field" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="c_phone" inputmode="numeric" class="input-field" placeholder="رقم الهاتف (أرقام فقط) *">
                
                <select id="c_offer" class="input-field">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="c_wilaya" class="input-field">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="c_address" class="input-field" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin: 10px 0 5px 0;">وسيلة التوصيل:</p>
                <select id="c_delivery" class="input-field" style="border: 2.5px solid #e63946; color: #e63946; font-weight: 900;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <div class="pay-note">ملاحظة: الدفع عند الإستلام</div>

                <button onclick="sendOrder()" id="s-btn" class="submit-btn">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function sendOrder() {
    const data = {
        name: document.getElementById('c_name').value.trim(),
        phone: document.getElementById('c_phone').value.trim(),
        offer: document.getElementById('c_offer').value,
        wilaya: document.getElementById('c_wilaya').value,
        address: document.getElementById('c_address').value.trim(),
        delivery: document.getElementById('c_delivery').value
    };

    if(!data.name || !data.phone || !data.wilaya || !data.address) return alert("يرجى إكمال البيانات");

    const btn = document.getElementById('s-btn');
    btn.disabled = true; btn.innerText = "جاري الإرسال...";

    try {
        const res = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [data] })
        });
        if(res.ok) {
            document.getElementById('main-view').innerHTML = `<div style="padding: 150px 20px; text-align: center;"><h2>✅ شكراً لك! تم استلام طلبك.</h2></div>`;
        } else throw new Error();
    } catch (e) {
        alert("خطأ، حاول مجدداً");
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
