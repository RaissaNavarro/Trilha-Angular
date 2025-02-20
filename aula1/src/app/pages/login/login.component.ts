import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  constructor(private router: Router) {} // esse constructor é tipo um name_main em python, toda vez que essa classe for instanciada ele vai ser executado. O router é usado pra conseguir fazer a troca de página


  fazerLogin() {
    this.router.navigate(['/home']); // aqui é pra dps que a pessoa logar ir pra home
  }

}

