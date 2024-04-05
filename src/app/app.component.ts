import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserFormComponent } from './components/userForm/userForm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project';
}
