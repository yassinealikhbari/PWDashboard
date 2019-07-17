import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule,} from 'angular-bootstrap-md';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IconsModule} from 'angular-bootstrap-md';
import { RaspiComponent } from './raspi/raspi.component';
import { HomeComponent } from './home/home.component';
import { RaspiDetailsComponent } from './raspi-details/raspi-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UnityComponent } from './unity/unity.component';
import { LightComponent } from './light/light.component';
import { DoorComponent } from './door/door.component';
import { PicComponent } from './pic/pic.component';
import { AddComponent } from './add/add.component';
import { PicsDetailsComponent } from './pics-details/pics-details.component';
import {WebSocketService} from './web-socket.service';
import { AddRaspoComponent } from './add-raspo/add-raspo.component';
import { AddPicComponent } from './add-pic/add-pic.component';
import { AddSensorComponent } from './add-sensor/add-sensor.component';

// const config: SocketIoConfig = { url: 'ws://yasberry.local:8988', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    RaspiComponent,
    HomeComponent,
    RaspiDetailsComponent,
    UnityComponent,
    LightComponent,
    DoorComponent,
    PicComponent,
    AddComponent,
    PicsDetailsComponent,
    AddRaspoComponent,
    AddPicComponent,
    AddSensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    IconsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    // SocketIoModule.forRoot(config),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'details/:id',
        component: RaspiDetailsComponent
      },
    ]),
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
