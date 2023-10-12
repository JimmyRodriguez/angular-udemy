import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman","Hulk", "She Hulk", "Iroman"];
  public eliminarHero? : string;

  deleteHero(): void {
    this.eliminarHero = this.heroNames.pop();
  }
}
