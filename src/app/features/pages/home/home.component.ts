import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { TasksComponent } from "../tasks/tasks.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, TasksComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
