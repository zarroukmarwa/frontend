import { Client } from "./client";
import { Produit } from "./produit";


export class Commande {
    idCommande?: number;
    idClient?: Client;
    idProduit?: Produit;
    qteCommande?: number;
    dateCommande?: Date;
    etatCommande?: string;
     
}
