import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {
  tasks!: Task[];



  getTasks(): void {
    this.taskService.getTasks().subscribe((task) => (this.tasks = task));
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(task => this.getTasks());
  }

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
}
