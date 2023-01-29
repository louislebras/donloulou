var moreMessage = document.querySelector(".buttonmoremessage");
var lessMessage = document.querySelector(".buttonlessmessage");
var nav = document.querySelector(".container-message");

moreMessage.onclick = function () {
  nav.classList.add("downmessage");
};
