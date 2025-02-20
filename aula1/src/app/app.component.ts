import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";

@Component({ // o component serve tem as configurações que vão ser usadar pelo angular 
  selector: 'app-root',
  imports: [LoginComponent, RouterOutlet ],
  templateUrl: './app.component.html', // o template serve pra controlar o que vai ser renderizado no DOM // O DOM (Document Object Model) é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web
  styleUrl: './app.component.css' // definecomo o componente será usado no html
})
export class AppComponent { // contém os comportamentos dos componentes.
  title = 'aula1';

  
  primeiroNome = signal('João'); // esta declarando o primeiro nome e é como se virasse uma "função"

  mudarNome() {
    console.log(this.primeiroNome());
    this.primeiroNome.set('Marcela');
    console.log(this.primeiroNome());
  }


}
