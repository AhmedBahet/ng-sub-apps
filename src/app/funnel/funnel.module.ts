import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentComponent } from './shipment/shipment.component';
import {FunnelRoutingModule} from "./funnel-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FunnelRoutingModule
  ],
  declarations: [ShipmentComponent]
})
export class FunnelModule { }
