import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodolistService } from '../../../core/service/toDoList/todolist.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tasks } from '../../../shared/interface/tasks';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  imports: [ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{

  private readonly todolistService =  inject(TodolistService)
  private readonly toastrService = inject(ToastrService)
  
  taskList:Tasks[]=[]


  dataTask:FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    apiKey: new FormControl("67f6b92c60a208ee1fdf2e06")
  })

  ngOnInit(): void {
      this.displayAllTasks();
  }
  
  addNewTask():void{
    this.todolistService.addTodo(this.dataTask.value).subscribe({
      next:(res)=>{
        // console.log(res);
        if (res.message === "success") {
        this.toastrService.success("success")
        this.dataTask.get('title')?.reset();
        this.displayAllTasks();
        }
      }
    })
  }

  displayAllTasks():void{
    this.todolistService.getAllTodo("67f6b92c60a208ee1fdf2e06").subscribe({
      next:(res)=>{
        this.taskList = res.todos;
      }
    })
  }

  completedTask(id:string):void{
    const idTodo:object = {
      todoId:id,
    };
    this.todolistService.markCompleted(idTodo).subscribe({
      next:(res)=>{
        Swal.fire("Well done");
      // console.log(res);
        this.displayAllTasks();
      }
    })
    
  }

  removeTask(id:string):void{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        this.todolistService.deleteTodo(id).subscribe({
          next:(res)=>{
            // console.log(res);
            this.displayAllTasks();
          }
        })
      }
    });

    
  }


    

}