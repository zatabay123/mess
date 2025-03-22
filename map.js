// Map functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    const map = L.map('map').setView([20, 10], 2); // Default center of the map

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Custom icon for attractions
    const attractionIcon = L.divIcon({
        className: 'custom-map-marker',
        html: '<div style="background-color: #FF6B6B; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-camera"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    // Custom icon for hotels
    const hotelIcon = L.divIcon({
        className: 'custom-map-marker',
        html: '<div style="background-color: #3498DB; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-hotel"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    // Custom icon for restaurants
    const restaurantIcon = L.divIcon({
        className: 'custom-map-marker',
        html: '<div style="background-color: #2ECC71; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-utensils"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    // Custom icon for shopping
    const shoppingIcon = L.divIcon({
        className: 'custom-map-marker',
        html: '<div style="background-color: #F1C40F; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-shopping-bag"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    // Custom icon for activities
    const activitiesIcon = L.divIcon({
        className: 'custom-map-marker',
        html: '<div style="background-color: #9B59B6; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-hiking"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    // Define attractions data - These are real destinations
    const attractions = [
        {
            name: "Vịnh Hạ Long",
            lat: 20.9101,
            lng: 107.1839,
            country: "vietnam",
            region: "asia",
            type: "nature",
            category: "attraction",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format",
            description: "Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi trên biển xanh.",
            link: "vietnam.html"
        },
        {
            name: "Hội An",
            lat: 15.8801,
            lng: 108.3380,
            country: "vietnam",
            region: "asia",
            type: "culture",
            category: "attraction",
            image: "https://images.unsplash.com/photo-1536698988377-6e5e7c3b3175?w=800&auto=format",
            description: "Phố cổ đầy màu sắc với kiến trúc cổ và lồng đèn rực rỡ.",
            link: "vietnam.html"
        },
        {
            name: "Tokyo Skytree",
            lat: 35.7101,
            lng: 139.8107,
            country: "japan",
            region: "asia",
            type: "city",
            category: "attraction",
            image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&auto=format",
            description: "Tháp truyền hình cao nhất thế giới với tầm nhìn 360 độ.",
            link: "tokyo.html"
        },
        {
            name: "Cung điện Gyeongbokgung",
            lat: 37.5796,
            lng: 126.9770,
            country: "korea",
            region: "asia",
            type: "culture",
            category: "attraction",
            image: "https://images.unsplash.com/photo-1538485399081-7c8ba554ace3?w=800&auto=format",
            description: "Cung điện chính của triều đại Joseon tại Seoul, Hàn Quốc.",
            link: "seoul.html"
        },
        {
            name: "Sagrada Familia",
            lat: 41.4036,
            lng: 2.1744,
            country: "spain",
            region: "europe",
            type: "culture",
            category: "attraction",
            image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&auto=format",
            description: "Kiệt tác kiến trúc nổi tiếng thế giới của Antoni Gaudí.",
            link: "spain.html"
        },
        {
            name: "Prado Museum",
            lat: 40.4138,
            lng: -3.6921,
            country: "spain",
            region: "europe",
            type: "culture",
            category: "attraction",
            image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format",
            description: "Bảo tàng nghệ thuật chính ở Madrid với bộ sưu tập đồ sộ.",
            link: "spain.html"
        },
        {
            name: "Đà Nẵng",
            lat: 16.0544,
            lng: 108.2022,
            country: "vietnam",
            region: "asia",
            type: "city",
            category: "attraction",
            image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&auto=format",
            description: "Thành phố biển hiện đại với cầu Rồng nổi tiếng và bãi biển đẹp.",
            link: "vietnam.html"
        },
        {
            name: "Shibuya Crossing",
            lat: 35.6595,
            lng: 139.7004,
            country: "japan",
            region: "asia",
            type: "city",
            category: "attraction",
            image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format",
            description: "Giao lộ đông đúc nhất thế giới, biểu tượng của Tokyo.",
            link: "tokyo.html"
        }
    ];

    // Define hotels
    const hotels = [
        {
            name: "Grand Hyatt Tokyo",
            lat: 35.6595,
            lng: 139.7264,
            country: "japan",
            region: "asia",
            category: "hotel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format",
            description: "Khách sạn 5 sao sang trọng tại khu Roppongi Hills.",
            link: "tokyo.html"
        },
        {
            name: "Paradise City Resort",
            lat: 37.4467,
            lng: 126.4514,
            country: "korea",
            region: "asia",
            category: "hotel",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format",
            description: "Khu nghỉ dưỡng đẳng cấp gần sân bay Incheon.",
            link: "seoul.html"
        },
        {
            name: "Vinpearl Resort Hạ Long",
            lat: 20.9586,
            lng: 107.0920,
            country: "vietnam",
            region: "asia",
            category: "hotel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format",
            description: "Khu nghỉ dưỡng cao cấp với tầm nhìn ra vịnh Hạ Long.",
            link: "vietnam.html"
        }
    ];

    // Define restaurants
    const restaurants = [
        {
            name: "Sushi Saito",
            lat: 35.6673,
            lng: 139.7525,
            country: "japan",
            region: "asia",
            category: "restaurant",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format",
            description: "Nhà hàng sushi 3 sao Michelin tại Tokyo.",
            link: "tokyo.html"
        },
        {
            name: "Myeongdong Kyoja",
            lat: 37.5634,
            lng: 126.9842,
            country: "korea",
            region: "asia",
            category: "restaurant",
            image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format",
            description: "Nhà hàng mì truyền thống nổi tiếng tại Seoul.",
            link: "seoul.html"
        },
        {
            name: "El Celler de Can Roca",
            lat: 41.9930,
            lng: 2.8099,
            country: "spain",
            region: "europe",
            category: "restaurant",
            image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format",
            description: "Một trong những nhà hàng tốt nhất thế giới tại Girona.",
            link: "spain.html"
        }
    ];

    // Define shopping places
    const shopping = [
        {
            name: "Ginza",
            lat: 35.6721,
            lng: 139.7636,
            country: "japan",
            region: "asia",
            category: "shopping",
            image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format",
            description: "Khu mua sắm cao cấp nhất tại Tokyo.",
            link: "tokyo.html"
        },
        {
            name: "Myeongdong",
            lat: 37.5638,
            lng: 126.9822,
            country: "korea",
            region: "asia",
            category: "shopping",
            image: "https://images.unsplash.com/photo-1617093414939-2f19a2a0c374?w=800&auto=format",
            description: "Thiên đường mua sắm và mỹ phẩm Hàn Quốc.",
            link: "seoul.html"
        },
        {
            name: "Gran Via",
            lat: 40.4201,
            lng: -3.7026,
            country: "spain",
            region: "europe",
            category: "shopping",
            image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format",
            description: "Đại lộ mua sắm nổi tiếng tại Madrid.",
            link: "spain.html"
        }
    ];

    // Define activities
    const activities = [
        {
            name: "Fushimi Inari Taisha",
            lat: 34.9671,
            lng: 135.7726,
            country: "japan",
            region: "asia",
            category: "activities",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format",
            description: "Đền thờ với hàng nghìn cổng torii đỏ tại Kyoto.",
            link: "tokyo.html"
        },
        {
            name: "Everland Resort",
            lat: 37.2942,
            lng: 127.2022,
            country: "korea",
            region: "asia",
            category: "activities",
            image: "https://images.unsplash.com/photo-1581615428039-39a4dd237802?w=800&auto=format",
            description: "Công viên giải trí lớn nhất Hàn Quốc.",
            link: "seoul.html"
        },
        {
            name: "Flamenco Show",
            lat: 37.3891,
            lng: -5.9845,
            country: "spain",
            region: "europe",
            category: "activities",
            image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&auto=format",
            description: "Trải nghiệm điệu nhảy flamenco đặc trưng của Tây Ban Nha.",
            link: "spain.html"
        }
    ];

    // Combine all data
    const allPlaces = [...attractions, ...hotels, ...restaurants, ...shopping, ...activities];

    // Định nghĩa các quốc gia theo châu lục
    const continentCountries = {
        asia: {
            'vietnam': 'Việt Nam',
            'japan': 'Nhật Bản',
            'korea': 'Hàn Quốc',
            'thailand': 'Thái Lan'
        },
        europe: {
            'france': 'Pháp',
            'spain': 'Tây Ban Nha',
            'italy': 'Ý',
            'germany': 'Đức'
        }
    };

    // Layer groups for filtering
    const layers = {
        attraction: L.layerGroup(),
        hotel: L.layerGroup(),
        restaurant: L.layerGroup(),
        shopping: L.layerGroup(),
        activities: L.layerGroup()
    };

    // Add all markers to their respective layers
    allPlaces.forEach(place => {
        let icon;
        switch(place.category) {
            case 'attraction':
                icon = attractionIcon;
                break;
            case 'hotel':
                icon = hotelIcon;
                break;
            case 'restaurant':
                icon = restaurantIcon;
                break;
            case 'shopping':
                icon = shoppingIcon;
                break;
            case 'activities':
                icon = activitiesIcon;
                break;
            default:
                icon = attractionIcon;
        }

        const popupContent = `
            <div class="popup-content">
                <img src="${place.image}" alt="${place.name}" class="popup-image">
                <div class="popup-details">
                    <h3 class="popup-title">${place.name}</h3>
                    <p class="popup-location"><i class="fas fa-map-marker-alt"></i> ${getCountryName(place.country)}</p>
                    <p class="popup-description">${place.description}</p>
                    <a href="${place.link}" class="popup-link">Xem chi tiết</a>
                </div>
            </div>
        `;

        const marker = L.marker([place.lat, place.lng], { icon: icon })
            .bindPopup(popupContent, { className: 'custom-popup' });

        // Add marker to appropriate layer
        layers[place.category].addLayer(marker);
    });

    // Add all layers to map by default
    Object.values(layers).forEach(layer => map.addLayer(layer));

    // Handle category filter clicks
    document.querySelectorAll('.map-category').forEach(element => {
        element.addEventListener('click', function() {
            const category = this.dataset.category;

            // Toggle active class
            this.classList.toggle('active');

            // Toggle layer visibility
            if (this.classList.contains('active')) {
                map.addLayer(layers[category]);
            } else {
                map.removeLayer(layers[category]);
            }
        });
    });

    // Handle region filter changes
    document.getElementById('region-filter').addEventListener('change', filterMarkers);

    // Handle country filter changes
    document.getElementById('country-filter').addEventListener('change', filterMarkers);

    // Handle destination type filter changes
    document.getElementById('destination-type').addEventListener('change', filterMarkers);

    // Handle search input
    document.getElementById('destination-search').addEventListener('input', filterMarkers);

    // Xử lý sự kiện click vào châu lục
    document.querySelectorAll('.continent-badge').forEach(badge => {
        badge.addEventListener('click', function() {
            const continent = this.dataset.continent;
            const countryFilter = document.getElementById('country-filter');

            // Reset và cập nhật danh sách quốc gia
            countryFilter.innerHTML = '<option value="all">Tất cả quốc gia</option>';

            if (continent && continentCountries[continent]) {
                Object.entries(continentCountries[continent]).forEach(([code, name]) => {
                    const option = document.createElement('option');
                    option.value = code;
                    option.textContent = name;
                    countryFilter.appendChild(option);
                });

                // Di chuyển bản đồ đến châu lục được chọn
                const coordinates = {
                    'asia': [20, 105],
                    'europe': [48, 15]
                };

                if (coordinates[continent]) {
                    map.setView(coordinates[continent], 4);
                }
            }

            // Highlight badge được chọn
            document.querySelectorAll('.continent-badge').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // Filter markers based on all criteria
    function filterMarkers() {
        const region = document.getElementById('region-filter').value;
        const country = document.getElementById('country-filter').value;
        const type = document.getElementById('destination-type').value;
        const search = document.getElementById('destination-search').value.toLowerCase();

        // Remove all markers
        Object.values(layers).forEach(layer => {
            layer.clearLayers();
        });

        // Filter places based on criteria
        allPlaces.forEach(place => {
            const matchRegion = region === 'all' || place.region === region;
            const matchCountry = country === 'all' || place.country === country;
            const matchType = type === 'all' || (place.type && place.type === type);
            const matchSearch = search === '' || place.name.toLowerCase().includes(search) || 
                               (place.description && place.description.toLowerCase().includes(search));

            // If all criteria match, add marker back to its layer
            if (matchRegion && matchCountry && matchType && matchSearch) {
                let icon;
                switch(place.category) {
                    case 'attraction':
                        icon = attractionIcon;
                        break;
                    case 'hotel':
                        icon = hotelIcon;
                        break;
                    case 'restaurant':
                        icon = restaurantIcon;
                        break;
                    case 'shopping':
                        icon = shoppingIcon;
                        break;
                    case 'activities':
                        icon = activitiesIcon;
                        break;
                    default:
                        icon = attractionIcon;
                }

                const popupContent = `
                    <div class="popup-content">
                        <img src="${place.image}" alt="${place.name}" class="popup-image">
                        <div class="popup-details">
                            <h3 class="popup-title">${place.name}</h3>
                            <p class="popup-location"><i class="fas fa-map-marker-alt"></i> ${getCountryName(place.country)}</p>
                            <p class="popup-description">${place.description}</p>
                            <a href="${place.link}" class="popup-link">Xem chi tiết</a>
                        </div>
                    </div>
                `;

                const marker = L.marker([place.lat, place.lng], { icon: icon })
                    .bindPopup(popupContent, { className: 'custom-popup' });

                // Add marker to appropriate layer if that layer is currently visible
                const categoryEl = document.querySelector(`.map-category[data-category="${place.category}"]`);
                if (categoryEl && categoryEl.classList.contains('active')) {
                    layers[place.category].addLayer(marker);
                }
            }
        });

        // Adjust map view if filtered markers exist
        let hasVisibleMarkers = false;
        const bounds = L.latLngBounds();

        Object.values(layers).forEach(layer => {
            if (layer.getLayers().length > 0) {
                hasVisibleMarkers = true;
                layer.eachLayer(marker => {
                    bounds.extend(marker.getLatLng());
                });
            }
        });

        if (hasVisibleMarkers) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }

    // Helper function to get full country name
    function getCountryName(code) {
        const countries = {
            'vietnam': 'Việt Nam',
            'japan': 'Nhật Bản',
            'korea': 'Hàn Quốc',
            'spain': 'Tây Ban Nha',
            'thailand': 'Thái Lan',
            'france': 'Pháp',
            'italy': 'Ý',
            'germany': 'Đức'
        };
        return countries[code] || code;
    }
});