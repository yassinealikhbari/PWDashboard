import {Component, Injectable, Input, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {IMqttMessage, MqttService} from 'ngx-mqtt';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-raspi-details',
  templateUrl: './raspi-details.component.html',
  styleUrls: ['./raspi-details.component.scss']
})

@Injectable()
export class RaspiDetailsComponent implements OnInit {
  public message: string;

  @Input()
  picsArray: any[] = [];

  constructor(private apiService: ApiService) {
  }


  ngOnInit() {
    this.picsArray = this.apiService.getPicsArray();
    console.dir(this.picsArray);
  }
}
