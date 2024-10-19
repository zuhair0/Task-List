import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task-List';
}
