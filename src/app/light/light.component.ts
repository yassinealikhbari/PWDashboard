import {Component, Input, OnDestroy, OnInit, AfterViewInit, AfterContentInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Subject, Subscription} from 'rxjs';
import {IMqttMessage, MqttService} from 'ngx-mqtt';
import {last, map} from 'rxjs/operators';
import {WebSocketService} from '../web-socket.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  connected = 'enabled';
  stat = true;
  message: Subject<any>;
  status: Subject<any>;

  isCliccable = true;

  constructor(private apiService: ApiService, private wsService: WebSocketService) {
  }

  @Input() sensorName: string;
  @Input() sensorLabel: string;
  @Input() picAddress: string;
  @Input() deviceId: string;

  ngOnInit() {
    this.apiService.sendMessage(this.deviceId, 'get', this.sensorName, this.picAddress).subscribe((res: any) => {
      const input: HTMLInputElement = window.document.getElementById(this.sensorName + this.picAddress) as HTMLInputElement;
      if (res.payload.data === 1) {
        input.checked = true;
      }
    });
    this.message = this.wsService
      .connect(this.deviceId + '/' + this.picAddress).pipe(map((response: any): any => {
        return response;
      })) as Subject<any>;

    this.message.subscribe(msg => {
      this.connected = msg.connected;
    });

    this.status = this.wsService
      .connect(this.deviceId + '/' + this.picAddress + '/' + this.sensorName).pipe(map((response: any): any => {
        return response;
      })) as Subject<any>;

    this.status.subscribe(msg => {
      let input = window.document.getElementById(this.sensorName + this.picAddress) as HTMLInputElement;
      this.isCliccable = false;
      if (msg.msg.action === 'on' && !input.checked) {
        input.click();
      } else if (msg.msg.action === 'off' && input.checked) {
        input.click();
      }
      this.isCliccable = true;
    });
  }

  sendMessage() {
    if (this.isCliccable) {
      let sAction = '';
      const input: HTMLInputElement = window.document.getElementById(this.sensorName + this.picAddress) as HTMLInputElement;

      if (input.checked) {
        sAction = 'on';
      } else {
        sAction = 'off';
      }
      this.apiService.sendMessage(this.deviceId, sAction, this.sensorName, this.picAddress).subscribe((res: any) => {
        console.dir(res);
        console.dir(sAction);
        if ((sAction === 'on' && res.payload.data === 0)
          || (sAction === 'off' && res.payload.data === 1)) {
          input.click();
        } else if (res.payload.data === undefined) {
          const button = window.document.getElementById('modalError');
          button.click();
        }
      });
    }
  }
}
