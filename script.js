// دالة إرسال الطلب تلقائياً إلى Google Sheets
function sendOrder() {
    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const offer = document.getElementById('offer').value;
    const address = document.getElementById('address').value;
    const wilaya = document.getElementById('wilaya').value;

    if(name && phone && address && wilaya) {
        
        // الرابط الخاص بك من SheetDB
        const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

        const data = {
            "data": [{
                "name": name,
                "phone": phone,
                "offer": offer,
                "address": address,
                "wilaya": wilaya
            }]
        };

        fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            alert('شكراً لك! تم استلام طلبك بنجاح وسنتصل بك لتأكيده.');
            document.getElementById('fullname').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('address').value = '';
        })
        .catch(error => {
            alert('عذراً، حدث خطأ. حاول مرة أخرى.');
        });

    } else {
        alert("يرجى ملء جميع الخانات المطلوبة");
    }
}

// عرض واجهة الموقع مع قائمة الولايات الـ 58
function displayPage() {
    const productsSection = document.getElementById('products');
    
    // قائمة الولايات الجزائرية
    const wilayas = [
        "01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة",
        "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو
