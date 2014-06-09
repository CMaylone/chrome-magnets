function saveOptions() {
  var server = $("#serverUrl").val();

  // Save settings
  chrome.storage.sync.set({
    serverUrl: server
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    serverUrl: '--none--'
  }, function(items) {
    $("#serverUrl").val(items.serverUrl);
  });
}

$(document).ready(restoreOptions);
$("#save").click(saveOptions);
