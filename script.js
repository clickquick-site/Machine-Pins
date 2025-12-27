const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
            body { background: #f0f2f5; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; }
            
            /* الحاوية الرئيسية بعرض كامل للهاتف */
            .main-wrapper { width: 100%; max-width: 550px; margin: 0 auto; background: white; min-height: 100vh; }

            @keyframes policeEffect { 
                0% { color: #ff0000; text-shadow: 0 0 10px #ff0000; transform: scale(1); } 
                50% { color: #0000ff; text-shadow: 0 0 15px #0000ff; transform: scale(1.1); } 
                100% { color: #ff0000; text-shadow: 0 0 10px #ff0000; transform: scale(1); }
            }

            .price-box { 
                display: flex; align-items: center; justify-content: center; 
                gap: 15px; white-space: nowrap; margin: 15px 0;
            }
            .main-price { color: #d63031; font-size: 3.2rem; font-weight: 900; margin: 0; }
            .siren-icon { animation: policeEffect 0.5s infinite; font-size: 2.2rem; }
            
            /* تنسيق الصورة المرفقة */
            .product-image { width: 180px; height: auto; margin: 10px auto; display: block; border-radius: 15px; }
            
            .form-section { padding: 25px; background: #ffffff; }
            .input-field { 
                width: 100%; padding: 18px; margin-bottom: 15px; 
                border: 1.5px solid #e0e0e0; border-radius: 12px; 
                font-family: 'Cairo'; font-size: 1.1rem; box-sizing: border-box;
            }
            .confirm-btn { 
                width: 100%; padding: 22px; background: #e63946; color: white; 
                border: none; border-radius: 15px; font-size: 1.7rem; 
                font-weight: 900; cursor: pointer; box-shadow: 0 8px 20px rgba(230, 57, 70, 0.3);
            }
        </style>

        <div class="main-wrapper" id="order-card">
            <div style="padding: 30px 20px; text-align: center;">
                <h3 style="color: #636e72; margin-bottom: 5px;">آلة صنع الشارات الاحترافية</h3>
                <h1 style="color: #000; font-size: 2.6rem; font-weight: 900; margin: 0;">Machine PIN'S</h1>
                
                <img src="https://i.ibb.co/V9mD5M4/1000025070.png" class="product-image" alt="Machine">

                <p style="color: #e63946; font-weight: 900; margin: 15px 0; font-size: 1.2rem;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="background: #fff9f9; border: 2.5px dashed #e63946; padding: 25px; border-radius: 20px;">
                    <span style="text-decoration: line-through; color: #b2bec3; font-size: 1.4rem;">25,000 دج</span>
                    <div class="price-box">
                        <span class="siren-icon">🚨</span>
                        <h2 class="main-price">24,300 دج</h2>
                        <span class="siren-icon">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #fab1a0; margin-top: 15px; padding-top: 15px;">
                        <h4 style="color: #27ae60; margin: 0; font-size: 1.8rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #27ae60; font-weight: 900; margin: 5px 0; font-size: 1.3rem;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="form-section">
                <input type="text" id="cust_name" class="input-field" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="cust_phone" inputmode="numeric" class="input-field" placeholder="رقم الهاتف *">
                
                <select id="cust_offer" class="input-field">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="cust_wilaya" class="input-field">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="cust_address" class="input-field" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin-bottom: 10px;">وسيلة التوصيل:</p>
                <select id="cust_delivery" class="input-field" style="border: 2.5px solid #e63946; color: #e63946; font-weight: 900;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <button onclick="sendOrderData()" id="submit-btn" class="confirm-btn">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function sendOrderData() {
    const data = {
        name: document.getElementById('cust_name').value.trim(),
        phone: document.getElementById('cust_phone').value.trim(),
        offer: document.getElementById('cust_offer').value,
        wilaya: document.getElementById('cust_wilaya').value,
        address: document.getElementById('cust_address').value.trim(),
        delivery: document.getElementById('cust_delivery').value
    };

    if(!data.name || !data.phone || !data.wilaya || !data.address) {
        alert("يرجى ملء جميع الخانات"); return;
    }

    const btn = document.getElementById('submit-btn');
    btn.disabled = true; btn.innerText = "جاري الحفظ...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [data] })
        });
        if(response.ok) {
            document.getElementById('order-card').innerHTML = `
                <div style="padding: 100px 20px; text-align: center;">
                    <div style="font-size: 70px; margin-bottom: 20px;">✅</div>
                    <h2 style="color: #27ae60; font-size: 2.2rem;">تم استلام طلبك!</h2>
                    <p>سنتصل بك قريباً لتأكيد التوصيل.</p>
                </div>`;
        } else throw new Error();
    } catch (e) {
        alert("خطأ في الاتصال، حاول مجدداً");
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}
document.addEventListener('DOMContentLoaded', displayPage);
