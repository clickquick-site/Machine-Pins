const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    
    const wilayas = [
        "01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة",
        "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة",
        "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة",
        "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة",
        "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار",
        "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"
    ];

    let options = wilayas.map(w => `<option value="${w}">${w}</option>`).join('');

    mainContent.innerHTML = `
        <style>
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.15); }
                100% { transform: scale(1); }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
            }
            .moving-price { 
                animation: bounce 2s infinite ease-in-out; 
                display: inline-block;
            }
            .alert-blink { 
                animation: pulse 1s infinite; 
                display: inline-block;
            }
        </style>

        <div id="order-card" style="max-width: 550px; margin: auto; background: white; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden; direction: rtl;">
            <div style="padding: 25px; text-align: center;">
                <h2 style="color: #333; margin-bottom: 5px; font-size: 1.5em;">آلة صنع الشارات الاحترافية</h2>
                <h1 style="color: #000; margin-top: 0; font-size: 3.2em; font-weight: 900; font-family: sans-serif;">Machine Pin's</h1>
                
                <p style="color: #e63946; font-weight: bold; margin: 15px 0; font-size: 1.2em;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="background: #fff5f5; border: 2px dashed #e63946; padding: 15px; border-radius: 12px; margin: 15px 0;">
                    <span style="text-decoration: line-through; color: #999; font-size: 1.2em;">25,000 دج</span>
                    
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin: 10px 0; white-space: nowrap;">
                        <span class="alert-blink" style="font-size: 2.2em;">🚨</span>
                        <h3 class="moving-price" style="color: #e63946; font-size: 2.8em; margin: 0; font-weight: 900;">24,000 دج</h3>
                        <span class="alert-blink" style="font-size: 2.2em;">🚨</span>
                    </div>
                    
                    <p style="color: #28a745; font-weight: bold; margin: 5px 0 0;">🔥 عرض خاص: قطعتين بـ 47,000 دج فقط!</p>
                </div>
                
                <p style="color: #777; font-size: 0.85em;">* تنبيه: سعر التوصيل غير محتسب في ثمن المنتج</p>
            </div>

            <div id="form-container" style="padding: 25px; background: #fafafa; border-top: 1px solid #eee;">
                <input type="text" id="fullname" placeholder="الإسم واللقب الكامل *" style="width:100%; padding:15px; margin-bottom:12px; border:1px solid #ddd; border-radius:10px; box-sizing:border-box; font-size: 1.1em;">
                
                <input type="text" id="phone" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '')" placeholder="رقم الهاتف (أرقام فقط) *" style="width:100%; padding:15px; margin-bottom:12px; border:1px solid #ddd; border-radius:10px; box-sizing:border-box; font-size: 1.1em;">
                
                <select id="offer" style="width:100%; padding:15px; margin-bottom:12px; border:1px solid #ddd; border-radius:10px; background:white; font-size: 1.1em;">
                    <option value="1 قطعة">طلب قطعة واحدة (24,000 دج)</option>
                    <option value="2 قطعة">طلب قطعتين (47,000 دج)</option>
                </select>

                <select id="wilaya" style="width:100%; padding:15px; margin-bottom:12px; border:1px solid #ddd; border-radius:10px; background:white; font-size: 1.1em;">
                    <option value="">إختر الولاية... *</option>
                    ${options}
                </select>

                <input type="text" id="address_input" placeholder="العنوان بالتفصيل (البلدية، الحي..) *" style="width:100%; padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:10px; box-sizing:border-box; font-size: 1.1em;">

                <p style="font-weight: bold; font-size: 1em; margin: 15px 0 10px; color: #444;">وسيلة التوصيل (مصاريف الشحن):</p>
                <select id="delivery_type" style="width:100%; padding:15px; margin-bottom:25px; border:2px solid #e63946; border-radius:10px; background:white; font-weight: bold; color: #e63946; font-size: 1.1em;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine/Bureau)</option>
                </select>

                <button onclick="sendOrder()" id="btn-submit" style="width:100%; padding:20px; background:#e63946; color:white; border:none; border-radius:10px; font-size:1.6em; font-weight:900; cursor:pointer;">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function sendOrder() {
    const name = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const offer = document.getElementById('offer').value;
    const adress_val = document.getElementById('address_input').value.trim();
    const wilaya = document.getElementById('wilaya').value;
    const delivery = document.getElementById('delivery_type').value;
    const btn = document.getElementById('btn-submit');
    const mainCard = document.getElementById('order-card');

    if(!name || !phone || !wilaya || !adress_val) {
        alert("يرجى ملء جميع الخانات الإجبارية (*)");
        return;
    }

    btn.disabled = true;
    btn.innerText = "جاري الإرسال...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "data": [{ 
                    "name": name, 
                    "phone": phone, 
                    "offer": offer, 
                    "address": adress_val, 
                    "wilaya": wilaya, 
                    "delivery": delivery 
                }]
            })
        });

        if(response.ok) {
            mainCard.innerHTML = `
                <div style="padding: 60px 20px; text-align: center; background: white;">
                    <div style="font-size: 70px; color: #28a745; margin-bottom: 20px;">✅</div>
                    <h2 style="color: #28a745; margin-bottom: 15px;">شكراً لثقتكم!</h2>
                    <p style="font-size: 1.3em; color: #333; line-height: 1.6;">تم استلام طلبك بنجاح. سنتصل بك قريباً.</p>
                </div>
            `;
        }
    } catch (e) {
        alert('حدث خطأ، يرجى إعادة المحاولة');
        btn.disabled = false;
        btn.innerText = "تأكيد الطلب الآن";
    }
}

displayPage();
