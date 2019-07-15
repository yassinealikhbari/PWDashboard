import {AfterContentInit, AfterViewInit, Component, Injectable, Input, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Socket} from 'ngx-socket-io';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']
})

@Injectable()
export class PicComponent implements OnDestroy, OnInit {
  statusClass: string;

  @Input()
  pic: any;
  picsArray: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    // this.socket.on('flyiot', (data: any) => {
    //   console.dir(data);
    // });
    this.apiService.sendMessage('isConn', 'pic', this.pic.address).subscribe((res: any) => {
      console.dir('OKS' + res);
      this.statusClass = res.payload.connected;
      console.dir(this.pic.picAddress);
    });

    /*const picsKey: string[] = Object.keys(this.pics);
    console.dir(picsKey);
    for (let i = 0; i < this.picsArray.length; i++) {
      this.picsArray.push(this.pics[picsKey[i]]);
    }*/
    // this.getMessage();
  }

  // getMessage() {
  //  return this.socket
  //    .fromEvent('message').pipe(map((data: any) => {
  //      console.dir(data);
  //    }));
  // }

  public ngOnDestroy() {
  }

}
