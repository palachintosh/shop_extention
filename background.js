// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if(request.cmd == "read_file") {
//         $.ajax({
//             url: chrome.extension.getURL("/styles/alert_message.html"),
//             dataType: "html",
//             success: sendResponse
//         });
//        return true;
//     }
// })