import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './CustomDi/custom.directive';
import { CustomFormsModule } from 'ng2-validation';
import { HelloComponent } from './hello/hello.component';
import { TryingComponent } from './trying/trying.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFormComponent } from './input-form/input-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { ServiceService } from './Services/service.service';
@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    HelloComponent,
    TryingComponent,
    ReactiveComponent,
    MainComponent,
    ListComponent,
    InputFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MainComponent, ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
