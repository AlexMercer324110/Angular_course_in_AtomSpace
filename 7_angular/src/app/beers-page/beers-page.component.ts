import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Beer } from "../app.component";

@Component({
  selector: 'app-beers-page',
  templateUrl: './beers-page.component.html',
  styleUrls: ['./beers-page.component.scss']
})
export class BeersPageComponent implements OnInit {
  beers: Beer[]

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Beer[]>('https://api.punkapi.com/v2/beers').subscribe((beers: Beer[]) => {
      this.beers = beers
    })
  }
}
