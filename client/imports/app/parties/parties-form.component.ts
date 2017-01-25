import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

// Templates
import template from './parties-form.component.html';

// Models
import { Parties } from '../../../../both/collections/parties.collection';

@Component({
  selector: 'parties-form',
  template
})

export class PartiesFormComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [],
      location: ['', Validators.required]
    });
  }

  addParty(): void {
    if (this.addForm.valid) {
      Parties.insert(this.addForm.value);

      this.addForm.reset();
    }
  }

}
