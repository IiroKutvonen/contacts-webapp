import { Injectable } from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Timo', 'Makkonen'));
    this.contacts.push(new Contact('Pekka', 'Leppänen'));
    this.contacts.push(new Contact('Mikko', 'Leminmies'));
  }

  getContacts() {
    return this.contacts;
  }
}
