import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Inventory } from 'src/app/models/inventoey.model';
import { InventoryService } from 'src/app/service/inventory.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  private inventories: Inventory[];

  constructor(private inventoryService: InventoryService,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllInventory();
  }

  getAllInventory() {
    this.spinner.show();
    this.inventoryService.getAllInventory().subscribe((data) => {
      console.log("getAllCompaies ==", data);
      this.inventories = data;
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);

    })
  }

  getCurrentID(id: number) {
    console.log("inside getCurrentID  id ==", id);
    this.inventoryService.deleteInventory(id).subscribe((data) => {
      console.log("deleted data ==", data)
    })
  }

  saveOrCreate(currentInv: Inventory) {
    this.spinner.show();

    if (currentInv.id == null) {
      this.inventoryService.createInventory(currentInv).subscribe((data) => {
        console.log("created Company =", data);
        this.toastrService.success('New Inventoery Added successfully..!');
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      }, (error) => {
        console.error('Error in createInventory service..! ');
        this.spinner.hide();
      }, () => {
        console.log("In side Complete Service execution =");
      })
    } else {
      this.inventoryService.updateInventory(currentInv).subscribe((data) => {
        console.log("updated Company =", data);
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
        this.toastrService.success('Updated Inventoery successfully..!');
      }, (error) => {
        console.error('Error in updateInventory service..! ');
        this.spinner.hide();
      }, () => {
        console.log("In side Complete Service execution =");
      })
    }
  }

}
