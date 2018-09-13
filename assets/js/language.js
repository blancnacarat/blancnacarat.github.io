$.ajax({ 
    url: "https://grounded-will-216322.appspot.com", 
    dataType: 'jsonp', 
    success: function(headers) {
        language = headers['Accept-Language'];
        //nowDoSomethingWithIt(language);
        if (language = 'fr' || language = 'fr-be' || language = 'fr-ca' || language = 'fr-fr' || language = 'fr-lu' || language = 'fr-mc' || language = 'fr-ch'){
        	console.log("test");
        	console.log(language);
        	setTimeout(function() {
  			window.location.href = "https://blancnacarat.github.io/fr/";
			}, 3500);
        } else{
        	console.log("test else");
        	console.log(language);
        	setTimeout(function() {
  			window.location.href = "https://blancnacarat.github.io/en/";
			}, 3500);
        }
    }
});