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
import { Client } from './../../model/client'; //Chemin par rapport a la classe AddUpdateClientComponent
import { Clientserviceservice } from './../../services/clientservice.service';


@Component({
  selector: 'app-add-update-client',
  templateUrl: './add-update-client.component.html',
  styleUrls: ['./add-update-client.component.css'],
  providers: [Clientserviceservice]

})
export class AddUpdateClientComponent implements OnInit {

  client: Client = { };
  constructor(

    private route: Router,
    private clientservice: Clientserviceservice) {
      this.client = new Client();
    }

  ngOnInit() {
    
   }

   saveOrUpdate() {
     if (this.client.idClient !== undefined) {
      this.clientservice.update(this.client).subscribe(result => {

        console.log(result);
  
        Swal.fire(
          'Bravo!',
          'Client '+this.client.idClient+' modifié avec succès!',
          'success'
        );
  
        this.gotoClientList();
  
      })
    } else {
      this.clientservice.create(this.client).subscribe(result => {

        console.log(result);
  
        Swal.fire(
          'Bravo!',
          'Client enregistré avec succès!',
          'success'
        );
  
        this.gotoClientList();
  
      })
    }
}


  gotoClientList() {
    this.route.navigate(['/client/all']);
  }
}
