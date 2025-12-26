    mainContent.innerHTML = `
        <style>
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
            .moving-price { animation: bounce 2s infinite ease-in-out; }
            .alert-blink { animation: pulse 1s infinite; }
        </style>

        <div id="order-card" style="max-width: 550px; margin: auto; background: white; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden; direction: rtl;">
            <div style="padding: 25px; text-align: center;">
                <h2 style="color: #333; margin-bottom: 5px;">آلة صنع الشارات الاحترافية</h2>
                <h1 style="color: #000; margin-top: 0; font-size: 3.2em; font-weight: 900; font-family: Arial, sans-serif;">Machine Pin's</h1>
                
                <p style="color: #e63946; font-weight: bold; margin: 15px 0; font-size: 1.2em;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="background: #fff5f5; border: 2px dashed #e63946; padding: 15px; border-radius: 12px; margin: 15px 0;">
                    <span style="text-decoration: line-through; color: #999; font-size: 1.2em;">25,000 دج</span>
                    
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin: 10px 0; white-space: nowrap;">
                        <span class="alert-blink" style="font-size: 2.2em; display: inline-block;">🚨</span>
                        <h3 class="moving-price" style="color: #e63946; font-size: 2.8em; margin: 0; font-weight: 900;">24,000 دج</h3>
                        <span class="alert-blink" style="font-size: 2.2em; display: inline-block;">🚨</span>
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
