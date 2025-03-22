// Search functionality for travel website
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    // Initialize destinations data
    const destinations = [
        {
            id: 1,
            name: 'Hạ Long',
            country: 'Việt Nam',
            region: 'Đông Nam Á',
            description: 'Vịnh Hạ Long là một vịnh nhỏ thuộc phần bờ tây vịnh Bắc Bộ tại khu vực biển Đông Bắc Việt Nam, bao gồm vùng biển đảo của thành phố Hạ Long thuộc tỉnh Quảng Ninh.',
            image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format',
            price: '3,500,000',
            duration: '3 ngày 2 đêm',
            tags: ['biển', 'di sản', 'thiên nhiên', 'ẩm thực']
        },
        {
            id: 2,
            name: 'Đà Nẵng',
            country: 'Việt Nam',
            region: 'Đông Nam Á',
            description: 'Đà Nẵng là thành phố lớn nhất miền Trung Việt Nam, nổi tiếng với các bãi biển đẹp, cầu Rồng và những địa điểm du lịch nổi tiếng như Bà Nà Hills, Ngũ Hành Sơn.',
            image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&auto=format',
            price: '4,200,000',
            duration: '4 ngày 3 đêm',
            tags: ['biển', 'thành phố', 'ẩm thực', 'cầu', 'núi']
        },
        {
            id: 3,
            name: 'Hội An',
            country: 'Việt Nam',
            region: 'Đông Nam Á',
            description: 'Hội An là một thành phố thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, gồm những di sản kiến trúc đã tồn tại qua nhiều thế kỷ.',
            image: 'https://images.unsplash.com/photo-1536698988377-6e5e7c3b3175?w=800&auto=format',
            price: '3,800,000',
            duration: '3 ngày 2 đêm',
            tags: ['phố cổ', 'di sản', 'lịch sử', 'ẩm thực']
        },
        {
            id: 4,
            name: 'Tokyo',
            country: 'Nhật Bản',
            region: 'Châu Á',
            description: 'Tokyo là thủ đô và là thành phố đông dân nhất của Nhật Bản. Tokyo mang đến sự kết hợp độc đáo giữa công nghệ hiện đại và văn hóa truyền thống Nhật Bản.',
            image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&auto=format',
            price: '25,500,000',
            duration: '7 ngày 6 đêm',
            tags: ['thành phố', 'hiện đại', 'văn hóa', 'ẩm thực']
        },
        {
            id: 5,
            name: 'Seoul',
            country: 'Hàn Quốc',
            region: 'Châu Á',
            description: 'Seoul là thủ đô và thành phố lớn nhất của Hàn Quốc. Seoul được biết đến với công nghệ tiên tiến, phong cách thời trang, ẩm thực phong phú và địa điểm du lịch đa dạng.',
            image: 'https://images.unsplash.com/photo-1538485399081-7c8ba554ace3?w=800&auto=format',
            price: '22,800,000',
            duration: '6 ngày 5 đêm',
            tags: ['thành phố', 'hiện đại', 'văn hóa', 'ẩm thực', 'mua sắm']
        },
        {
            id: 6,
            name: 'Barcelona',
            country: 'Tây Ban Nha',
            region: 'Châu Âu',
            description: 'Barcelona là thành phố lớn thứ hai của Tây Ban Nha, nổi tiếng với kiến trúc Gaudi, các bãi biển tuyệt đẹp và văn hóa Catalunya độc đáo.',
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&auto=format',
            price: '35,700,000',
            duration: '8 ngày 7 đêm',
            tags: ['biển', 'kiến trúc', 'văn hóa', 'ẩm thực', 'thành phố']
        },
        {
            id: 7,
            name: 'Madrid',
            country: 'Tây Ban Nha',
            region: 'Châu Âu',
            description: 'Madrid là thủ đô và thành phố lớn nhất của Tây Ban Nha. Madrid nổi tiếng với các bảo tàng nghệ thuật, kiến trúc lịch sử và ẩm thực Tây Ban Nha phong phú.',
            image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format',
            price: '36,200,000',
            duration: '8 ngày 7 đêm',
            tags: ['thành phố', 'nghệ thuật', 'lịch sử', 'ẩm thực']
        },
        {
            id: 8,
            name: 'Paris',
            country: 'Pháp',
            region: 'Châu Âu',
            description: 'Paris là thủ đô của Pháp, được mệnh danh là Kinh đô Ánh sáng. Paris nổi tiếng với tháp Eiffel, bảo tàng Louvre, và văn hóa ẩm thực đặc sắc.',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format',
            price: '38,900,000',
            duration: '8 ngày 7 đêm',
            tags: ['thành phố', 'nghệ thuật', 'lịch sử', 'ẩm thực', 'lãng mạn']
        },
        {
            id: 9,
            name: 'Rome',
            country: 'Ý',
            region: 'Châu Âu',
            description: 'Rome là thủ đô của Ý, nổi tiếng với đấu trường Colosseum, Vatican và văn hóa, ẩm thực Ý đặc trưng.',
            image: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=800&auto=format',
            price: '37,500,000',
            duration: '7 ngày 6 đêm',
            tags: ['thành phố', 'lịch sử', 'di sản', 'ẩm thực']
        },
        {
            id: 10,
            name: 'Bangkok',
            country: 'Thái Lan',
            region: 'Đông Nam Á',
            description: 'Bangkok là thủ đô của Thái Lan, nổi tiếng với các ngôi đền lộng lẫy, ẩm thực đường phố phong phú và cuộc sống về đêm sôi động.',
            image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&auto=format',
            price: '15,200,000',
            duration: '5 ngày 4 đêm',
            tags: ['thành phố', 'đền chùa', 'ẩm thực', 'mua sắm']
        },
        {
            id: 11,
            name: 'Singapore',
            country: 'Singapore',
            region: 'Đông Nam Á',
            description: 'Singapore là một quốc đảo và là một trong những thành phố hiện đại nhất châu Á, nổi tiếng với Gardens by the Bay, Marina Bay Sands và ẩm thực đa dạng.',
            image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format',
            price: '18,500,000',
            duration: '5 ngày 4 đêm',
            tags: ['thành phố', 'hiện đại', 'ẩm thực', 'mua sắm']
        },
        {
            id: 12,
            name: 'Đà Lạt',
            country: 'Việt Nam',
            region: 'Đông Nam Á',
            description: 'Đà Lạt là thành phố thuộc tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên, Việt Nam. Đà Lạt được biết đến với khí hậu mát mẻ, cảnh quan thiên nhiên đẹp và kiến trúc Pháp.',
            image: 'https://images.unsplash.com/photo-1570554520913-914bc963fcbb?w=800&auto=format',
            price: '3,900,000',
            duration: '4 ngày 3 đêm',
            tags: ['núi', 'thiên nhiên', 'mát mẻ', 'hoa', 'chợ']
        }
    ];
    
    // Search functionality
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const destination = document.getElementById('search-destination').value.toLowerCase();
            const region = document.getElementById('search-region').value;
            const duration = document.getElementById('search-duration').value;
            
            // Perform search
            const results = performSearch(destination, region, duration);
            
            // Display results
            displaySearchResults(results, true);
        });
    }
    
    // Quick search (if available in header/navigation)
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            if (query.length >= 2) {
                const results = destinations.filter(dest => 
                    dest.name.toLowerCase().includes(query) || 
                    dest.country.toLowerCase().includes(query) ||
                    dest.description.toLowerCase().includes(query)
                );
                
                // Display quick search results
                displayQuickSearchResults(results);
            } else {
                // Clear results if query is too short
                clearQuickSearchResults();
            }
        });
    }
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const currentItems = document.querySelectorAll('.search-result-item');
            const itemsToShow = 4; // Number of items to show when clicking "Load More"
            
            // Get current search parameters from data attributes
            const destination = this.getAttribute('data-destination') || '';
            const region = this.getAttribute('data-region') || '';
            const duration = this.getAttribute('data-duration') || '';
            
            // Perform search
            const results = performSearch(destination, region, duration);
            
            // Display next batch of results
            displayMoreResults(results, currentItems.length, itemsToShow);
            
            // Hide button if all results are shown
            if (currentItems.length + itemsToShow >= results.length) {
                this.style.display = 'none';
            }
        });
    }
    
    // Perform search based on criteria
    function performSearch(destination, region, duration) {
        return destinations.filter(dest => {
            const matchDestination = !destination || dest.name.toLowerCase().includes(destination) || dest.country.toLowerCase().includes(destination);
            const matchRegion = !region || region === 'all' || dest.region === region;
            const matchDuration = !duration || duration === 'all' || getDurationCategory(dest.duration) === duration;
            
            return matchDestination && matchRegion && matchDuration;
        });
    }
    
    // Display search results
    function displaySearchResults(results, clearPrevious = false) {
        if (!searchResults) return;
        
        if (clearPrevious) {
            searchResults.innerHTML = '';
        }
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search fa-3x mb-3"></i>
                    <h3>Không tìm thấy kết quả</h3>
                    <p>Vui lòng thử lại với tiêu chí khác.</p>
                </div>
            `;
            
            if (loadMoreBtn) {
                loadMoreBtn.style.display = 'none';
            }
            
            return;
        }
        
        const maxItemsToShow = 8; // Initial number of items to show
        const itemsToRender = results.slice(0, maxItemsToShow);
        
        // Render initial set of results
        itemsToRender.forEach(dest => {
            const resultItem = createResultItem(dest);
            searchResults.appendChild(resultItem);
        });
        
        // Show/hide load more button
        if (loadMoreBtn) {
            if (results.length > maxItemsToShow) {
                loadMoreBtn.style.display = 'block';
                
                // Store search parameters for load more functionality
                const searchDestination = document.getElementById('search-destination');
                const searchRegion = document.getElementById('search-region');
                const searchDuration = document.getElementById('search-duration');
                
                if (searchDestination && searchRegion && searchDuration) {
                    loadMoreBtn.setAttribute('data-destination', searchDestination.value.toLowerCase());
                    loadMoreBtn.setAttribute('data-region', searchRegion.value);
                    loadMoreBtn.setAttribute('data-duration', searchDuration.value);
                }
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }
    
    // Display more results when load more is clicked
    function displayMoreResults(results, startIndex, count) {
        const itemsToRender = results.slice(startIndex, startIndex + count);
        
        itemsToRender.forEach(dest => {
            const resultItem = createResultItem(dest);
            searchResults.appendChild(resultItem);
        });
    }
    
    // Create result item element
    function createResultItem(destination) {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        
        resultItem.innerHTML = `
            <div class="card">
                <div class="card-img">
                    <img src="${destination.image}" alt="${destination.name}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${destination.name}, ${destination.country}</h3>
                    <p class="card-text">${destination.description.substring(0, 100)}...</p>
                    <div class="d-flex justify-between align-center mb-3">
                        <div class="destination-price">${destination.price} VND</div>
                        <div class="destination-duration"><i class="far fa-clock mr-1"></i>${destination.duration}</div>
                    </div>
                    <a href="#" class="btn btn-primary">Xem chi tiết</a>
                </div>
            </div>
        `;
        
        return resultItem;
    }
    
    // Display quick search results
    function displayQuickSearchResults(results) {
        const quickSearchResults = document.querySelector('.quick-search-results');
        
        if (!quickSearchResults) return;
        
        quickSearchResults.innerHTML = '';
        quickSearchResults.style.display = 'block';
        
        if (results.length === 0) {
            quickSearchResults.innerHTML = '<div class="p-3">Không tìm thấy kết quả</div>';
            return;
        }
        
        const maxQuickResults = 5; // Maximum number of quick search results
        const itemsToRender = results.slice(0, maxQuickResults);
        
        itemsToRender.forEach(dest => {
            const resultItem = document.createElement('a');
            resultItem.href = `destination.html?id=${dest.id}`;
            resultItem.className = 'quick-search-item';
            
            resultItem.innerHTML = `
                <img src="${dest.image}" alt="${dest.name}" class="quick-search-img">
                <div class="quick-search-info">
                    <div class="quick-search-name">${dest.name}, ${dest.country}</div>
                    <div class="quick-search-price">${dest.price} VND</div>
                </div>
            `;
            
            quickSearchResults.appendChild(resultItem);
        });
        
        if (results.length > maxQuickResults) {
            const viewMoreLink = document.createElement('a');
            viewMoreLink.href = 'search.html';
            viewMoreLink.className = 'quick-search-view-more';
            viewMoreLink.textContent = `Xem thêm ${results.length - maxQuickResults} kết quả khác`;
            
            quickSearchResults.appendChild(viewMoreLink);
        }
    }
    
    // Clear quick search results
    function clearQuickSearchResults() {
        const quickSearchResults = document.querySelector('.quick-search-results');
        
        if (quickSearchResults) {
            quickSearchResults.innerHTML = '';
            quickSearchResults.style.display = 'none';
        }
    }
    
    // Handle click outside of quick search results to close them
    document.addEventListener('click', function(event) {
        const quickSearchResults = document.querySelector('.quick-search-results');
        const searchInput = document.querySelector('.search-input');
        
        if (quickSearchResults && searchInput) {
            if (!quickSearchResults.contains(event.target) && event.target !== searchInput) {
                clearQuickSearchResults();
            }
        }
    });
    
    // Helper function to categorize duration
    function getDurationCategory(durationStr) {
        const days = parseInt(durationStr.match(/\d+/)[0]);
        
        if (days <= 3) return 'short';
        if (days <= 7) return 'medium';
        return 'long';
    }
});
