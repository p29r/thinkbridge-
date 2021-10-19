import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GridService } from './grid.service';
import { Inventory } from 'src/app/models/inventoey.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  categories = ['Food', 'Electronics', 'Cloths', "Other"];

  @Output() currentData = new EventEmitter<Inventory>()

  constructor(private gridService: GridService) { }

  ngOnInit() {
  }

  saveData(data: Inventory) {
    console.log("i m inside grid component data==", data)
    //this.gridService.currentData = data;
    this.currentData.emit(data);


  }

}
