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
    if (!Meteor.userId()) {
      alert('Please log in to add a party');
      return;
    }

    if (this.addForm.valid) {
      Parties.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
    }
  }

}
