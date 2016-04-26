import { Ability } from 'ember-can';
import Ember from 'ember';

const {
  computed,
  inject: { service }
} = Ember;

export default Ability.extend({
  sessionAccount: service('session-account'),

  canRead: computed('sessionAccount.account', function() {
    return this.get('sessionAccount.account.isAdmin') ||
      this.get('sessionAccount.account.isUser');
  })
});
