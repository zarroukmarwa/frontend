import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

import { Commande } from '../../model/commande'; //Chemin par rapport a la classe AddUpdateCommandeComponent
import { Commandeserviceservice } from '../../services/commandeservice.service';
import { Clientserviceservice } from './../../services/clientservice.service';
import { Client } from './../../model/client'; //Chemin par rapport a la classe AddUpdateProduitComponent
import { Produitserviceservice } from './../../services/produitservice.service';
import { Produit } from './../../model/produit'; //Chemin par rapport a la classe AddUpdateProduitComponent

@Component({
  selector: 'app-show-all-commandes',
  templateUrl: './show-all-commandes.component.html',
  styleUrls: ['./show-all-commandes.component.css'],
  providers: [Commandeserviceservice,Clientserviceservice,Produitserviceservice]

})
export class ShowAllCommandesComponent implements OnInit {

  listCommandes: Commande  [];

  routeData: any;
  links: any;
  totalItems: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;
  
  constructor( private route: Router, 
    private commandeservice: Commandeserviceservice,
    protected activatedRoute: ActivatedRoute) {
      this.itemsPerPage = 20;
        this.routeData = this.activatedRoute.data.subscribe(data => {
            this.page = data.pagingParams.page;
            this.previousPage = data.pagingParams.page;
            this.reverse = data.pagingParams.ascending;
            this.predicate = data.pagingParams.predicate;
        });
      
    }

  ngOnInit() {
    this.loadAllCommandes();
  }

  loadAllCommandes() {
    this.commandeservice.findAll().subscribe(data => {
      this.listCommandes = data;
    });
}

loadPage(page: number) {
    if (page !== this.previousPage) {
        this.previousPage = page;
        this.transition();
    }
}

transition() {
    this.route.navigate(['/commande'], {
        queryParams: {
            page: this.page,
            size: this.itemsPerPage,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }
    });
    this.loadAllCommandes();
}
 

}
