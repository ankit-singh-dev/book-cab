import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';  
import {MatSidenavModule} from '@angular/material/sidenav'; 

const materialModules = [
  MatCardModule,
  MatDividerModule,
  MatSidenavModule
]

@NgModule({
  imports: [],
  exports : [
    materialModules
  ]
})
export class MaterialModule { }
