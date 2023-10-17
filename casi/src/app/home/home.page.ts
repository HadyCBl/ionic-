import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
users :any =[];
  constructor(private http: HttpClient ) {}

  getUser(){
    this.http.get('http://localhost/app/user.php').subscribe(
      (Response) => {
        console.log(Response);
        this.users = Response;
      },
      (error) => {
        console.error('Error al realizar la solicitud:', error);
      }
    );

}
}