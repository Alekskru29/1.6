const openPhonePopupBtn = document.getElementById('open-phone-popup');
const openChatPopupBtn = document.getElementById('open-chat-popup');
const openPhoneBtn = document.getElementById('open-phone');
const openChatBtn = document.getElementById('open-chat');
const phonePopup = document.getElementById('phone-popup');
const chatPopup = document.getElementById('chat-popup');
const openPhoneModalBtn = document.getElementById('show-phone-modal');
const openChatModalBtn = document.getElementById('show-chat-modal');
const closePhonePopupBtn = document.getElementById('close-phone-popup');
const closeChatPopupBtn = document.getElementById('close-chat-popup');

function openPopup(popup) {
  popup.style.display = 'flex';
}

function closePopup(popup) {
  popup.style.display = 'none';
}

openPhonePopupBtn.addEventListener('click', () => openPopup(phonePopup));
openChatPopupBtn.addEventListener('click', () => openPopup(chatPopup));
openPhoneBtn.addEventListener('click', () => openPopup(phonePopup));
openChatBtn.addEventListener('click', () => openPopup(chatPopup));
openPhoneModalBtn.addEventListener('click', () => openPopup(phonePopup));
openChatModalBtn.addEventListener('click', () => openPopup(chatPopup));
closePhonePopupBtn.addEventListener('click', () => closePopup(phonePopup));
closeChatPopupBtn.addEventListener('click', () => closePopup(chatPopup));