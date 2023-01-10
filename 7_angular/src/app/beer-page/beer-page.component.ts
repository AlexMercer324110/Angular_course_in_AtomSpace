import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Beer} from "../app.component";
import {delay} from "rxjs";

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.scss']
})
export class BeerPageComponent implements OnInit {
  beer: Beer
  visible = false

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Beer[]>('https://api.punkapi.com/v2/beers/' + this.route.snapshot.params.id)
      .pipe(
        delay(400)
      ).subscribe((beers: Beer[]) => {
      const beer = beers[0]

      const img = new Image()
      img.src = beer.image_url
      img.onload = () => {
        this.beer = beer
      }
    })
  }

}
