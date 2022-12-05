import { InputFormComponent } from './input-form/input-form.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Items', component: ListComponent },
  { path: 'Items/:id', component: MainComponent },
  { path: 'Input', component: InputFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
