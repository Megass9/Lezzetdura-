// Menü verileri (resim URL'leri eklendi)
const menuData = {
    kahvalti: [
        {
            name: "Serpme Kahvaltı",
            description: "Çeşitli peynirler, zeytin, bal, kaymak, reçeller, yumurta ve söğüş",
            price: "₺120",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Menemen",
            description: "Taze domates, biber ve yumurta ile hazırlanan geleneksel lezzet",
            price: "₺60",
            image: "https://images.unsplash.com/photo-1588345681349-df6df8e0740b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Peynir Tabağı",
            description: "5 çeşit yerli peynir, ceviz ve bal eşliğinde",
            price: "₺85",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Omlet Çeşitleri",
            description: "Sucuklu, kaşarlı, mantarlı veya sebzeli seçenekler",
            price: "₺55-₺70",
            image: "https://images.unsplash.com/photo-1556909211-d5b0d8f29555?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
    ],
    icecekler: [
        {
            name: "Türk Kahvesi",
            description: "Geleneksel usulde pişirilmiş Türk kahvesi",
            price: "₺30",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Latte",
            description: "Espresso ve buharla ısıtılmış süt",
            price: "₺45",
            image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Soğuk Kahve",
            description: "Buzlu americano veya cold brew seçenekleri",
            price: "₺50",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Taze Sıkılmış Meyve Suyu",
            description: "Portakal, nar veya greyfurt",
            price: "₺40",
            image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
    ],
    tatlilar: [
        {
            name: "Tiramisu",
            description: "Geleneksel İtalyan tatlısı",
            price: "₺65",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Cheesecake",
            description: "Çilek, frambuaz veya çikolatalı sos seçenekleri",
            price: "₺70",
            image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Baklava",
            description: "Cevizli veya fıstıklı",
            price: "₺55",
            image: "https://images.unsplash.com/photo-1607923432726-01252cd422e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Profiterol",
            description: "Bol çikolata soslu",
            price: "₺60",
            image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
    ],
    ogun: [
        {
            name: "Köri Soslu Tavuk",
            description: "Pilav ve mevsim sebzeleri ile",
            price: "₺95",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Mantarlı Makarna",
            description: "Kremalı mantar soslu spagetti",
            price: "₺85",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Izgara Somon",
            description: "Limon sos ve roka salatası ile",
            price: "₺120",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Sebzeli Quesadilla",
            description: "Acılı veya acısız seçenekler",
            price: "₺75",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
    ]
};

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Varsayılan olarak kahvaltı menüsünü yükle
    loadMenuItems('kahvalti');
    
    // Menü kategorisi butonlarına tıklama eventi ekle
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Tüm butonlardan active classını kaldır
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Tıklanan butona active classını ekle
            this.classList.add('active');
            // İlgili menüyü yükle
            const category = this.getAttribute('data-category');
            loadMenuItems(category);
        });
    });
    
    // QR kod tıklanabilir yap
    const qrCode = document.querySelector('.qr-code');
    if(qrCode) {
        qrCode.addEventListener('click', function() {
            window.open('https://lezzetduragi.com/menu', '_blank');
        });
    }
});

// Menü öğelerini yükleme fonksiyonu
function loadMenuItems(category) {
    const menuContainer = document.getElementById('menu-items-container');
    menuContainer.innerHTML = '';
    
    const items = menuData[category];
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}