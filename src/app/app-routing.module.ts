import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DisplayTasksComponent } from './component/display-tasks/display-tasks.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { TaskDetailsComponent } from './component/task-details/task-details.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
  {
    path: 'task',
    component: DisplayTasksComponent
  },
  {
    path: 'add',
    component: AddTaskComponent
  },
  {
    path: 'detail/:id',
    component: TaskDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
