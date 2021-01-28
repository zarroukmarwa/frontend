import { Client } from "./client";
import { Produit } from "./produit";


export class Commande {
    idCommande?: number;
    client?: Client;
    produit?: Produit;
    qteCommande?: number;
    dateCommande?: Date;
    etatCommande?: string;
     
}
