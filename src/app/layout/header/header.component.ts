import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private appComponent: AppComponent) {
  }

  toggleTheme() {
    this.appComponent.toggleTheme();
  }
}
