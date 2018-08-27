import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 /*  @Output() use to listen to event offside the component */
  @Output() sidenavToggle = new EventEmitter<void>(); //listen to event click from header and sidenav

  constructor() { }

  ngOnInit() {
  }

/*   Emit an event to listen in the App .component */
  onToggleSidenav() {
    this.sidenavToggle.emit(); //everytime we clicked the button
  }

}
