import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path:'users', component:UsersComponent
  },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'product-overview',
  component:ProductOverviewComponent},
  {path:'',
  component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
