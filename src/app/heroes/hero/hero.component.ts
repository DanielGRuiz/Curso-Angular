import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = "heroe";
  public age : number = 40;
  public metodo : string = "Método";

  get capitalizadoName() : string {
    return this.name.toUpperCase();
  }
  public capitalizado : string = this.name;

  changeName() : void {
    this.name = "heroe 2";
  }

  changeAge() : void {
    this.age = 25;
  }
}
