/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
  // variable privée
  var contactList = [];

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    add: function (_nom, _prenom, _date, _adresse, _email) {
      var contact = { nom: _nom, prenom: _prenom, date: _date, adresse: _adresse, email: _email };
      // ajout du contact à la liste
      contactList.push(contact);

      return contactList;
    },

    getList: function () {
      return contactList;
    },
  };
})();
