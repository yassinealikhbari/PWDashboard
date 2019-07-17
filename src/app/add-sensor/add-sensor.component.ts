import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.scss']
})
export class AddSensorComponent implements OnInit {

  @Input() sensorsLenght = 0;
  @Input() deviceId: string;
  @Input() pic: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  onClickSubmit(formData) {
    console.dir(this.pic);
    this.apiService.sendSensor(this.deviceId, this.pic, formData.sensor, formData.label, this.sensorsLenght).subscribe((res) => {
      window.location.reload();
    });
  }
}
