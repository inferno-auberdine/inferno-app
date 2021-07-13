import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {InfernoCardComponent} from './components/inferno-card/inferno-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    InfernoCardComponent
  ],
  exports: [
    HeaderComponent,
    InfernoCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
