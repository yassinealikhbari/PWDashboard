import {Component, Injectable, Input, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {IMqttMessage, MqttService} from 'ngx-mqtt';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

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

  picsKeyArray: string[] = [];

  picName: string;
  raspoName: string;

  data: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.picsKeyArray = this.apiService.getPicsKeyArray();
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getDeviceById(id)
      .subscribe(deviceData => {
        this.data = deviceData;
        this.raspoName = deviceData.deviceId;
        this.picName = deviceData.configuration.desired.pics;

        if (this.data.configuration.desired.pics) {
          this.picsArray = Object.values(this.data.configuration.desired.pics);
        }
      });
  }
}
