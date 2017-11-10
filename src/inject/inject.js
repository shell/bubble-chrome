chrome.extension.sendMessage({
		origin: window.location.origin
	}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval)

			var container = response.contentBlock
			var searchSelector = response.contentClass
			var filters = response.contentFilter

			$(container).map(function() {
				body = $(this)
				var search = body.find(searchSelector)

				filters.forEach(function(filter) {
					if (search.text().includes(filter)) {
						body.hide()
					}
				})
			})
		}
	}, 10)
})