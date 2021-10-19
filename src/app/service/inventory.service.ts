import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventoey.model';

const headerOptions = {
  headers: new HttpHeaders({ "containt-type": "application/json" })
}
@Injectable()
export class InventoryService {

   mockURL: string = "http://localhost:3000/Inventory"
   
  constructor(private http: HttpClient) { }

  getAllInventory():Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.mockURL, headerOptions);
  }
  updateInventory(currentInventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(this.mockURL + '/' + currentInventory.id, currentInventory, headerOptions)
  }

  createInventory(currentInventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.mockURL, currentInventory, headerOptions)
  }

  deleteInventory(Id: number): Observable<Inventory> {
    return this.http.delete<Inventory>(this.mockURL + '/' + Id, headerOptions)
  }
}
