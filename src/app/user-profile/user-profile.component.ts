import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  
  None: string;


  constructor() {
    
  }

  displayNone() {
    if (this.None === 'hidden') {
    this.None = 'visible';
    } else {
    this.None = 'hidden';
    }
    } 

  ngOnInit() {}


}



