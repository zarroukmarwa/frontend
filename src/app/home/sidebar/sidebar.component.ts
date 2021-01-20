import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/client/all', title: 'Client',  icon:'pe-7s-user', class: '' },
    { path: '/commande/all', title: 'Commande',  icon:'pe-7s-note2', class: '' },
    { path: '/produit/all', title: 'Produit',  icon:'pe-7s-news-paper', class: '' },
    { path: '/categorie/all', title: 'Catégorie',  icon:'pe-7s-science', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
