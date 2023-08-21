import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderComponent } from './calender/calender.component';
import { MediaComponent } from './media/media.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SelectComponent } from './select/select.component';
import { GridComponent } from './grid/grid.component';
import { FormsComponent } from './forms/forms.component';
import { FreeComponent } from './free/free.component';
import { ProComponent } from './pro/pro.component';
import { ButtonComponent } from './button/button.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'calender',component:CalenderComponent},
  {path:'media',component:MediaComponent},
  {path:'checkbox',component:CheckboxComponent},
  {path:'datepicker',component:DatepickerComponent},
  {path:'select',component:SelectComponent},
  {path:'grid',component:GridComponent},
  {path:'button',component:ButtonComponent},
  {path:'forms',component:FormsComponent},
  {path:'free',component:FreeComponent},
  {path:'pro',component:ProComponent},
  {path:'chart',component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
