import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SMessage} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://95.179.129.99:3000/api';
  localApiURL = 'http://172.20.10.2:300/api';

  picsArray: any[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getDevices() {
    return this.httpClient.get(this.localApiURL + '/device/twin');
  }

  getPicsArray() {
    return this.picsArray;
  }

  setPicsArray(pics) {
    this.picsArray = pics;
  }

  sendMessage(sAction: string, sensor: string, picAddress: string) {
    const message: SMessage = {
      deviceId: 'test-device',
      payload: {
        reciverAddress: picAddress,
        action: sAction,
        pluggedDevice: sensor,
        data: 0
      }
    };
    return this.httpClient.post(`${this.apiURL}` + '/command/InvokeDeviceMethod', message);
  }
}
