

import { Component } from '@angular/core';
import { Tab1Service } from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private pageService: Tab1Service) {
    this.pageService.getPokemon();
  }

  ionViewDidLoad() {
    this.pageService.getPokemon();
  }

}
