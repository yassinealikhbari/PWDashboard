import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Pic, Raspo} from '../app.component';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-raspi',
  templateUrl: './raspi.component.html',
  styleUrls: ['./raspi.component.scss']
})
export class RaspiComponent implements OnInit {

  @Output() countChange = new EventEmitter();


  @Input() raspiName: string;
  @Input() raspiStatus: string;
  @Input() pics: any;


  picsArray: any[] = [];
  picsKey: any[] = [];
  status: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    console.dir(this.raspiName);
    console.dir(this.raspiStatus);
    console.dir(this.pics);

    if (this.pics !== undefined) {
      this.picsKey = Object.keys(this.pics);
      console.dir(this.picsKey);
      for (let i = 0; i < this.picsKey.length; i++) {
        this.picsArray.push(this.pics[this.picsKey[i]]);
      }
    }
  }
  // ReloadDevicesConfig($event) {
  //   console.log($event);
  // }
  setDevices() {
    this.setPics();
    this.setRaspo();
    this.setPicsKey();
  }
  setPics() {
    this.apiService.setPicsArray(this.picsArray);
  }
  setRaspo() {
    this.apiService.setRaspoName(this.raspiName);
  }

  setPicsKey() {
    this.apiService.setPicsKeyArray(this.raspiName);
  }

}
