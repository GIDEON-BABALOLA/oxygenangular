import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { FormComponent } from "./form/form.component";
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, CommonModule, FormComponent, AssistanceComponent, NavbarComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'oxygenangular';
}
