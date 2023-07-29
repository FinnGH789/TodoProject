import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-design',
  templateUrl: './button-design.component.html',
  styleUrls: ['./button-design.component.css']
})
export class ButtonDesignComponent {

  @Input() caption!: string;
}
