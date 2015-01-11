chrome.downloads.onChanged.addListener(function(downloadDelta) {
	chrome.downloads.search({}, function(items) {
		var done = true;
		for (var i = 0; i < items.length; ++i) {
			if (items[i].state != "complete")
				done = false;
		}
		if (done) {
			setTimeout(function() {
				chrome.browsingData.removeDownloads({});
			}, 3000);
		}
	});
}); 
