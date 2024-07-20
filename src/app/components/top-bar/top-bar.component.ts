import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  protected menuItems = signal<MenuItem[]>([
    {text: 'My Content', link: '/', img: '/icons/bookshelf.svg', children: []},
    {text: 'Test Button', link: '/', img: '/icons/bookshelf.svg'}
  ]);
}


interface MenuItem {
  text: string;
  link: string;
  img: string;
  children?: MenuItem[];
}
