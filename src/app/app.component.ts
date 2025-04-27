import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from './core/service/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { HomeComponent } from "./features/pages/home/home.component";
import { NgxSpinnerComponent } from 'ngx-spinner';


@Component({
  selector: 'app-root',
imports: [HomeComponent, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

}
