// Modules
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Collections
import { Parties } from '../../../../both/collections/parties.collection';

// Model
import { Party } from '../../../../both/models/party.model';

// Templates
import template from './parties-list.component.html';


@Component({
  selector: 'parties-list',
  template: template
})

export class PartiesListComponent {
  parties: Observable<Party[]>;

  constructor(){
    this.parties = Parties.find({}).zone();
  }

  removeParty(party: Party): void {
    Parties.remove(party._id);
  }
}
