import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { Assignments } from "./assignments/assignments";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatIconModule, MatDividerModule, Assignments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('assignment-app');

  nomDuProf = 'Michel Buffa';

  ngOnInit(): void {
    console.log('Juste après le constructeur');
    setTimeout(() => {
      this.nomDuProf = 'Buffa Michel MODIFIEE';
    }, 3000);
  }

}
