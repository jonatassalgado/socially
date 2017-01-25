// Modules
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Templates
import template from './app.component.html';

// Collections
import { Parties } from '../../../both/collections/parties.collection';

// Model
import { Party } from '../../../both/models/party.model';


@Component({
  selector: 'app',
  template: template
})

export class AppComponent {}
