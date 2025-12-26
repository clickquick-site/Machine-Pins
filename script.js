const product = {
    name: "آلة صنع الشارات الاحترافية (Machine Pin's)",
    price1: 24000,
    oldPrice: 25000,
    price2: 47000
};

function displayPage() {
    const productsSection = document.getElementById('products');
    
    productsSection.innerHTML = `
        <div style="max-width: 600px; margin: auto; background: white; border: 1px solid #eee; font-family: sans-serif;">
            
            <div style="padding: 20px; text-align: center;">
                <h1 style="color: #333; font-size: 1.5em; margin-bottom: 10px;">${product.name}</h1>
                
                <div style="margin-bottom: 20px;">
                    <span style="text-decoration: line-through; color: #888; font-size: 1.2em;">${product.oldPrice} دج</span>
                    <span style="color: #e63946; font-weight: bold; font-size: 2.2em; display: block;">${product.price1} دج</span>
                    <p style="color: #28a745; font-weight: bold;">(تخفيض محدود للقطعة الواحدة)</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: right;">
                    <h3 style="text-align: center; color: #444; margin-bottom: 20px;">إملأ المعلومات لإتمام الطلب</h3>
                    
                    <label>الإسم واللقب:</label>
                    <input type="text" id="fullname" style="width:100%; padding:12px; margin:8px 0; border:1px solid #ccc; border-radius:5px;" placeholder="مثال: محمد علي">
                    
                    <label>رقم الهاتف:</label>
                    <input type="tel" id="phone" style="width:100%; padding:12px; margin:8px 0; border:1px solid #ccc; border-radius:5px;" placeholder="06XXXXXXXX">
                    
                    <label>اختر العرض المناسب:</label>
                    <select id="offer" style="width:100%; padding:12px; margin:8px 0; border:2px solid #e63946; border-radius:5px; font-weight: bold; background: #fff;">
                        <option value="قطعة واحدة بـ 24000 دج">قطعة واحدة بـ 24,000 دج</option>
                        <option value="قطعتين بـ 47000 دج">قطعتين بـ 47,000 دج (توفير 1,000 دج)</option>
                    </select>
                    
                    <label>العنوان بالتفصيل:</label>
                    <input type="text" id="address" style="width:100%; padding:12px; margin:8px 0; border:1px solid #ccc; border-radius:5px;" placeholder="رقم الدار، الشارع، البلدية">
                    
                    <label>الولاية:</label>
                    <select id="wilaya" style="width:100%; padding:12px; margin:8px 0; border:1px solid #ccc; border-radius:5px;">
                        <option value="">-- اختر ولايتك --</option>
                        <option value="01-أدرار">01- أدرار</option><option value="02-الشلف">02- الشلف</option><option value="03-الأغواط">03- الأغواط</option>
                        <option value="04-أم البواقي">04- أم البواقي</option><option value="05-باتنة">05- باتنة</option><option value="06-بجاية">06- بجاية</option>
                        <option value="07-بسكرة">07- بسكرة</option><option value="08-بشار">08- بشار</option><option value="09-البليدة">09- البليدة</option>
                        <option value="10-البويرة">10- البويرة</option><option value="11-تمنراست">11- تمنراست</option><option value="12-تبسة">12- تبسة</option>
                        <option value="13-تلمسان">13- تلمسان</option><option value="14-تيارت">14- تيارت</option><option value="15-تيزي وزو">15- تيزي وزو</option>
                        <option value="16-الجزائر العاصمة">16- الجزائر العاصمة</option><option value="17-الجلفة">17- الجلفة</option><option value="18-جيجل">18- جيجل</option>
                        <option value="19-سطيف">19- سطيف</option><option value="20-سعيدة">20- سعيدة</option><option value="21-سكيكدة">21- سكيكدة</option>
                        <option value="22-سيدي بلعباس">22- سيدي بلعباس</option><option value="23-عنابة">23- عنابة</option><option value="24-قالمة">24- قالمة</option>
                        <option value="25-قسنطينة">25- قسنطينة</option><option value="26-المدية">26- المدية</option><option value="27-مستغانم">27- مستغانم</option>
                        <option value="28-المسيلة">28- المسيلة</option><option value="29-معسكر">29- معسكر</option><option value="30-ورقلة">30- ورقلة</option>
                        <option value="31-وهران">31- وهران</option><option value="32-البيض">32- البيض</option><option value="33-إليزي">33- إليزي</option>
                        <option value="34-برج بوعريريج">34- برج بوعريريج</option><option value="35-بومرداس">35- بومرداس</option><option value="36-الطارف">36- الطارف</option>
                        <option value="37-تندوف">37- تندوف</option><option value="38-تسمسيلت">38- تسمسيلت</option><option value="39-الوادي">39- الوادي</option>
                        <option value="40-خنشلة">40- خنشلة</option><option value="41-سوق أهراس">41- سوق أهراس</option><option value="42-تيبازة">42- تيبازة</option>
                        <option value="43-ميلة">43- ميلة</option><option value="44-عين الدفلى">44- عين الدفلى</option><option value="45-النعامة">45- النعامة</option>
                        <option value="46-عين تموشنت">46- عين تموشنت</option><option value="47-غرداية">47- غرداية</option><option value="48-غليزان">48- غليزان</option>
                        <option value="49-المغير">49- المغير</option><option value="50-المنيعة">50- المنيعة</option><option value="51-أولاد جلال">51- أولاد جلال</option>
                        <option value="52-برج باجي مختار">52- برج باجي مختار</option><option value="53-بني عباس">53- بني عباس</option><option value="54-تيميمون">54- تيميمون</option>
                        <option value="55-تقرت">55- تقرت</option><option value="56-جانت">56- جانت</option><option value="57-عين صالح">57- عين صالح</option>
                        <option value="58-عين قزام">58- عين قزام</option>
                    </select>
                    
                    <button onclick="sendOrder()" style="background-color: #e63946; color: white; border: none; padding: 18px; border-radius: 5px; width: 100%; font-weight: bold; font-size: 1.2em; cursor: pointer; margin-top: 15px;">تأكيد الطلب الآن</button>
                </div>
            </div>
        </div>
    `;
}

function sendOrder() {
    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const offer = document.getElementById('offer').value;
    const address = document.getElementById('address').value;
    const wilaya = document.getElementById('wilaya').value;

    if(name && phone && address && wilaya) {
        const myPhone = "213770044850";
        const message = `طلب جديد:\n- الاسم: ${name}\n- الهاتف: ${phone}\n- العرض المختار: ${offer}\n- العنوان: ${address}\n- الولاية: ${wilaya}`;
        window.open(`https://wa.me/${myPhone}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
        alert("يرجى ملء جميع المعلومات المطلوبة");
    }
}

displayPage();
