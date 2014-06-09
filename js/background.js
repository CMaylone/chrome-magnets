// chrome.webRequest.onBeforeRequest.addListener(
//   function(info) {
//     if (info.url.indexOf('.torrent') != -1) {
//       console.log('Found Torrent');
//       return {cancel: true};
//     }
//   },
//   {urls: ["<all_urls>"]},
//   ["blocking"]
// );

chrome.contextMenus.create({
  id:'send torrent',
  title: "Send torrent to server",
  contexts: ["link"],
  targetUrlPatterns: ['*://*/*.torrent'],
  onclick: handleTorrent
});

// Handle magnet links
chrome.contextMenus.create({
  id:'send magnet',
  title: 'Send magnet torrent to server',
  contexts: ['link'],
  targetUrlPatterns: ['magnet:*'],
  onclick: handleTorrent
});


function handleTorrent(info, tab) {
  console.log(info);

  getServerUrl(function(serverUrl) {
    var requestUrl = serverUrl.replace('&', '%26') + '/command/download';

    var http = new XMLHttpRequest();
    http.open('POST', requestUrl, true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.send("urls="+info.linkUrl);
  });
}

function getServerUrl(callback) {
  chrome.storage.sync.get({
    serverUrl: 'none' // default value
  }, function(items) {
    callback(items.serverUrl);
  });
}
