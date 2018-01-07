import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  field:string;

  constructor() { }

  ngOnInit() {
  }

}
