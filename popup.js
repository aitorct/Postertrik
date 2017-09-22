var posts = ["msg1", "msg2"];

document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function () {
    chrome.tabs.getSelected(null, function (tab) {
      if (tab.url.indexOf("https://www.forocoches.com/foro/showthread.php?") !== -1) {
        document.getElementById('status').innerHTML = "En proceso...";
        chrome.tabs.sendMessage(tab.id, {
          command: "postMsg",
          title: getRandomPost()
        }, function (msg) {
          console.log("Result message:", msg);
          document.getElementById('status').innerHTML = msg;
        });
        document.getElementById("checkPage").disabled = true;
        setTimeout(function () {
          document.getElementById("checkPage").disabled = false;
        }, 30000);
      } else {
        document.getElementById('status').innerHTML = "NOT FOROCOCHES";
      }
    });
  }, false);
}, false);

function getRandomPost() {
  return posts[Math.floor(Math.random() * (posts.length))];
}