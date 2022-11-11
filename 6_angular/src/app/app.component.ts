import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface IBeer {
  id: number
  name: string
  description: string
  image_url: string
  abv: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  beers: IBeer[] = []

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<IBeer[]>('https://api.punkapi.com/v2/beers')
      .subscribe(res => this.beers = res)
  }
}
