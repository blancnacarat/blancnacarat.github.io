$.ajax({ 
    url: "http://grounded-will-216322.appspot.com", 
    dataType: 'jsonp', 
    success: function(headers) {
        language = headers['Accept-Language'];
        //nowDoSomethingWithIt(language);
        if (language = 'fr'){
        	setTimeout(function() {
  			window.location.href = "https://blancnacarat.github.io/fr/";
			}, 3500);
        } else{
        	setTimeout(function() {
  			window.location.href = "https://blancnacarat.github.io/en/";
			}, 3500);
        }
    }
});