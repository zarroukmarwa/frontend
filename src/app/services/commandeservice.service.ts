import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../model/commande';

 

@Injectable()

export class Commandeserviceservice {
    
    
     private resourceUrl: string;

    constructor(protected http: HttpClient) {

        this.resourceUrl =  'https://zarrouk-backend.herokuapp.com/api/produits';
        
    }

    create(commande: Commande) {
        return this.http.post<Commande>(this.resourceUrl, commande);

    }

    update(commande: Commande)  {
        return this.http.put<Commande>(this.resourceUrl, commande);
    }

    findOne(id: number) : Observable<Commande> {
        return this.http.get<Commande>(`${this.resourceUrl}/${id}`);
    }

    public findAll(): Observable<Commande[]> {
        return this.http.get<Commande[]>(this.resourceUrl);
      }


    delete(id: number)  {
        return this.http.delete<Commande>(`${this.resourceUrl}/${id}`);
    }
}
