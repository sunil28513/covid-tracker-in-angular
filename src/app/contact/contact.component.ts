import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  fullName = 'Bob';
  email: string;
  nickName: string;
  password: string;
  ngOnInit(): void {
  }

}
