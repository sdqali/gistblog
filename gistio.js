(function () {
    $(document).ready(function() {
	var setContent = function(content) {
	    $("#content").text(content);
	};

	var url = window.location.href;
	var match = url.match(/#(.*)/);
	if(match) {
	    var gistId = match[1];
	    var gistUrl = "https://api.github.com/gists/".concat(gistId);
	    var testUrl = "gist.json";
	    $.getJSON(testUrl)
		.done(function(gist) {
		    var mainFile;
		    for(var file in gist.files) {
			mainFile = gist.files[file];
			break;
		    }
		    foo = mainFile;
		    setContent(mainFile.content);
		})
		.fail(function(){
		    setContent("Failed to load Gist. Please check the ID.");
		});
	} else {
	    setContent("Help goes here!");
	}
    });
}) ();
