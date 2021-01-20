import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

import { Client } from './../../model/client'; //Chemin par rapport a la classe AddUpdateClientComponent
import { Clientserviceservice } from './../../services/clientservice.service';
import { Categorieserviceservice } from './../../services/categorieservice.service';

@Component({
  selector: 'app-show-all-clients',
  templateUrl: './show-all-clients.component.html',
  styleUrls: ['./show-all-clients.component.css'],
  providers: [Clientserviceservice,
    Categorieserviceservice]
})
export class ShowAllClientsComponent implements OnInit {

  listClients: Client  [];

  routeData: any;
  links: any;
  totalItems: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;
  
  constructor( private route: Router, 
    private clientservice: Clientserviceservice,
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
    this.loadAllClients();
  }

  loadAllClients() {
    this.clientservice.findAll().subscribe(data => {
      this.listClients = data;
    });
}

loadPage(page: number) {
    if (page !== this.previousPage) {
        this.previousPage = page;
        this.transition();
    }
}

transition() {
    this.route.navigate(['/client'], {
        queryParams: {
            page: this.page,
            size: this.itemsPerPage,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }
    });
    this.loadAllClients();
}
 

}
