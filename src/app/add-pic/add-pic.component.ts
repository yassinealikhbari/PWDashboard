import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-pic',
  templateUrl: './add-pic.component.html',
  styleUrls: ['./add-pic.component.scss']
})
export class AddPicComponent implements OnInit {

  @Input() picsLenght = 0;
  @Input() deviceId: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  onClickSubmit(formData) {
    this.apiService.sendPic(this.deviceId, formData.pic, formData.picAddress, this.picsLenght).subscribe((res) => {
      window.location.reload();
    });
  }
}
