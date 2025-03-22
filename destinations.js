// Destinations and related functionality
document.addEventListener('DOMContentLoaded', function() {
    // Featured Destinations Data
    const featuredDestinations = [
        {
            id: 1,
            name: 'Tokyo',
            country: 'Nhật Bản',
            description: 'Khám phá sự kết hợp giữa công nghệ hiện đại và truyền thống cổ xưa tại thủ đô của Nhật Bản.',
            image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&auto=format',
            price: '25,500,000',
            duration: '7 ngày 6 đêm',
            url: 'tokyo.html'
        },
        {
            id: 2,
            name: 'Seoul',
            country: 'Hàn Quốc',
            description: 'Trải nghiệm văn hóa K-pop, ẩm thực đường phố và cảnh quan đô thị ấn tượng của Seoul.',
            image: 'https://images.unsplash.com/photo-1538485399081-7c8ba554ace3?w=800&auto=format',
            price: '22,800,000',
            duration: '6 ngày 5 đêm',
            url: 'seoul.html'
        },
        {
            id: 3,
            name: 'Madrid',
            country: 'Tây Ban Nha',
            description: 'Đắm mình trong văn hóa, kiến trúc và ẩm thực độc đáo của thủ đô Tây Ban Nha.',
            image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format',
            price: '36,200,000',
            duration: '8 ngày 7 đêm',
            url: 'spain.html'
        },
        {
            id: 4,
            name: 'Hạ Long',
            country: 'Việt Nam',
            description: 'Chiêm ngưỡng vẻ đẹp hùng vĩ của vịnh Hạ Long với hàng nghìn hòn đảo đá vôi.',
            image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format',
            price: '3,500,000',
            duration: '3 ngày 2 đêm',
            url: 'vietnam.html'
        },
        {
            id: 5,
            name: 'Barcelona',
            country: 'Tây Ban Nha',
            description: 'Khám phá kiến trúc Gaudi, bãi biển tuyệt đẹp và văn hóa Catalunya độc đáo.',
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&auto=format',
            price: '35,700,000',
            duration: '8 ngày 7 đêm',
            url: 'spain.html'
        },
        {
            id: 6,
            name: 'Hội An',
            country: 'Việt Nam',
            description: 'Khám phá vẻ đẹp cổ kính của phố cổ Hội An với những đèn lồng rực rỡ.',
            image: 'https://images.unsplash.com/photo-1536698988377-6e5e7c3b3175?w=800&auto=format',
            price: '3,800,000',
            duration: '3 ngày 2 đêm',
            url: 'vietnam.html'
        }
    ];
    
    // Popular Destinations Data
    const popularDestinations = [
        {
            id: 1,
            name: 'Đà Nẵng',
            country: 'Việt Nam',
            image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&auto=format',
            price: '4,200,000',
            url: 'vietnam.html'
        },
        {
            id: 2,
            name: 'Bangkok',
            country: 'Thái Lan',
            image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&auto=format',
            price: '15,200,000',
            url: '#'
        },
        {
            id: 3,
            name: 'Kyoto',
            country: 'Nhật Bản',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format',
            price: '27,500,000',
            url: 'tokyo.html'
        },
        {
            id: 4,
            name: 'Rome',
            country: 'Ý',
            image: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=800&auto=format',
            price: '37,500,000',
            url: '#'
        }
    ];
    
    // Special Offers Data
    const specialOffers = [
        {
            id: 1,
            name: 'Phú Quốc Mùa Hè',
            country: 'Việt Nam',
            discount: '25%',
            oldPrice: '8,500,000',
            newPrice: '6,375,000',
            image: 'https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800&auto=format',
            expiry: '2023-08-31',
            url: 'vietnam.html'
        },
        {
            id: 2,
            name: 'Seoul Mùa Thu',
            country: 'Hàn Quốc',
            discount: '20%',
            oldPrice: '22,800,000',
            newPrice: '18,240,000',
            image: 'https://images.unsplash.com/photo-1538485399081-7c8ba554ace3?w=800&auto=format',
            expiry: '2023-10-15',
            url: 'seoul.html'
        },
        {
            id: 3,
            name: 'Barcelona Cuối Năm',
            country: 'Tây Ban Nha',
            discount: '15%',
            oldPrice: '35,700,000',
            newPrice: '30,345,000',
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&auto=format',
            expiry: '2023-12-15',
            url: 'spain.html'
        }
    ];
    
    // Render Featured Destinations
    function renderFeaturedDestinations() {
        const container = document.querySelector('.featured-destinations');
        if (!container) return;
        
        featuredDestinations.forEach(destination => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            
            card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}" class="destination-img">
                <div class="destination-overlay">
                    <h3 class="destination-name">${destination.name}</h3>
                    <p class="destination-country">${destination.country}</p>
                    <div class="destination-price">${destination.price} VND</div>
                    <div class="destination-duration">${destination.duration}</div>
                    <a href="${destination.url}" class="btn btn-sm btn-primary mt-2">Khám phá ngay</a>
                </div>
            `;
            
            container.appendChild(card);
        });
    }
    
    // Render Popular Destinations
    function renderPopularDestinations() {
        const container = document.querySelector('.popular-destinations');
        if (!container) return;
        
        popularDestinations.forEach(destination => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            
            card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}" class="destination-img">
                <div class="destination-overlay">
                    <h3 class="destination-name">${destination.name}</h3>
                    <p class="destination-country">${destination.country}</p>
                    <div class="destination-price">${destination.price} VND</div>
                    <a href="${destination.url}" class="btn btn-sm btn-primary mt-2">Xem chi tiết</a>
                </div>
            `;
            
            container.appendChild(card);
        });
    }
    
    // Render Special Offers
    function renderSpecialOffers() {
        const container = document.querySelector('.special-offers');
        if (!container) return;
        
        specialOffers.forEach(offer => {
            const card = document.createElement('div');
            card.className = 'offer-card';
            
            // Calculate days remaining
            const today = new Date();
            const expiryDate = new Date(offer.expiry);
            const daysRemaining = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
            
            card.innerHTML = `
                <div class="offer-badge">-${offer.discount}</div>
                <div class="offer-img">
                    <img src="${offer.image}" alt="${offer.name}">
                </div>
                <div class="offer-content">
                    <h3 class="offer-title">${offer.name}</h3>
                    <p class="offer-location">${offer.country}</p>
                    <div class="offer-prices">
                        <span class="offer-old-price">${offer.oldPrice} VND</span>
                        <span class="offer-new-price">${offer.newPrice} VND</span>
                    </div>
                    <div class="offer-expiry">
                        <div class="offer-expiry-text">Còn lại: <strong>${daysRemaining} ngày</strong></div>
                        <div class="offer-progress">
                            <div class="offer-progress-bar" style="width: ${Math.min(100, 100 - (daysRemaining / 30) * 100)}%"></div>
                        </div>
                    </div>
                    <a href="${offer.url}" class="btn btn-primary btn-block mt-3">Đặt ngay</a>
                </div>
            `;
            
            container.appendChild(card);
        });
    }
    
    // Destination Detail Page
    function initDestinationDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const destinationId = urlParams.get('id');
        
        if (destinationId) {
            // This would typically fetch from API or larger dataset
            // For demonstration, we'll search through our combined destinations
            const allDestinations = [...featuredDestinations, ...popularDestinations];
            const destination = allDestinations.find(d => d.id === parseInt(destinationId));
            
            if (destination) {
                // Update page content with destination details
                const titleElement = document.querySelector('.destination-detail-title');
                const imageElement = document.querySelector('.destination-detail-image');
                const descriptionElement = document.querySelector('.destination-detail-description');
                const priceElement = document.querySelector('.destination-detail-price');
                
                if (titleElement) titleElement.textContent = `${destination.name}, ${destination.country}`;
                if (imageElement) imageElement.src = destination.image;
                if (descriptionElement) descriptionElement.textContent = destination.description;
                if (priceElement) priceElement.textContent = `${destination.price} VND`;
            }
        }
    }
    
    // Initialize all destination functions
    function initDestinations() {
        renderFeaturedDestinations();
        renderPopularDestinations();
        renderSpecialOffers();
        initDestinationDetail();
    }
    
    // Run initialization
    initDestinations();
});
