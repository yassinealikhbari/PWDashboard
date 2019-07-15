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
  status: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    const picsKey: string[] = Object.keys(this.pics);
    console.dir(picsKey);
    for (let i = 0; i < picsKey.length; i++) {
      this.picsArray.push(this.pics[picsKey[i]]);
    }
  }
  setPics() {
    this.apiService.setPicsArray(this.picsArray);
  }

}
