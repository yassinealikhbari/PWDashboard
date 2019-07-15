import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Subscription} from 'rxjs';
import {IMqttMessage, MqttService} from 'ngx-mqtt';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  status = 'connected';
  stat = true;
  constructor(private apiService: ApiService) {
  }

  @Input()
  lightName: string;
  @Input()
  picAddress: string;
  ngOnInit() {
  }
  sendMessage(sAction: string) {
    console.dir('va');
    this.apiService.sendMessage(sAction, this.lightName, this.picAddress).subscribe((res) => {
      console.dir('yeppa');
    });
  }
}
