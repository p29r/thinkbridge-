import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inventory } from 'src/app/models/inventoey.model';
import { GridService } from '../grid/grid.service';






@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {
  
  
  displayedColumns: string[] = ['id', 'name', 'description', 'price','quantity','category','action'];

  @Input() dataSource: Inventory[];
  @Output() currentID = new EventEmitter<number>();

  constructor(private gridService: GridService) { }

  ngOnInit() {
  }

  editRecord(data: Inventory) {
    console.log("currnetInvetory ==", data);
    this.gridService.currentData = Object.assign({}, data);
    //this.currentEmployee.emit(data);

  }

  deletRecord(id: number) {
    console.log(" deletRecord currnetInvetory id ==", id);
    this.currentID.emit(id);
  }

}
