import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { digit4Only, pincode } from 'app/utils/constraints';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  itemform: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.prepareForm();
    this.buildForm();
  }

  prepareForm() {
    this.itemform = new FormGroup({
      "name": new FormControl("Ford Echo sport", Validators.required),
      "category": new FormControl("Car"),
      "price": new FormControl(0, [Validators.pattern(/^\d{4}$/)]),
      "qty": new FormControl(1, [digit4Only]),
      "description": new FormControl()
    });
  }

  buildForm() {
    this.itemform = this.fb.group({
      "name": ["Ford Echo sport", Validators.required],
      "category": ["Car"],
      "price": [0, [Validators.pattern(/^\d{4}$/)]],
      "qty": [1, [digit4Only]],
      "description": []
    });
  }

  toggleForm(flag) {
    if (flag) {
      this.itemform.enable();

    } else {
      this.itemform.disable();
    }
  }


  setValue() {
    this.itemform.setValue({
      "name": "Blue Jeans",
      "category": "Cloth",
      "price": 2000,
      "qty": 10,
      "description": "A blue jeans"
    });
  }

  patchValue() {
    this.itemform.patchValue({
      "name": "Green Jeans",
      "price": 5000,
      "qty": 10,
    });
  }

  saveForm() {
    console.log("form saved");
    console.log(this.itemform.value);
    this.itemform.reset();
  }
}
