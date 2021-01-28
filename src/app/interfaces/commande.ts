import { Client } from "./client";
import { Produit } from "./produit";

export interface Commande {
    idCommande?: number;
    idClient?: Client;
    idProduit?: Produit;
    qteCommande?: number;
    dateCommande?: Date;
    etatCommande?: string;
     
}
