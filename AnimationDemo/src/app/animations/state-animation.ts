import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
export const STATE_ANIMATIONS =
    trigger('stateTrigger', [
		state('start', style({
          backgroundColor: 'red',
		  		transform: 'translateX(0) scale(1)'
		})),
		state('stop',   style({
		  backgroundColor: 'green',
		  transform: 'translateX(100%) scale(0.5)'
    })),
		transition('start => stop', animate('0.8s ease-in',keyframes([ 
			style({fontSize: '19px', backgroundColor: 'yellow', offset: 0.1 }),
			style({fontSize: '20px', backgroundColor: 'green', offset: 0.3 }),
			style({fontSize: '21px', backgroundColor: 'pink', offset: 0.5 })
	 	]))),
    transition('stop => start', animate('500ms ease-out'))
	]);