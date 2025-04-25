import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  imports: [CommonModule, TranslateModule, HttpClientModule],
})
export class PortfolioComponent {
  constructor(public translateService: TranslateService) {}

  projects = [
    {
      name: 'Join',
      tech: 'HTML | CSS | JavaScript | Firebase',
      descriptionKey: 'portfolio.join',
      link: 'https://join.weigert-webdev.de',
      git: 'https://github.com/Meriem2024/Join',
      img: 'join.png',
    },
    {
      name: 'El Pollo Loco',
      tech: 'HTML | CSS | JavaScript | OOP',
      descriptionKey: 'portfolio.loco',
      link: 'https://el-pollo.weigert-webdev.de',
      git: 'https://github.com/Meriem2024/El-Pollo',
      img: 'loco.png',
    },
    {
      name: 'Portfolio-Website',
      tech: 'Angular | Typescript | HTML | SCSS',
      descriptionKey: 'portfolio.website',
      link: 'https://weigert-webdev.de',
      git: 'https://github.com/Meriem2024/Portfolio-Website',
      img: 'portfolio.png',
    },
    {
      name: 'Pokedex',
      tech: 'HTML | CSS | JavaScript | REST API',
      descriptionKey: 'portfolio.pokedex',
      link: 'https://pokedex.weigert-webdev.de',
      git: 'https://github.com/Meriem2024/Pokedex',
      img: 'pokedex.png',
    },
    {
      name: 'eCommerce-Store',
      tech: 'Angular | Typescript | HTML | SCSS',
      descriptionKey: 'portfolio.estore',
      link: '#',
      git: 'https://github.com/Meriem2024/eCommerce-Store',
      img: 'estore.png',
    },
  ];
}
