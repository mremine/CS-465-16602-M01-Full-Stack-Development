import { Component } from '@angular/core';
import { TripListComponent } from './components/trip-list/trip-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}