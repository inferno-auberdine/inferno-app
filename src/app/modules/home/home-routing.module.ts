import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '', component: HomeComponent
}];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TooltipModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
