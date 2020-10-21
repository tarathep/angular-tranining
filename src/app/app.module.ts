import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PhotoBoxComponent } from './components/photo-box/photo-box.component';
import { from } from 'rxjs';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PhotoBoxComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
