document.addEventListener("DOMContentLoaded", function () {
    loadChat();
});

function loadChat() {
    const chatBox = document.getElementById("chat-box");
    const messages = JSON.parse(localStorage.getItem("chat_messages")) || [];

    messages.forEach(message => {
        appendMessage(message);
    });

    scrollToBottom();
}

function sendMessage() {
    const input = document.getElementById("message-input");
    const message = input.value.trim();

    if (message !== "") {
        appendMessage(message);
        saveMessage(message);
        input.value = "";
        scrollToBottom();
    }
}

function appendMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = "chat-message";
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}

function saveMessage(message) {
    const messages = JSON.parse(localStorage.getItem("chat_messages")) || [];
    messages.push(message);
    localStorage.setItem("chat_messages", JSON.stringify(messages));
}

function scrollToBottom() {
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}
