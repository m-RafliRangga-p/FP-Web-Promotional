var map = L.map('map').setView([-7.7051, 110.6035], 15); // Ganti koordinat dengan lokasi Umbul Ponggok

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([-7.7051, 110.6035]).addTo(map) // Ganti koordinat dengan lokasi Umbul Ponggok
        .bindPopup('Umbul Ponggok, Klaten.')
        .openPopup();