import {Component, OnInit} from '@angular/core';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

}
