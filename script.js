var slides = document.querySelectorAll('#video-slideshow .video-slide');
                    var currentSlide = 0;
                    function changeSlide(n) {
                        slides[currentSlide].className = 'video-slide';
                        currentSlide = (n + slides.length) % slides.length;
                        slides[currentSlide].className = 'video-slide active';
                    }
                    document.querySelector('#video-slideshow').addEventListener('mouseover', function(e) {
                        changeSlide(currentSlide);
                    });
                    document.querySelectorAll('#video-slideshow .video-slide:not(.active)').forEach(function(el) {
                        el.addEventListener('click', function() {
                            changeSlide(slides.indexOf(this));
                        });
                    });
