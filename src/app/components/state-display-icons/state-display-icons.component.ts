import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-display-icons',
  templateUrl: './state-display-icons.component.html',
  styleUrls: ['./state-display-icons.component.css'],
})
export class StateDisplayIconsComponent implements OnInit {
  
  @Input() stateToDisplay!:string

  private readonly butonsColorMap: any = {
    APPROVED: '#38B000',
    DECLINED: '#D00000',
    IN_REVIEW: '#FDBE21',
    PENDING_REVIEW: '#FDBE21',
  };

  disabledButtonColor: string = '#E0E0E5';

  currentButonsColor: any = {
    APPROVED: this.disabledButtonColor,
    DECLINED: this.disabledButtonColor,
    IN_REVIEW: this.disabledButtonColor,
    PENDING_REVIEW: this.disabledButtonColor,
  };

  SetStateToDisplay(stateKey: string) {
    for (let key in this.currentButonsColor) {
      if (key == stateKey) {
        this.currentButonsColor[key] = this.butonsColorMap[key];
      } else {
        this.currentButonsColor[key] = this.disabledButtonColor;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.SetStateToDisplay(this.stateToDisplay)
  }
}
