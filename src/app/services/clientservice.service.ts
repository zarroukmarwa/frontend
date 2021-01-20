import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

 

@Injectable()

export class Clientserviceservice {
    
    
     private resourceUrl: string;

    constructor(protected http: HttpClient) {

        this.resourceUrl =  'https://zarrouk-backend.herokuapp.com/api/clients';
        
    }

    create(client: Client) {
        return this.http.post<Client>(this.resourceUrl, client);

    }

    update(client: Client)  {
        return this.http.put<Client>(this.resourceUrl, client);
    }

    findOne(id: number) : Observable<Client> {
        return this.http.get<Client>(`${this.resourceUrl}/${id}`);
    }

    public findAll(): Observable<Client[]> {
        return this.http.get<Client[]>(this.resourceUrl);
      }


    delete(id: number)  {
        return this.http.delete<Client>(`${this.resourceUrl}/${id}`);
    }
}
