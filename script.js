document.addEventListener("DOMContentLoaded",() => {
const chatbox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const responses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! What can I do for you?",
    "projects": "Keerthan has built a Hospital Management System using Spring Boot and Angular.",
    "experience": "He's working at Vaco Binary Semantics as a Quality Analyst for Walmart.",
    "skills": "Keerthan knows Java, Spring Boot, Angular, SQL, and more!",
    "education": "He graduated from CMR College of Engineering and Technology with a B.Tech in CSE.",
    "how are you?": "I'm just a program, but thanks for asking! How can I help you?",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm sorry, I don't understand that. Can you please rephrase?"
};

sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim(); // Fixed here
    if (message) {
        addmessage(message, 'user');
        respond(message.toLowerCase());
        userInput.value = '';
    }
});

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent form submission if inside a form
        sendBtn.click();         // Trigger the send button click
    }
});

function addmessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `message ${type}`; // Fixed here
    msg.textContent = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight; // Fixed here
}

function respond(input) {
    const reply = responses[input] || responses["default"]; // Fallback to default message
    setTimeout(() => {
        addmessage(reply, 'bot');
    }, 500);
}
});