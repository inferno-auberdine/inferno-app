import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inferno-card',
  templateUrl: './inferno-card.component.html',
  styleUrls: ['./inferno-card.component.scss']
})
export class InfernoCardComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
