// Core imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components imports
import { ShipmentComponent } from './shipment/shipment.component';

const funnelRoutes: Routes = [
  {path: 'shipment', component: ShipmentComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(funnelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FunnelRoutingModule { }
