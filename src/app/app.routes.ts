import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { TasksComponent } from './features/pages/tasks/tasks.component';
import { NotfoundComponent } from './features/additional/notfound/notfound.component';

export const routes: Routes = [
{path:'', redirectTo:'home' , pathMatch:'full'},
{path:'home', component:HomeComponent,title: 'To do List'},
{path:'tasks',component:TasksComponent,title:'tasks'},
{path:'specific-task',
    loadComponent: ()=> import('./features/pages/specific-task/specific-task.component')
    .then(m => m.SpecificTaskComponent),
    title:'specific-task'
},
{path:'**',component:NotfoundComponent,title:'notfound'}
];