const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
            body { background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); font-family: 'Cairo', sans-serif; margin: 0; padding: 15px; direction: rtl; }
            
            @keyframes emergency { 
                0% { filter: drop-shadow(0 0 10px red); color: red; transform: scale(1); } 
                50% { filter: drop-shadow(0 0 15px blue); color: blue; transform: scale(1.1); } 
                100% { filter: drop-shadow(0 0 10px red); color: red; transform: scale(1); }
            }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

            .main-card { max-width: 500px; margin: 10px auto; background: white; border-radius: 25px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); overflow: hidden; }
            .price-container { display: flex; align-items: center; justify-content: center; gap: 10px; white-space: nowrap; margin: 10px 0; }
            .price-main { animation: bounce 0.8s infinite ease-in-out; color: #e63946; font-size: 2.8em; font-weight: 900; margin: 0; }
            .siren { animation: emergency 0.5s infinite; font-size: 1.8em; }
            
            .product-img { width: 140px; height: auto; margin: 15px auto; display: block; border-radius: 10px; }
            
            .input-group { width: 100%; padding: 15px; margin-bottom: 15px; border: 1.5px solid #eee; border-radius: 12px; font-family: 'Cairo'; font-size: 1em; box-sizing: border-box; outline: none; transition: 0.3s; }
            .input-group:focus { border-color: #e63946; background: #fffdfd; }
            
            .submit-btn { width: 100%; padding: 20px; background: #e63946; color: white; border: none; border-radius: 15px; font-size: 1.6em; font-weight: 900; cursor: pointer; transition: 0.3s; box-shadow: 0 5px 15px rgba(230, 57, 70, 0.3); }
            .submit-btn:active { transform: scale(0.98); }
        </style>

        <div class="main-card" id="order-card">
            <div style="padding: 30px; text-align: center;">
                <h3 style="color: #636e72; margin-bottom: 5px; font-weight: 700;">آلة صنع الشارات الاحترافية</h3>
                <h1 style="color: #2d3436; font-size: 2.5em; font-weight: 900; margin: 0;">Machine Pin's</h1>
                
                <img src="https://i.ibb.co/Lhb8pYV/1000025070.png" class="product-img" alt="Product">

                <p style="color: #e63946; font-weight: 900; margin: 15px 0;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="background: #fff5f5; border: 2.5px dashed #e63946; padding: 20px; border-radius: 20px;">
                    <span style="text-decoration: line-through; color: #b2bec3; font-size: 1.3em;">25,000 دج</span>
                    
                    <div class="price-container">
                        <span class="siren">🚨</span>
                        <h2 class="price-main">24,300 دج</h2>
                        <span class="siren">🚨</span>
                    </div>
                    
                    <div style="border-top: 1px solid #ffcccc; margin-top: 15px; padding-top: 15px;">
                        <h4 style="color: #27ae60; margin: 0; font-size: 1.7em; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #27ae60; font-weight: 900; margin: 5px 0; font-size: 1.2em;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
                <p style="color: #636e72; font-size: 0.9em; margin-top: 10px;">* تنبيه: سعر التوصيل غير محتسب في ثمن المنتج</p>
            </div>

            <div style="padding: 30px; background: #fdfdfd; border-top: 1px solid #eee;">
                <input type="text" id="fullname" class="input-group" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="phone" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '')" class="input-group" placeholder="رقم الهاتف (05/06/07) *">
                
                <select id="offer" class="input-group">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="wilaya" class="input-group">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="address_input" class="input-group" placeholder="العنوان بالتفصيل (البلدية، الحي..) *">

                <p style="font-weight: 900; margin-bottom: 10px; color: #2d3436;">وسيلة التوصيل:</p>
                <select id="delivery_type" class="input-group" style="border: 2px solid #e63946; color: #e63946; font-weight: 900;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <p style="color: #2d3436; font-weight: 900; font-size: 1.2em; text-align: center; margin: 20px 0;">الدفع عند الاستلام</p>

                <button onclick="sendOrder()" id="btn-submit" class="submit-btn">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function sendOrder() {
    const name = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const offer = document.getElementById('offer').value;
    const address = document.getElementById('address_input').value.trim();
    const wilaya = document.getElementById('wilaya').value;
    const delivery = document.getElementById('delivery_type').value;
    
    const btn = document.getElementById('btn-submit');
    const mainCard = document.getElementById('order-card');

    if(!name || !phone || !wilaya || !address) {
        alert("يرجى ملء جميع الخانات الإجبارية (*)");
        return;
    }

    btn.disabled = true;
    btn.innerText = "جاري الحفظ...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "data": [{ 
                    "name": name, 
                    "phone": phone, 
                    "offer": offer, 
                    "address": address, 
                    "wilaya": wilaya, 
                    "delivery": delivery 
                }]
            })
        });

        if(response.ok) {
            mainCard.innerHTML = `
                <div style="padding: 80px 20px; text-align: center; direction: rtl;">
                    <div style="font-size: 80px; margin-bottom: 20px;">✅</div>
                    <h2 style="color: #27ae60; font-size: 2em; font-weight: 900;">شكراً لثقتكم!</h2>
                    <p style="font-size: 1.3em; color: #2d3436;">تم استلام طلبك بنجاح. سنتصل بك قريباً.</p>
                </div>
            `;
        } else { throw new Error(); }
    } catch (e) {
        alert('حدث خطأ، يرجى المحاولة لاحقاً');
        btn.disabled = false;
        btn.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
