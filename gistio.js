/*
Copyright 2013 Sadique Ali
http://sadique.io
*/

(function () {
    $(document).ready(function() {
	var converter = new Showdown.converter();

	var renderTitle = function(title) {
	    var gistTitle = $("<h1>");
	    gistTitle.text(title);
	    gistTitle.attr("class", "title");
	    $("#content").append(gistTitle);
	};

	var renderFooter = function() {
	    var footer = $("<div>");
	    footer.attr("class", "footer");
	    footer.html('<p>Coded by <a href="http://sadique.io">Sadique Ali</a>. Checkout the <a href="https://github.com/sdqali/gistblog">source code</a>.</p>');
	    $("#content").append(footer);
	};

	var renderMain = function(content) {
	    var mainDiv = $("<div>");
	    mainDiv.html(content);
	    $("#content").append(mainDiv);
	};

	var showError = function() {
	    renderTitle("Gist Blog - Blogging for Hackers");
	    renderMain("Failed to load Gist. Please check the ID.");
	    renderFooter();
	};

	var renderGist = function(title, gistFile){
	    renderTitle(title);
	    renderMain(converter.makeHtml(gistFile.content));
	    renderFooter();
	};

	var loadGist = function(url) {
	    $.getJSON(url)
		.done(function(gist) {
		    var mainFile;
		    for(var file in gist.files) {
			mainFile = gist.files[file];
			break;
		    }
		    renderGist(gist.description, mainFile);
		})
		.fail(function(){
		    showError();
		});

	};

	var url = window.location.href;
	var match = url.match(/#(.*)/);
	if(match) {
	    var gistId = match[1];
	    var gistUrl = "https://api.github.com/gists/".concat(gistId);
	    loadGist(gistUrl);
	} else {
	    var gistUrl = "https://api.github.com/gists/6756799";
	    loadGist(gistUrl);
	}
    });
}) ();
