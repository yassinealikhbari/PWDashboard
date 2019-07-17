import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() sensorsLenght = 0;
  @Input() deviceId: string;
  @Input() pic: string;

  constructor() { }

  ngOnInit() {
    console.log(this.pic);
  }
}
