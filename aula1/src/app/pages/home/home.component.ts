import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  produtos = [
    { imagem: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png', nome: 'iPhone 16 Pro', preco: 10.499 },
    { imagem: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16__c5bvots96jee_xlarge.png', nome: 'iPhone 16', preco: 7.799 },
    { imagem: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16__c5bvots96jee_xlarge.png', nome: 'iPhone 16', preco: 7.799 },
    { imagem: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png', nome: 'iPhone 16 Pro', preco: 10.499 },
    
  ];
  
  //aqui é a definição de uma lista com os produtos

}
