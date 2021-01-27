import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import Swal from 'sweetalert2'
import { Commande } from '../../model/commande'; //Chemin par rapport a la classe AddUpdateCommandeComponent
import { Commandeserviceservice } from '../../services/commandeservice.service';
import { Clientserviceservice } from './../../services/clientservice.service';
import { Client } from './../../model/client'; //Chemin par rapport a la classe AddUpdateProduitComponent


@Component({
  selector: 'app-add-update-commande',
  templateUrl: './add-update-commande.component.html',
  styleUrls: ['./add-update-commande.component.css'],
  providers: [Commandeserviceservice,Clientserviceservice]

})
export class AddUpdateCommandeComponent implements OnInit {

  commande: Commande = { };
  listClient: Client[];

  constructor(

    private route: Router,
    private clientservice: Clientserviceservice, 
    private commandeservice: Commandeserviceservice) {
      this.commande = new Commande();
    }

  ngOnInit() {
    this.clientservice.findAll().subscribe(data => {
      this.listClient = data;
    });
 
    
   }

   saveOrUpdate() {
     if (this.commande.idCommande !== undefined) {
      this.commandeservice.update(this.commande).subscribe(result => {

        console.log(result);
  
        Swal.fire(
          'Bravo!',
          'Commande '+this.commande.idCommande+' modifié avec succès!',
          'success'
        );
  
        this.gotoCommandeList();
  
      })
    } else {
      this.commandeservice.create(this.commande).subscribe(result => {

        console.log(result);
  
        Swal.fire(
          'Bravo!',
          'Commande enregistré avec succès!',
          'success'
        );
  
        this.gotoCommandeList();
  
      })
    }
}


  gotoCommandeList() {
    this.route.navigate(['/commande/all']);
  }
}
