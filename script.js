const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Tajawal:wght@500;800;900&display=swap');
            
            body { background: #f4f7f6; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; overflow-x: hidden; }
            .store-wrapper { width: 100%; max-width: 480px; margin: 0 auto; background: white; min-height: 100vh; box-shadow: 0 0 25px rgba(0,0,0,0.1); position: relative; }
            
            /* شريط العنوان العلوي */
            .top-banner { background: #000; color: white; padding: 15px; text-align: center; font-size: 1.6rem; font-weight: 900; }

            .main-info { padding: 25px 15px; text-align: center; }
            .sub-title { font-size: 1.6rem; font-weight: 700; color: #444; margin-bottom: 5px; white-space: nowrap; }
            .product-title-red { font-size: 3rem; font-weight: 900; color: #e63946; margin: 0; white-space: nowrap; line-height: 1.2; }

            /* الإطار الذهبي المنضبط */
            .gold-frame-container { 
                border: 2.5px solid #d4af37; border-radius: 15px; padding: 15px; margin: 20px auto;
                background: #fffcf0; width: 88%; box-sizing: border-box;
            }
            .frame-line { font-family: 'Tajawal', sans-serif; font-size: 1.35rem; font-weight: 900; color: #856404; margin: 6px 0; white-space: nowrap; overflow: hidden; }

            .brand-name-blue { font-size: 2.6rem; font-weight: 900; color: #007bff; margin: 15px 0 0 0; }
            .solution-bulb-line { font-size: 1.6rem; font-weight: 800; color: #28a745; margin-bottom: 25px; }

            /* الوميض والسعر في خط واحد مثالي */
            @keyframes policeFlashEffect { 
                0% { color: #ff0000; filter: drop-shadow(0 0 5px red); transform: scale(1); }
                50% { color: #0000ff; filter: drop-shadow(0 0 20px blue); transform: scale(1.15); }
                100% { color: #ff0000; filter: drop-shadow(0 0 5px red); transform: scale(1); }
            }
            @keyframes pricePulseSlow {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.04); }
            }

            .price-container-box { border: 2.5px dashed #e63946; border-radius: 20px; padding: 20px; margin: 0 15px; background: #fffafa; }
            .price-flex-row { display: flex; align-items: center; justify-content: center; gap: 12px; white-space: nowrap; margin: 10px 0; overflow: hidden; }
            .actual-price { color: #e63946; font-size: 3.3rem; font-weight: 900; margin: 0; animation: pricePulseSlow 0.6s infinite ease-in-out; }
            .siren-blink { animation: policeFlashEffect 0.3s infinite; font-size: 2.5rem; display: inline-block; }

            .form-fields-container { padding: 25px; }
            .input-box { width: 100%; padding: 18px; margin-bottom: 15px; border: 1.5px solid #ddd; border-radius: 12px; font-family: 'Cairo'; font-size: 1.1rem; box-sizing: border-box; }
            .delivery-highlight-select { border: 2.5px solid #e63946 !important; color: #e63946; font-weight: 900; }
            .payment-footer-note { font-family: 'Tajawal', sans-serif; font-weight: 900; font-size: 1.4rem; color: #333; text-align: center; margin: 20px 0; }
            .submit-order-button { width: 100%; padding: 22px; background: #e63946; color: white; border: none; border-radius: 15px; font-size: 1.8rem; font-weight: 900; cursor: pointer; }
        </style>

        <div class="store-wrapper" id="store-content">
            <div class="top-banner">🇩🇿 Click-Quick 🇩🇿</div>

            <div class="main-info">
                <div class="sub-title">آلة صناعة الشارات الإحترافية</div>
                <h1 class="product-title-red">Machine Pin's</h1>
                
                <div class="gold-frame-container">
                    <div class="frame-line">أصحاب المشاريع المصغرة</div>
                    <div class="frame-line">وأصحاب المشاريع المنزلية</div>
                </div>

                <div class="brand-name-blue">CLICK QUICK</div>
                <div class="solution-bulb-line">جابتلكم الحل 💡</div>

                <div class="price-container-box">
                    <span style="text-decoration: line-through; color: #bbb; font-size: 1.4rem;">25,000 دج</span>
                    <div class="price-flex-row">
                        <span class="siren-blink">🚨</span>
                        <h2 class="actual-price">24,300 دج</h2>
                        <span class="siren-blink">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px;">
                        <h4 style="color: #28a745; margin: 0; font-size: 1.7rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #28a745; font-weight: 800; margin: 5px 0;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="form-fields-container">
                <input type="text" id="cust_name" class="input-box" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="cust_phone" inputmode="numeric" class="input-box" placeholder="رقم الهاتف (أرقام فقط) *">
                
                <select id="cust_offer" class="input-box">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="cust_wilaya" class="input-box">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="cust_addr" class="input-box" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin: 10px 0 5px 0;">وسيلة التوصيل:</p>
                <select id="cust_deliv" class="input-box delivery-highlight-select">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <div class="payment-footer-note">ملاحظة: الدفع عند الإستلام</div>

                <button onclick="submitOrderFinal()" id="final-submit-btn" class="submit-order-button">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function submitOrderFinal() {
    const dataObj = {
        name: document.getElementById('cust_name').value.trim(),
        phone: document.getElementById('cust_phone').value.trim(),
        offer: document.getElementById('cust_offer').value,
        wilaya: document.getElementById('cust_wilaya').value,
        address: document.getElementById('cust_addr').value.trim(),
        delivery: document.getElementById('cust_deliv').value
    };

    if(!dataObj.name || !dataObj.phone || !dataObj.wilaya || !dataObj.address) return alert("يرجى ملء جميع البيانات");

    const btn = document.getElementById('final-submit-btn');
    btn.disabled = true; btn.innerText = "جاري الإرسال...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [dataObj] })
        });
        if(response.ok) {
            document.getElementById('store-content').innerHTML = `<div style="padding: 150px 20px; text-align: center;"><h2>✅ شكراً لك!</h2><p>تم استلام طلبك وسنتصل بك قريباً.</p></div>`;
        } else throw new Error();
    } catch (e) {
        alert("خطأ في الاتصال، حاول مرة أخرى");
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
