import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent implements OnInit {
  @Input() value = '';
  @Output() childAlertEvent = new EventEmitter();
  inputValue = '';
  ngOnInit() {
    this.inputValue = this.value;
  }
}
