import { DynamicFormComponent } from './modules/dynamic-form/dynamic-form.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';


const routes: Routes = [
  {
    path: 'test',
    component: DynamicFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }