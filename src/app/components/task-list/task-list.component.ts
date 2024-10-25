import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
tasks:{name: string, createdAt: Date}[]=[];
newTask:string =''
showMessage:boolean=false
emptyInput: boolean=false
//---- Validation by own----//
// addTask(){
//   if(this.newTask==''){
//     this.emptyText();
//   }
//   if(this.newTask.trim()){
//     this.tasks.push({name: this.newTask, createdAt: new Date()})
//     this.newTask=''
//     this.emptyInput=false
//   }
// }

//---- Validation ----//
addTask(taskForm: any){
  if(taskForm.valid){
    this.tasks.push({name: this.newTask, createdAt: new Date()})
    this.newTask=''
    taskForm.reset()
  }
}
toggleMessage(){
  this.showMessage=!this.showMessage;
}
emptyText(){
  this.emptyInput=!this.emptyInput;
}
}
