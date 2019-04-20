import { Component, HostBinding } from '@angular/core';
import { STATE_ANIMATIONS } from './animations/state-animation';
import { GRID_ANIMATIONS } from './animations/grid-animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    STATE_ANIMATIONS,
    GRID_ANIMATIONS,
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AppComponent {
  title = 'Animation Demo';
  state  :string = 'start';
  gridState : string = 'on';  
  studentList = [
    {
      name : 'keyur',
      city : 'surat',
      mobileNo : '7387029671'
    },
    {
      name : 'denish',
      city : 'surat',
      mobileNo : '7387029123'
    },
    {
      name : 'vinit',
      city : 'mumbai',
      mobileNo : '7387029321'
    }  
  ];

  @HostBinding('@roundAntiClockTrigger') 
  roundAntiClockTrigger = 'in'; 

  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  toggleStates():void{
    this.state = this.state === 'start' ? 'stop' : 'start';
    this.gridState = this.gridState === 'on' ? 'off' : 'on';
  }
}
