import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any[] = []
  title = 'interviewTest';
  constructor(private service: ApiService) {

  }
  ngOnInit() {
    this.service.getUsers().subscribe((res: any) => {
      console.log(res)
      this.users=res.users
    })
  }
}
