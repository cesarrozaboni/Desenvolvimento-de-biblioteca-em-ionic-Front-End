import { Component, Input } from '@angular/core';
import { SocialPage } from '../../pages/social/social';
import { SocialPageModule } from '../../pages/social/social.module';

/**
 * Generated class for the SocialCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'social-card',
  templateUrl: 'social-card.html'
  
})
export class SocialCardComponent {
  
  @Input()
  info: any;  
  
  text: string;

  
 

  constructor() {
    console.log('Hello SocialCardComponent Component');
    this.text = 'Hello World';
    
  }

}
