import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Timo', 'Makkonen'));
    this.contacts.push(new Contact(2, 'Pekka', 'Leppänen'));
    this.contacts.push(new Contact(3, 'Mikko', 'Leminmies'));
  }

  getContacts() {
    return this.contacts;
  }
}
