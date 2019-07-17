import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pics-details',
  templateUrl: './pics-details.component.html',
  styleUrls: ['./pics-details.component.scss']
})
export class PicsDetailsComponent implements OnInit {

  @Input() pics: any;
  @Input() raspo: string;
  @Input() picsKey: string;

  sensorsNames: any[] = [];
  sensorsLabels: any[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.pics);
    const sensorsKey: string[] = Object.keys(this.pics.sensors);
    for (let i = 0; i < sensorsKey.length; i++) {
      this.sensorsNames.push(this.pics.sensors[sensorsKey[i]].name);
      this.sensorsLabels.push(this.pics.sensors[sensorsKey[i]].label);
    }
  }

}
