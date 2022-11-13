import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-lists-buttons',
  templateUrl: './filter-lists-buttons.component.html',
  styleUrls: ['./filter-lists-buttons.component.css'],
})
export class FilterListsButtonsComponent implements OnInit {
  @Input() text!: string;

  @Input() buttonIsActivated! : boolean

  constructor() {}

  ngOnInit(): void {}
}
