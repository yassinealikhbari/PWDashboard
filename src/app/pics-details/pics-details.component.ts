import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pics-details',
  templateUrl: './pics-details.component.html',
  styleUrls: ['./pics-details.component.scss']
})
export class PicsDetailsComponent implements OnInit {

  @Input() pics: any;

  sensorsArray: any[] = [];
  constructor() { }

  ngOnInit() {
    const sensorsKey: string[] = Object.keys(this.pics.sensors);
    console.dir(sensorsKey);
    for (let i = 0; i < sensorsKey.length; i++) {
      this.sensorsArray.push(this.pics.sensors[sensorsKey[i]]);
      console.dir(this.sensorsArray);
    }
  }

}
