import { Meteor } from 'meteor/meteor';

// Fixtures
import { loadParties } from './imports/fixtures/parties';

// Publish
import './imports/publications/parties';

Meteor.startup(() => {
  loadParties();
});
