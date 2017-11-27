import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // dataSource = new MatTableDataSource(HEROES);
  // displayedColumns = ['id', 'name'];

  hero: Hero ={
    id:1,
    name: 'jon snow',
  };

  heroes= HEROES;

  selectedHero: Hero

  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
