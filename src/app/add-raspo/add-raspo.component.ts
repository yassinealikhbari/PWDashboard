import {Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-add-raspo',
  templateUrl: './add-raspo.component.html',
  styleUrls: ['./add-raspo.component.scss']
})
export class AddRaspoComponent implements OnInit {
  // @Output() ReloadDevicesConfig: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickSubmit(formData) {
    this.apiService.sendRasp(formData.deviceId).subscribe((res) => {
      window.location.reload();
    });
  }
}
