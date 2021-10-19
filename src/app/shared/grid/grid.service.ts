import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/models/inventoey.model';



@Injectable(
    //   {
    //   providedIn: 'root'
    // }
)
export class GridService {

    currentData: Inventory = {
        name: '',
        description: "",
        price:0,
        quantity: 0,
        category: "",
        id: null
    }
    constructor() { }



}