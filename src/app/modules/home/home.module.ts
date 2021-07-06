import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RaidProgressComponent} from './components/raid-progress/raid-progress.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {RaidProgressListComponent} from './components/raid-progress-list/raid-progress-list.component';
import {HomeRoutingModule} from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    RaidProgressComponent,
    RaidProgressListComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
