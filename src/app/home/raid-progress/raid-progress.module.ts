import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {RaidProgressComponent} from './components/raid-progress/raid-progress.component';
import {RaidProgressCardComponent} from './components/raid-progress-card/raid-progress-card.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    RaidProgressComponent,
    RaidProgressCardComponent
  ],
  exports: [
    RaidProgressCardComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    SharedModule,
  ]
})
export class RaidProgressModule {
}
