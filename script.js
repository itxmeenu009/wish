
// Birthday date configuration
let datetxt = "25 December 2025";
let datatxtletter = "Happy Birthday Abdullah! May all your dreams come true.";
let titleLetter = "To Abdullah";

// Letter popup functionality
var intervalContent;
var intervalTitle;

$("#btn__letter").on("click", function () {
    $(".box__letter").slideDown()
    setTimeout(function () {
        $(".letter__border").slideDown();
    }, 1000)
    
    // Show hearts and other elements
    setTimeout(function () {
        document.querySelector("#heart__letter").classList.add("animationOp");
        document.querySelector(".love__img").classList.add("animationOp");
        document.querySelector("#mewmew").classList.add("animationOp");
    }, 500)
    
    setTimeout(function () {
        document.querySelectorAll(".heart").forEach((item) => {
            item.classList.add("animation")
        })
    }, 1000)
})

$(".close").on("click", function () {
    clearInterval(intervalContent)
    document.querySelector("#heart__letter").classList.remove("animationOp");
    document.querySelector(".love__img").classList.remove("animationOp");
    document.querySelector("#mewmew").classList.remove("animationOp");
    document.querySelectorAll(".heart").forEach((item) => {
        item.classList.remove("animation")
    })
    $(".box__letter").slideUp();
    $(".letter__border").slideUp();
})

// Birthday card popup
let mailBox = document.querySelector('.mail')
let boxmail = document.querySelector('.boxMail')
var close = document.querySelector('.fa-xmark')
mailBox.onclick = function () {
    mailBox.classList.toggle('active')
    boxmail.classList.add('active')
}

close.addEventListener('click', function () {
    boxmail.classList.remove('active')
})

// Auto-play background music on page load
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        // Set initial volume
        backgroundMusic.volume = 0.3;
        
        // Create music control button
        const musicBtn = document.createElement('button');
        musicBtn.id = 'musicControlBtn';
        musicBtn.innerHTML = '<i class="fas fa-music"></i><span>Pause Music</span>';
        
        // Add styles for the button
        const style = document.createElement('style');
        style.textContent = `
            #musicControlBtn {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(45deg, #6a0dad, #9b4dca);
                color: white;
                border: 2px solid #5a2d8c;
                padding: 12px 20px;
                border-radius: 50px;
                cursor: pointer;
                z-index: 1000;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                box-shadow: 0 5px 15px rgba(106, 13, 173, 0.5);
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            
            #musicControlBtn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(154, 77, 202, 0.6);
                background: linear-gradient(45deg, #9b4dca, #6a0dad);
            }
            
            @media screen and (max-width: 768px) {
                #musicControlBtn {
                    padding: 10px 15px;
                    font-size: 12px;
                    bottom: 10px;
                    right: 10px;
                }
            }
            
            @media screen and (max-width: 480px) {
                #musicControlBtn {
                    padding: 8px 12px;
                    font-size: 11px;
                    bottom: 5px;
                    right: 5px;
                }
                
                #musicControlBtn span {
                    display: none;
                }
                
                #musicControlBtn i {
                    font-size: 14px;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(musicBtn);
        
        // Music control functionality
        musicBtn.addEventListener('click', function() {
            if (backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    musicBtn.innerHTML = '<i class="fas fa-music"></i><span>Pause Music</span>';
                    musicBtn.style.background = 'linear-gradient(45deg, #6a0dad, #9b4dca)';
                }).catch(error => {
                    console.log('Audio playback failed:', error);
                });
            } else {
                backgroundMusic.pause();
                musicBtn.innerHTML = '<i class="fas fa-play"></i><span>Play Music</span>';
                musicBtn.style.background = 'linear-gradient(45deg, #9b4dca, #6a0dad)';
            }
        });
        
        // Try to play music immediately
        backgroundMusic.play().catch(error => {
            console.log('Autoplay prevented, will play after user interaction:', error);
            
            // If autoplay is blocked, update button text
            musicBtn.innerHTML = '<i class="fas fa-play"></i><span>Play Music</span>';
            musicBtn.style.background = 'linear-gradient(45deg, #9b4dca, #6a0dad)';
            
            // Enable play on any click
            const enableAudio = () => {
                backgroundMusic.play().then(() => {
                    musicBtn.innerHTML = '<i class="fas fa-music"></i><span>Pause Music</span>';
                    musicBtn.style.background = 'linear-gradient(45deg, #6a0dad, #9b4dca)';
                });
                document.removeEventListener('click', enableAudio);
            };
            
            document.addEventListener('click', enableAudio);
        });
    }
});
