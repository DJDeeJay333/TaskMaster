import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputTestingComponent } from './input-testing/input-testing.component';
import { TaskDataComponent } from './task-data/task-data.component';

const routes: Routes = [
  {path: 'TaskData', component:TaskDataComponent},
  {path: 'InputTesting', component:InputTestingComponent},
  {path: '', component: TaskDataComponent},
  {path: '**', component: InputTestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
