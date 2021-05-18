import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: Task = new Task();

  addTask(){
    this.taskService.addTask(this.newTask).subscribe(r => this.router.navigate(['task']))
    window.location.reload();
  }

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

}
