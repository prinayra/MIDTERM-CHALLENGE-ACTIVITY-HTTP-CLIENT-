import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpclientService } from './httpclient.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientprg';
  httpusers: any;

  constructor(private httpclientList: HttpclientService) {
    this.httpclientList.getUsersRemotely().subscribe((data: any) => {
      this.httpusers = data;
    });
  }
}


