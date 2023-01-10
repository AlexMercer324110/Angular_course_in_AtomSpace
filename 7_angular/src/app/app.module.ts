import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { BeersPageComponent } from './beers-page/beers-page.component';
import { BeerPageComponent } from './beer-page/beer-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full'},
  { path: 'beers', component: BeersPageComponent},
  { path: 'beers/:id', component: BeerPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BeersPageComponent,
    BeerPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
