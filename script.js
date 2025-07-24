document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('show');
        });
    }

    // Chat form logic
    const usernameInput = document.getElementById("username");
    const startChatBtn = document.getElementById("start-chat");
    const userInit = document.getElementById("user-init");
    const chatInterface = document.getElementById("chat-interface");
    const userDisplay = document.getElementById("user-display");
    const form = document.getElementById("chat-form");
    const messagesList = document.getElementById("chat-messages");

    let currentUser = "";

    if (startChatBtn && usernameInput && userInit && chatInterface && userDisplay) {
        startChatBtn.addEventListener("click", function () {
            const name = usernameInput.value.trim();
            if (name) {
                currentUser = name;
                userDisplay.textContent = currentUser;
                userInit.style.display = "none";
                chatInterface.style.display = "block";
            }
        });
    }

    if (form && messagesList) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const message = document.getElementById("message").value.trim();

            if (currentUser && message) {
                const li = document.createElement("li");
                li.textContent = `${currentUser}: ${message}`;
                messagesList.appendChild(li);

                document.getElementById("message").value = "";
                
                // Auto scroll to bottom
                messagesList.scrollTop = messagesList.scrollHeight;
            }
        });
    }

    // Emoticon picker
    document.querySelectorAll('.emoticon').forEach(emoticon => {
        emoticon.addEventListener('click', () => {
            const messageBox = document.getElementById('message');
            messageBox.value += emoticon.textContent;
            messageBox.focus();
        });
    });

    // External links
    document.querySelectorAll('.btn-external').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const url = this.dataset.url;
            if (url) {
                e.preventDefault();
                window.open(url, '_blank');
            }
        });
    });
});

// Audio function
function playAudio(button) {
    const audio = button.parentElement.querySelector('audio');
    if (audio) {
        audio.currentTime = 0;
        audio.play();

        button.style.color = '#c0392b';
        setTimeout(() => {
            button.style.color = '';
        }, 300);
    }
}