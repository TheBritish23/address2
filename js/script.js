//business logic for Addressbook
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var x=0; x < this.contacts.length; x++) {
    if (this.contacts[x]) {
      if (this.contacts[x].id == id) {
        return this.contacts[x];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var x=0; x < this.contacts.length; x++) {
    if (this.contacts[x]) {
      if (this.contacts[x].id == id) {
        delete this.contacts[x];
        return true;
      }
    }
  };
  return false;
}

//business logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic 
var addressBook = new AddressBook();

$(document).ready(function() {
  $("form#next").submit(function(event) {
    event.preventDefault()
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  })
 })
