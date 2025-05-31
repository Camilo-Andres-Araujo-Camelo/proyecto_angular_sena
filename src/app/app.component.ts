import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainAppComponent } from './components/main-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainAppComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
