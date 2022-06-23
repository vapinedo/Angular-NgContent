import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  userList: any[] = [];

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  async getUsers() {
    try {
      this.userList = await this.userSvc.getAll();
    } catch(error) {
      console.log("Error", error);
    }
  }

}
