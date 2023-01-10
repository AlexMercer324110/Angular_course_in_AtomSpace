import { Component } from '@angular/core';

export interface Beer {
  id: number
  name: string
  tagline: string
  description: string
  image_url: string
  first_brewed: string
  abv: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}