angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((books) => {
    app.items = itemsService.items;
  });
  app.postQ = q => {
    itemsService.postQ(q, (books) => {
      return new Promise((resolve, reject) => {
        app.items = itemsService.items
        $('.query').val('processing your request')
        resolve()
      })
      .then(() => { $('.query').val(''); });
    })
  };
  app.makeWiseSelections = () => {
    itemsService.getRan(books => {
      app.items = itemsService.items;
    })
  }
})
.component('app', {
  bindings: {input: '<'},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});