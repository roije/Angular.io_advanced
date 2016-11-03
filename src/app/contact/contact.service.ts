import { Injectable } from '@angular/core';
export class Contact {
  constructor(public id: number, public name: string) { }
}
const CONTACTS: Contact[] = [
  new Contact(21, 'Sam Spade'),
  new Contact(22, 'Nick Danger'),
  new Contact(23, 'Nancy Drew')
];

@Injectable()
export class ContactService {
  getContacts() {
    return CONTACTS;
  }
  getContact(id: number | string) {
    return this.getContacts()
  }
}
