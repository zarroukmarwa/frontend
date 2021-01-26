import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,RouterModule, Routes } from '@angular/router'
import {HttpClientModule} from '@angular/common/http';

import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContainerComponent } from './home/container/container.component';
import { ProduitComponent } from './produit/produit.component';
import { AddUpdateProduitComponent } from './produit/add-update-produit/add-update-produit.component';
import { ShowAllProduitsComponent } from './produit/show-all-produits/show-all-produits.component';
import { NotfoundComponent } from './home/notfound/notfound.component';
import { Produit } from './model/produit';
import { Produitserviceservice } from './services/produitservice.service';

import { ClientComponent } from './client/client.component';
import { AddUpdateClientComponent } from './client/add-update-client/add-update-client.component';
import { ShowAllClientsComponent } from './client/show-all-clients/show-all-clients.component';
import { Client } from './model/client';
import { Clientserviceservice } from './services/clientservice.service';

import { CommandeComponent } from './commande/commande.component';
import { AddUpdateCommandeComponent } from './commande/add-update-commande/add-update-commande.component';
import { ShowAllCommandesComponent } from './commande/show-all-commande/show-all-commandes.component';
import { Commande } from './model/commande';
import { Commandeserviceservice } from './services/commandeservice.service';

import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProduitResolve implements Resolve<Produit> {
    constructor(private produitservice: Produitserviceservice) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produit> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
          return this.produitservice.findOne(id);
        }
        return of(new Produit());
    }
}


@Injectable({ providedIn: 'root' })
export class ClientResolve implements Resolve<Client> {
    constructor(private clientservice: Clientserviceservice) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
          return this.clientservice.findOne(id);
        }
        return of(new Client());
    }
}

@Injectable({ providedIn: 'root' })
export class CommandeResolve implements Resolve<Commande> {
    constructor(private commandeservice: Commandeserviceservice) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Commande> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
          return this.commandeservice.findOne(id);
        }
        return of(new Commande());
    }
}
const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { 
    path: 'produit/new', 
    component: AddUpdateProduitComponent
  },
  { 
    path: 'produit/:id/view',
    component: AddUpdateProduitComponent
    ,
    resolve: {
        produit: ProduitResolve
    }   
   },
  { 
    path: 'produit/:id/edit', 
    component: AddUpdateProduitComponent
    ,
    resolve: {
        produit: ProduitResolve
    }    
  
  },
  { 
    path: 'produit/:id/delete', 
    component: AddUpdateProduitComponent
    ,
    resolve: {
        produit: ProduitResolve
    }   
  
  },

  { path: 'produit/all', component: ShowAllProduitsComponent },
  { 
    path: 'client/new', 
    component: AddUpdateClientComponent
  },
  { 
    path: 'client/:id/view',
    component: AddUpdateClientComponent
    ,
    resolve: {
        client: ClientResolve
    }   
   },
  { 
    path: 'client/:id/edit', 
    component: AddUpdateClientComponent
    ,
    resolve: {
        client: ClientResolve
    }    
  
  },
  { 
    path: 'client/:id/delete', 
    component: AddUpdateClientComponent
    ,
    resolve: {
        client: ClientResolve
    }   
  
  },

  { path: 'client/all', component: ShowAllClientsComponent },

  { 
    path: 'commande/new', 
    component: AddUpdateCommandeComponent
  },
  { 
    path: 'commande/:id/view',
    component: AddUpdateCommandeComponent
    ,
    resolve: {
        client: CommandeResolve
    }   
   },
  { 
    path: 'commande/:id/edit', 
    component: AddUpdateCommandeComponent
    ,
    resolve: {
        commande: CommandeResolve
    }    
  
  },
  { 
    path: 'commande/:id/delete', 
    component: AddUpdateCommandeComponent
    ,
    resolve: {
        commande: CommandeResolve
    }   
  
  },

  { path: 'commande/all', component: ShowAllCommandesComponent },
  
  { path: 'commande/all/add-update', component: AddUpdateCommandeComponent }


  ];
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    ProduitComponent,
    AddUpdateProduitComponent,
    ShowAllProduitsComponent,
    ClientComponent,
    AddUpdateClientComponent,
    ShowAllClientsComponent,
    CommandeComponent,
    AddUpdateCommandeComponent,
    ShowAllCommandesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
