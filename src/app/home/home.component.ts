import {Component, Input, OnInit} from '@angular/core';
import {Raspo} from '../app.component';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  @Input()
  raspsArray: any[] = [];

  raspi: Raspo[] = [
    {name: 'Raspo piano terra', status: 'connected'},
    {name: 'Raspo primo piano', status: 'not-connected'}
  ];
  pics = [
    [
      {id: 1, name: 'Ingresso', sensorsNum: 3, status: 'connected', picAddress: 'a'},
      {id: 2, name: 'soggiorno', sensorsNum: 2, status: 'connected', picAddress: 'b'},
      {id: 3, name: 'camera 1', sensorsNum: 4, status: 'not-connected', picAddress: 'c'},
    ],
    [
      {id: 1, name: 'camera 2', sensorsNum: 3, status: 'connected', picAddress: 'r'},
      {id: 2, name: 'camera 3', sensorsNum: 2, status: 'not-connected', picAddress: 'e'},
    ],
    [
      {id: 1, name: 'camera 2', sensorsNum: 3, status: 'connected', picAddress: 'f'},
      {id: 2, name: 'camera 3', sensorsNum: 2, status: 'not-connected', picAddress: 'g'},
    ]];

  ngOnInit() {
    this.getDevices();
  }
  // addDevice() {
  //   this.raspsArray.push(this.apiService.getRasps());
  // }

  public getDevices() {
    this.apiService.getDevices().subscribe((res: any[]) => {
      this.raspsArray = res;
    });
  }

}
