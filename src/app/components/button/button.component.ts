import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  {
 

  @Input() label: string = 'Button';
  @Input() additionalClasses: string = '';
  @Input() url: string = '';
  @Input() isDownload: boolean = false;


  // @Output() buttonClick = new EventEmitter<void>();
  handleClick() {
    if (this.url) {
      window.open(this.url, '_blank');
    }
  }
}
