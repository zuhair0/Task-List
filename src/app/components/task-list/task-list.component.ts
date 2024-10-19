import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
tasks=[
  {name: 'item1'},
  {name: 'item2'},
  {name: 'item3'}
]
newTask:string =''
addTask(){
  if(this.newTask.trim()){
    this.tasks.push({name: this.newTask})
    this.newTask=''
  }
}
}
