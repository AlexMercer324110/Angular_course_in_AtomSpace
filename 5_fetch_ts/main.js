fetch('https://api.punkapi.com/v2/beers')
    .then(function (response) { return response.json(); })
    .then(function (beers) {
    var cards = document.getElementById('cards');
    for (var _i = 0, beers_1 = beers; _i < beers_1.length; _i++) {
        var beer = beers_1[_i];
        cards.innerHTML += "\n\t\t\t\t<div class=\"card mb-3\">\n\t\t\t\t  <div class=\"row g-0\">\n\t\t\t\t    <div class=\"col-md-3\">\n\t\t\t\t      <img src=\"".concat(beer.image_url, "\" class=\"img-fluid rounded-start\" alt=\"...\">\n\t\t\t\t    </div>\n\t\t\t\t    <div class=\"col-md-8\">\n\t\t\t\t      <div class=\"card-body\">\n\t\t\t\t        <h5 class=\"card-title\">").concat(beer.name, "</h5>\n\t\t\t\t        <p class=\"card-text\">").concat(beer.tagline, "</p>\n\t\t\t\t        <p class=\"card-text\"><small class=\"text-muted\">").concat(beer.description, "</small></p>\n\t\t\t\t        <p class=\"card-text\"><small class=\"text-muted\">").concat(beer.first_brewed, "</small></p>\n\t\t\t\t      </div>\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t\t</div>");
    }
});
