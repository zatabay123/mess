// Main JavaScript for the travel website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile toggle & navigation
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navContainer = document.querySelector('.nav-container');
    const pageOverlay = document.querySelector('.page-overlay');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navContainer.classList.toggle('active');
            pageOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    if (pageOverlay) {
        pageOverlay.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navContainer.classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
    
    // Dropdown toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const parent = this.closest('.nav-item');
                parent.classList.toggle('active');
            }
        });
    });
    
    // Search overlay toggle
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            searchOverlay.classList.add('active');
            document.querySelector('.search-input').focus();
            document.body.classList.add('no-scroll');
        });
    }
    
    if (closeSearch && searchOverlay) {
        closeSearch.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
    
    // Close search on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize Slick Carousel if available
    if (typeof $.fn.slick !== 'undefined') {
        // Hero Carousel
        $('.hero-carousel').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
        });
        
        // Testimonials Carousel
        $('.testimonials-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        });
        
        // Destinations Carousel
        $('.destinations-carousel').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    } else {
        console.log('Slick carousel not loaded');
    }
    
    // Handle newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // Save email to localStorage
                const savedEmails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];
                savedEmails.push(email);
                localStorage.setItem('newsletterEmails', JSON.stringify(savedEmails));
                
                // Show success message
                alert('Cảm ơn bạn đã đăng ký nhận bản tin của chúng tôi!');
                this.reset();
            } else {
                alert('Vui lòng nhập địa chỉ email hợp lệ.');
            }
        });
    }
    
    // Initialize countdown timers
    const countdownElements = document.querySelectorAll('.countdown');
    countdownElements.forEach(element => {
        const targetDate = new Date(element.getAttribute('data-target-date'));
        
        if (targetDate) {
            initCountdown(element, targetDate);
        }
    });
    
    // Initialize chatbox functionality
    initChatbox();
    
    // Animate elements on scroll
    initScrollAnimations();
});

// Email validation
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Initialize countdown timer
function initCountdown(element, targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance <= 0) {
            element.innerHTML = 'Đã hết hạn';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        element.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-value">${days}</span>
                <span class="countdown-label">Ngày</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value">${hours}</span>
                <span class="countdown-label">Giờ</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value">${minutes}</span>
                <span class="countdown-label">Phút</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value">${seconds}</span>
                <span class="countdown-label">Giây</span>
            </div>
        `;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize chatbox
function initChatbox() {
    const chatbox = document.querySelector('.chatbox');
    const chatboxToggle = document.querySelector('.chatbox-toggle');
    const chatboxClose = document.querySelector('.chatbox-close');
    const chatInput = document.querySelector('.chat-input');
    const chatSubmit = document.querySelector('.chat-submit');
    const chatMessages = document.querySelector('.chatbox-messages');
    const chatQuickReplies = document.querySelectorAll('.quick-reply');
    const chatTyping = document.querySelector('.chatbox-typing');
    
    if (chatboxToggle) {
        chatboxToggle.addEventListener('click', function() {
            chatbox.classList.add('open');
        });
    }
    
    if (chatboxClose) {
        chatboxClose.addEventListener('click', function() {
            chatbox.classList.remove('open');
        });
    }
    
    // Handle chat submission via button click
    if (chatSubmit) {
        chatSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            sendMessage();
        });
    }
    
    // Handle chat submission via Enter key
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Handle quick replies
    if (chatQuickReplies) {
        chatQuickReplies.forEach(reply => {
            reply.addEventListener('click', function() {
                const message = this.textContent.trim();
                sendMessage(message);
            });
        });
    }
    
    function sendMessage(customMessage = null) {
        const message = customMessage || chatInput.value.trim();
        
        if (message) {
            // Add user message with current time
            const now = new Date();
            const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
            
            addUserMessage(message, timeString);
            
            // Clear input if it's not a quick reply
            if (!customMessage) {
                chatInput.value = '';
            }
            
            // Show typing indicator
            if (chatTyping) {
                chatTyping.style.display = 'flex';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            // Simulate bot response after a short delay
            setTimeout(() => {
                if (chatTyping) {
                    chatTyping.style.display = 'none';
                }
                processChatbotResponse(message);
            }, 1500);
        }
    }
    
    function addUserMessage(message, time) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message message-user';
        
        messageElement.innerHTML = `
            <div class="message-content">${message}</div>
            <div class="message-time">${time}</div>
        `;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Add a message to the chatbox
function addMessage(message, sender) {
    const chatMessages = document.querySelector('.chatbox-messages');
    
    const messageElement = document.createElement('div');
    messageElement.className = `message message-${sender}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = message;
    
    messageElement.appendChild(messageContent);
    chatMessages.appendChild(messageElement);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Process chatbot response
function processChatbotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    let botResponse = '';
    
    // Simple response logic based on keywords
    if (userMessage.includes('xin chào') || userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('chào')) {
        botResponse = 'Xin chào! Tôi là trợ lý ảo của Cà Rốt Nè. Rất vui được hỗ trợ bạn. Bạn muốn tìm hiểu về điểm du lịch nào?';
    } 
    else if (userMessage.includes('tour nhật bản') || userMessage.includes('nhật') || userMessage.includes('tokyo')) {
        botResponse = 'Tour Nhật Bản của chúng tôi có nhiều lựa chọn hấp dẫn:<br><br>✓ <b>Tour Tokyo cơ bản (5N4Đ):</b> 27,5 triệu/người<br>✓ <b>Tour Tokyo-Osaka-Kyoto (7N6Đ):</b> 35,8 triệu/người<br>✓ <b>Tour trọn gói (có JR Pass):</b> 42,5 triệu/người<br><br>Bạn muốn biết thêm chi tiết về tour nào?';
    } 
    else if (userMessage.includes('tour hàn quốc') || userMessage.includes('hàn') || userMessage.includes('seoul')) {
        botResponse = 'Tour Hàn Quốc của chúng tôi đang có chương trình ưu đãi đặc biệt:<br><br>✓ <b>Tour Seoul (4N3Đ):</b> 21,5 triệu/người<br>✓ <b>Tour Seoul-Nami-Everland (5N4Đ):</b> 26,8 triệu/người<br>✓ <b>Tour trọn gói mùa hoa anh đào:</b> 31,5 triệu/người<br><br>Bạn quan tâm đến lịch trình nào?';
    } 
    else if (userMessage.includes('tour trong nước') || userMessage.includes('việt nam')) {
        botResponse = 'Chúng tôi có nhiều tour hấp dẫn tại Việt Nam:<br><br>✓ <b>Tour Hạ Long (2N1Đ):</b> từ 2,5 triệu/người<br>✓ <b>Tour Đà Nẵng-Hội An-Huế (4N3Đ):</b> từ 5,8 triệu/người<br>✓ <b>Tour Phú Quốc (3N2Đ):</b> từ 4,5 triệu/người<br>✓ <b>Tour Sapa (3N2Đ):</b> từ 3,2 triệu/người<br><br>Bạn muốn tham khảo chi tiết về tour nào?';
    } 
    else if (userMessage.includes('tây ban nha') || userMessage.includes('spain')) {
        botResponse = 'Tour Tây Ban Nha của chúng tôi bao gồm những thành phố tuyệt vời:<br><br>✓ <b>Tour Madrid-Barcelona (7N6Đ):</b> 65,5 triệu/người<br>✓ <b>Tour Madrid-Barcelona-Seville (10N9Đ):</b> 82,8 triệu/người<br><br>Các tour đều bao gồm vé máy bay khứ hồi, khách sạn 4 sao, ăn uống và hướng dẫn viên. Bạn muốn biết thêm thông tin?';
    } 
    else if (userMessage.includes('báo giá') || userMessage.includes('giá') || userMessage.includes('chi phí')) {
        botResponse = 'Giá các tour du lịch của chúng tôi phụ thuộc vào điểm đến, thời gian và dịch vụ đi kèm. Một số tour tiêu biểu:<br><br>✓ <b>Tour trong nước:</b> từ 2,5 - 15 triệu/người<br>✓ <b>Tour Đông Nam Á:</b> từ 8 - 25 triệu/người<br>✓ <b>Tour Châu Á:</b> từ 18 - 45 triệu/người<br>✓ <b>Tour Châu Âu:</b> từ 55 - 120 triệu/người<br><br>Bạn quan tâm đến khu vực nào để tôi báo giá chi tiết hơn?';
    } 
    else if (userMessage.includes('khách sạn') || userMessage.includes('lưu trú') || userMessage.includes('nghỉ')) {
        botResponse = 'Chúng tôi đảm bảo chất lượng lưu trú với các đối tác khách sạn uy tín:<br><br>✓ <b>Tour trong nước:</b> Khách sạn 3-5 sao tùy gói<br>✓ <b>Tour quốc tế:</b> Khách sạn 4-5 sao tại trung tâm<br><br>Tất cả đều đạt tiêu chuẩn chất lượng cao về vệ sinh, an ninh và tiện nghi. Bạn có yêu cầu đặc biệt về nơi lưu trú không?';
    } 
    else if (userMessage.includes('đặt tour') || userMessage.includes('đăng ký') || userMessage.includes('đặt chỗ') || userMessage.includes('liên hệ tư vấn viên')) {
        botResponse = 'Để đặt tour, bạn có thể:<br><br>✓ <b>Hotline:</b> 1900-1234 (8:00 - 22:00 hàng ngày)<br>✓ <b>Email:</b> booking@carotne.vn<br>✓ <b>Văn phòng:</b> 123 Nguyễn Huệ, Quận 1, TP.HCM<br>✓ <b>Chat Zalo:</b> Cà Rốt Nè Travel<br><br>Hoặc để lại số điện thoại, tư vấn viên sẽ liên hệ lại trong vòng 30 phút!';
    } 
    else if (userMessage.includes('cảm ơn') || userMessage.includes('thank')) {
        botResponse = 'Không có gì! Rất vui khi được hỗ trợ bạn. Nếu còn thắc mắc gì, hãy tiếp tục hỏi tôi hoặc liên hệ tư vấn viên qua số 1900-1234 nhé!';
    } 
    else if (userMessage.includes('thời tiết') || userMessage.includes('mùa')) {
        botResponse = 'Một số thông tin về thời tiết tại các điểm du lịch phổ biến:<br><br>✓ <b>Nhật Bản:</b> Đẹp nhất vào mùa hoa anh đào (tháng 3-4) và mùa lá đỏ (tháng 10-11)<br>✓ <b>Hàn Quốc:</b> Tương tự Nhật Bản, đẹp vào mùa xuân và thu<br>✓ <b>Đông Nam Á:</b> Tốt nhất là mùa khô (tháng 11-4)<br>✓ <b>Châu Âu:</b> Đẹp nhất vào mùa hè (tháng 6-8)<br><br>Bạn dự định đi du lịch vào thời gian nào?';
    }
    else if (userMessage.includes('thời gian') || userMessage.includes('lịch trình')) {
        botResponse = 'Thời gian lý tưởng cho các tour của chúng tôi:<br><br>✓ <b>Tour trong nước:</b> 2-5 ngày<br>✓ <b>Tour Đông Nam Á:</b> 4-6 ngày<br>✓ <b>Tour Châu Á:</b> 5-8 ngày<br>✓ <b>Tour Châu Âu:</b> 10-15 ngày<br><br>Mỗi tour được thiết kế để cân bằng giữa tham quan và nghỉ ngơi. Bạn quan tâm đến lịch trình cụ thể nào?';
    }
    else {
        botResponse = 'Rất tiếc, tôi chưa hiểu rõ yêu cầu của bạn. Bạn có thể hỏi về:<br><br>• Thông tin tour Nhật Bản, Hàn Quốc<br>• Tour trong nước (Việt Nam)<br>• Báo giá các tour<br>• Thông tin khách sạn, lịch trình<br>• Cách đặt tour<br><br>Hoặc chọn một trong các chủ đề phía dưới!';
    }
    
    // Add bot response with avatar
    addBotMessageWithAvatar(botResponse, timeString);
}

// Add a bot message with avatar
function addBotMessageWithAvatar(message, time) {
    const chatMessages = document.querySelector('.chatbox-messages');
    
    const messageElement = document.createElement('div');
    messageElement.className = 'message message-bot';
    
    messageElement.innerHTML = `
        <div class="d-flex align-center">
            <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Support" class="message-avatar">
            <div class="message-content">${message}</div>
        </div>
        <div class="message-time">${time}</div>
    `;
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}
