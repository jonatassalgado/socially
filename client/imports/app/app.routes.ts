import { Route, Router } from '@angular/router';


// Components
import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';

export const routes: Route[] = [
    { path: '', component: PartiesListComponent },
    { path: 'party/:partyId', component: PartyDetailsComponent }
]
