import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-btn',
  templateUrl: './input-btn.component.html',
  styleUrls: ['./input-btn.component.scss']
})
export class InputBtnComponent implements OnInit {

  inputText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
