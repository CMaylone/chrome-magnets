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
    var url = serverUrl.replace('&', '%26') + '/command/download';
    var options = {
      url: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: "urls="+info.linkUrl,
      responseCallback: function(response) {
        console.log("Response: %s", response);
      }
    };

    sendRequest(options);
  });
}

function sendRequest(options) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    // Ready state 4 means the request is finished and the response is ready.
    if (xhr.readyState === 4) {
      if(xhr.status === 200) {
        options.responseCallback(xhr.responseText);
      } else {
        // TODO: Handle bad requests.
        console.log("Error %s", xhr.statusText);
      }

    }
  };

  xhr.open(options.method, options.url, true);

  if(options.headers) {
    for(var header in options.headers) {
      xhr.setRequestHeader(header, options.headers[header]);
    }
  }

  xhr.send(options.data);
}

function getServerUrl(callback) {
  chrome.storage.sync.get({
    serverUrl: 'none' // default value
  }, function(items) {
    callback(items.serverUrl);
  });
}
