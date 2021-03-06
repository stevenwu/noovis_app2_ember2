import Ember from 'ember';

export default Ember.Component.extend({
  betweenGroupPadding: 0.8,
  withinGroupPadding: 0,
  maxLabelHeight: 40,
  stackBars: true,
  selectedSeedColor: 'rgb(118,189,29)',
  hasXAxisTitle: false,
  hasYAxisTitle: false,
  xValueDisplayName: 'Building',
  yValueDisplayName: 'Floor',
});
