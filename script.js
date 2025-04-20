document.addEventListener("DOMContentLoaded", () => {
    const chatbox = document.querySelector(".chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage("You", message);
            generateBotResponse(message);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && userInput.value.trim() !== "") {
            event.preventDefault();
            sendBtn.click();
        }
    });

    function addMessage(sender, text) {
        const msg = document.createElement('div');
        msg.className = `message ${sender === "You" ? "user" : "bot"}`;
        msg.textContent = `${text}`;
        chatbox.appendChild(msg);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function generateBotResponse(userMessage) {
        fetch("http://localhost:8080/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: userMessage
        })
        .then(response => response.text())
        .then(botMessage => {
            addMessage("Bot", botMessage);
        })
        .catch(error => {
            console.error("Error:", error);
            addMessage("Bot", "Sorry, something went wrong.");
        });
    }
});
