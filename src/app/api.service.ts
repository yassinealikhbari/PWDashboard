import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from  'rxjs/operators';
import {SMessage} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://95.179.129.99:3000/api';
  // localApiURL = 'http://172.20.10.2:3000/api';

  picsArray: any[] = [];
  raspoName: string;
  picStatus: string;
  private data = new BehaviorSubject('');
  raspsArray = this.data.asObservable();
  picKeysArray: string[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getDevices() {
    return this.httpClient.get(this.apiURL + '/device');
  }

  getDeviceById(id: string) {
    return this.httpClient.get(this.apiURL + '/device')
      .pipe(
        map((deviceList: Array<any>) => {
          return deviceList.filter(device => device.deviceId === id)[0];
        })
      );
  }

  sendRasp(newDevice: string) {
    const rasp  = { deviceId: newDevice};
    console.dir(rasp);
    return this.httpClient.post(this.apiURL + '/device', rasp);
  }

  sendPic(deviceid: string, pic, picAddress: string, picsCount: number) {
    const rasp  = {
      deviceId: deviceid,
      pics: {
      ['pic' + (picsCount + 1)]: {
          name: pic,
          address: picAddress
        },
      }
    };
    console.dir(rasp);
    return this.httpClient.put(this.apiURL + '/device', rasp);
  }

  sendSensor(deviceid: string, pic: string, sensorName: string, sensorLabel: string, sensorsCount: number) {
    const rasp  = {
      deviceId: deviceid,
      pics: {
        [pic]: {
          sensors: {
            ['sensore' + (sensorsCount + 1)]: {
              name: sensorName,
              label: sensorLabel
            }
          }
        }
      }
    };
    console.dir(rasp);
    return this.httpClient.put(this.apiURL + '/device', rasp);
  }

  setPicsKeyArray(picKeys) {
    this.picKeysArray = picKeys;
  }
  getPicsKeyArray() {
    return this.picsArray;
  }
  getPicsArray() {
    return this.picsArray;
  }
  setPicsArray(pics) {
    this.picsArray = pics;
  }
  getRaspoName() {
    return this.raspoName;
  }
  setRaspoName(raspo) {
    this.raspoName = raspo;
  }

  getPicStatus() {
    return this.picStatus;
  }
  setPicStatus(status) {
    this.picStatus = status;
  }

  sendMessage(device: string, sAction: string, sensor: string, picAddress: string) {
    const message: SMessage = {
      deviceId: device,
      payload: {
        reciverAddress: picAddress,
        action: sAction,
        pluggedDevice: sensor,
        data: 0
      }
    };
    console.dir(message);
    return this.httpClient.post(`${this.apiURL}` + '/command/invoke-method', message);
  }
}
