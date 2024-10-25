import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
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

taskForm: FormGroup
//in angular we use counstructor for dependance injection, initialiazation, auto executions
constructor(){
this.taskForm=new FormGroup({
  taskName: new FormControl('',[Validators.required, Validators.minLength(3)])
})
}
//---- Validation for template form----//
// addTask(taskForm: any){
//   if(taskForm.valid){
//     this.tasks.push({name: this.newTask, createdAt: new Date()})
//     this.newTask=''
//     taskForm.reset()
//   }
// }

//---- Validation for reactive form----//
addTask(){
if(this.taskForm.valid){
  this.tasks.push({name: this.taskForm.value.taskName, createdAt: new Date()})
  this.newTask=''
  this.taskForm.reset()
}
}
toggleMessage(){
  this.showMessage=!this.showMessage;
}
emptyText(){
  this.emptyInput=!this.emptyInput;
}
}
