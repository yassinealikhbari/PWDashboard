import {Component, Injectable, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../api.service';
import {WebSocketService} from '../web-socket.service';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']
})

@Injectable()
export class PicComponent implements OnInit {
  statusClass = 'disabled';

  @Input() pic: any;
  @Input() picAddress: string;
  @Input() deviceId: string;

  message: Subject<any>;
  picsArray: any;

  constructor(private apiService: ApiService, private wsService: WebSocketService) {
  }

  ngOnInit() {
    console.log(this.pic);
    this.message = this.wsService
    .connect(this.deviceId + '/' + this.picAddress).pipe(map((response: any): any => {
      return response;
    })) as Subject<any>;

    this.message.subscribe(msg => {
      this.statusClass = msg.connected;
      this.apiService.setPicStatus(this.statusClass);
      console.log(this.statusClass);
    });

    this.apiService.sendMessage(this.deviceId, 'isConn', 'pic', this.pic.address).subscribe((res: any) => {
      console.dir(res);
      this.statusClass = res.payload.connected;
      this.apiService.setPicStatus(this.statusClass);
      console.log(this.statusClass);
    });
  }
}
