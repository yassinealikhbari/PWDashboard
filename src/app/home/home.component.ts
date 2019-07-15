import {Component, OnInit} from '@angular/core';
import {Raspo} from '../app.component';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  raspsArray: any[] = [
    {
      deviceId: 'test-device',
      pics: {
        pic1: {
          name: 'ingresso',
          address: 'a',
          sensors: {
            sensor1: 'luce1',
            sensor2: 'luce2'
          }
        },
          pic2: {
            name: 'ingresso',
            address: 'c',
            sensors: {
              sensor1: 'luce1',
            }
          }
        },
        generationId: '636977869410246707',
        etag: 'MTUwMjY3NzUx',
        connectionState: 'Connected',
        status: 'enabled',
        statusReason: null,
        connectionStateUpdatedTime: '2019-07-14T18:36:58.3064542',
        statusUpdatedTime: '0001-01-01T00:00:00',
        lastActivityTime: '2019-07-14T13:53:55.6854224',
        cloudToDeviceMessageCount: 0,
        capabilities: {},
        authentication: {
          symmetricKey: {
            primaryKey: 'mbYubWFrZq+aqg5JQJunVvr8HjnVWZ4WwKp86q18q9Q=',
            secondaryKey: 'ZODtcaSqdmXDk2p4H58O04q1sPrvta/8i1240qPma/Y='
          },
          x509Thumbprint: {
            primaryThumbprint: null,
            secondaryThumbprint: null
          },
          type: 'sas',
          SymmetricKey: {
            primaryKey: 'mbYubWFrZq+aqg5JQJunVvr8HjnVWZ4WwKp86q18q9Q=',
            secondaryKey: 'ZODtcaSqdmXDk2p4H58O04q1sPrvta/8i1240qPma/Y='
          }
        }
      },
    {
      deviceId: 'test-device2',
      pics: {
        pic1: {
          name: 'ingresso',
          address: 'r',
          sensors: {
            sensor1: 'luce1',
            sensor2: 'luce2'
          }
        }
      },
      generationId: '636984757159528451',
      etag: 'ODI1MDU0Nzc=',
      connectionState: 'Disconnected',
      status: 'disabled',
      statusReason: null,
      connectionStateUpdatedTime: '0001-01-01T00:00:00',
      statusUpdatedTime: '0001-01-01T00:00:00',
      lastActivityTime: '0001-01-01T00:00:00',
      cloudToDeviceMessageCount: 0,
      capabilities: {},
      authentication: {
        symmetricKey: {
          primaryKey: 'mFunmZN213QL1nh7MA+N7qonq1bEXr776GC3VeBiS+s=',
          secondaryKey: 'O3D89yGHHL3Yc03MCfq1mvh3bQa6EHXAbBcHFUFuQUs='
        },
        x509Thumbprint: {
          primaryThumbprint: null,
          secondaryThumbprint: null
        },
        type: 'sas',
        SymmetricKey: {
          primaryKey: 'mFunmZN213QL1nh7MA+N7qonq1bEXr776GC3VeBiS+s=',
          secondaryKey: 'O3D89yGHHL3Yc03MCfq1mvh3bQa6EHXAbBcHFUFuQUs='
        }
      }
    },
    {
      deviceId: 'yasberry',
      pics: {
        pic1: {
          name: 'ingresso',
          address: 'a',
          sensors: {
            sensor1: 'luce1',
            sensor2: 'motore'
          }
        }
      },
      generationId: '636977620068316736',
      etag: 'NjUxNTI2NTY5',
      connectionState: 'Disconnected',
      status: 'disabled',
      statusReason: null,
      connectionStateUpdatedTime: '2019-07-03T22:54:17.3669103',
      statusUpdatedTime: '0001-01-01T00:00:00',
      lastActivityTime: '2019-07-03T22:48:57.1861289',
      cloudToDeviceMessageCount: 0,
      capabilities: {},
      authentication: {
        symmetricKey: {
          primaryKey: 'Y1nQawZMKcVcAg+63jSSlIhQ/YI0e0GrRrdXoyz5LLw=',
          secondaryKey: 'zz4iTU3OJoAn43zG8sTS6pAok6g5OJ9ppsNZafTfbq0='
        },
        x509Thumbprint: {
          primaryThumbprint: null,
          secondaryThumbprint: null
        },
        type: 'sas',
        SymmetricKey: {
          primaryKey: 'Y1nQawZMKcVcAg+63jSSlIhQ/YI0e0GrRrdXoyz5LLw=',
          secondaryKey: 'zz4iTU3OJoAn43zG8sTS6pAok6g5OJ9ppsNZafTfbq0='
        }
      }
    }
  ];

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

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getDevices();
  }

  getDevices() {
    this.apiService.getDevices().subscribe((res: any[]) => {
      this.raspsArray = res;
      console.log(this.raspsArray);
    });
  }
}
