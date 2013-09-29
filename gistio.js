(function () {
    $(document).ready(function() {
	var converter = new Showdown.converter();

	var setContent = function(content) {
	    $("#content").text(content);
	};

	var renderGist = function(title, gistFile){
	    var gistTitle = $("<h1>");
	    gistTitle.text(title);
	    $("#content").append(gistTitle);

	    var gistBody = $("<div>");
	    gistBody.html(converter.makeHtml(gistFile.content));

	    $("#content").append(gistBody);
	};

	var url = window.location.href;
	var match = url.match(/#(.*)/);
	if(match) {
	    var gistId = match[1];
	    var gistUrl = "https://api.github.com/gists/".concat(gistId);
	    var testUrl = "gist.json";
	    $.getJSON(gistUrl)
		.done(function(gist) {
		    var mainFile;
		    for(var file in gist.files) {
			mainFile = gist.files[file];
			break;
		    }
		    renderGist(gist.description, mainFile);
		})
		.fail(function(){
		    setContent("Failed to load Gist. Please check the ID.");
		});
	} else {
	    setContent("Help goes here!");
	}
    });
}) ();
