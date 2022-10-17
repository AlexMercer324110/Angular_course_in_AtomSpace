interface Beer {
	id: number;
	name: string;
	tagline: string;
	first_brewed: string;
	description: string;
	image_url: string;
}

fetch('https://api.punkapi.com/v2/beers')
	.then((response: Response) => response.json())
	.then((beers: Beer[]) => {
		const cards = document.getElementById('cards')

		for (const beer of beers) {
			cards.innerHTML += `
				<div class="card mb-3">
				  <div class="row g-0">
				    <div class="col-md-3">
				      <img src="${beer.image_url}" class="img-fluid rounded-start" alt="...">
				    </div>
				    <div class="col-md-8">
				      <div class="card-body">
				        <h5 class="card-title">${beer.name}</h5>
				        <p class="card-text">${beer.tagline}</p>
				        <p class="card-text"><small class="text-muted">${beer.description}</small></p>
				        <p class="card-text"><small class="text-muted">${beer.first_brewed}</small></p>
				      </div>
				    </div>
				  </div>
				</div>`
		}
	})