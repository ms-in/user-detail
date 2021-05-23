import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userList = [];
  userInfo = {};
  activeClass ='';
  errorMsg: string = ''

  constructor(public _userList: UserServiceService) { }

  ngOnInit() {
    this._userList.getUserList().subscribe(data => this.userList = data, error => this.errorMsg = error)
  }

  showUnserInfo(id) {
    this.userInfo = this.userList.find(elm => elm.id === id);
    this.activeClass = id;
    console.log(id, this.userInfo)
  }

}
