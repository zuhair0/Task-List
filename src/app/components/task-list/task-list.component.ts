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
tasks:{name: string, createdAt: Date}[]=[];
newTask:string =''
showMessage:boolean=false
addTask(){
  if(this.newTask.trim()){
    this.tasks.push({name: this.newTask, createdAt: new Date()})
    this.newTask=''
  }
}
toggleMessage(){
  this.showMessage=!this.showMessage;
}
}
