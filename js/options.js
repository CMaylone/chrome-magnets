// Save all options.
function saveOptions() {
  var server = $("#serverUrl").val();
  var serverType = $("#serverType").val();

  chrome.storage.sync.set({
    serverUrl: server,
    serverType: serverType
  });
}

// Restore saved options.
function restoreOptions() {
  chrome.storage.sync.get({
    serverUrl: '',
    serverType: ''
  }, function(items) {
    $("#serverUrl").val(items.serverUrl);
    $("#serverType").val(items.serverType);
  });
}

$(document).ready(restoreOptions);
$("#save").click(saveOptions);
