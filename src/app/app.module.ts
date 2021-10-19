import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ManagerComponent } from './components/manager/manager.component';
import { CompanyComponent } from './components/company/company.component';
import { GridComponent } from './shared/grid/grid.component';
import { GridListComponent } from './shared/grid-list/grid-list.component';
import { GridService } from './shared/grid/grid.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryService } from './service/inventory.service';

//matrial
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

const appRouting: Routes = [
  { path: '', redirectTo: 'inventory', pathMatch: "full" },
  { path: 'inventory', component: InventoryComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'company', component: CompanyComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ManagerComponent,
    CompanyComponent,
    GridComponent,
    GridListComponent,
    PageNotFoundComponent,
    InventoryComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouting, { useHash: true }),
    //material
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    InventoryService,
    GridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
