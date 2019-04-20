import { animate, state, style, transition, trigger } from '@angular/animations';
export const GRID_ANIMATIONS =
    trigger('gridTrigger', [
		state('on', style({
          backgroundColor: 'cyan',
		  		transform: 'rotate(720deg) scale(1)'
		})),
		state('off',   style({
		  backgroundColor: 'orange',
		  transform: 'rotate(360deg) scale(0.5)'
    })),
    transition('on => off', animate('1s ease-in')),        		
    transition('off => on', animate('2s ease-out'))
	]);