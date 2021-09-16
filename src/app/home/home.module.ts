import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {RaidProgressModule} from './raid-progress/raid-progress.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    HomeRoutingModule,
    RaidProgressModule,
    SharedModule
  ]
})
export class HomeModule {
}
