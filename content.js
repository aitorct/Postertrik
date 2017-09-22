chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.command && (msg.command == "postMsg")) {
    document.getElementById("vB_Editor_QR_textarea").value = msg.title;
    document.getElementById('qr_submit').click();
    sendResponse("Successfully posted '" + msg.title + "'");
  }
});