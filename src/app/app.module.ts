import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { CardComponent } from './card/card.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { AreachartComponent } from './areachart/areachart.component';
import { TableComponent } from './table/table.component';
import {MatRadioModule} from '@angular/material/radio';
import { CalenderComponent } from './calender/calender.component';
import { MediaComponent } from './media/media.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SelectComponent } from './select/select.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { FormsComponent } from './forms/forms.component';
import { FreeComponent } from './free/free.component';
import { ProComponent } from './pro/pro.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FooterComponent } from './footer/footer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    CardComponent,
    AreachartComponent,
    TableComponent,
    CalenderComponent,
    MediaComponent,
    CheckboxComponent,
    DatepickerComponent,
    SelectComponent,
    GridComponent,
    ButtonComponent,
    FormsComponent,
    FreeComponent,
    ProComponent,
    PiechartComponent,
    ChartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    HighchartsChartModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
