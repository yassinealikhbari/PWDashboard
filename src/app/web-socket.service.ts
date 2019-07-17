import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable, Subject} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket; // socket that connect to our socket.io server

  constructor() { }

  public connect(topic: string): Subject<MessageEvent> {
    this.socket = io(environment.ws_url);
    const observable = new Observable(obs => {
      this.socket.on(topic, (data) => {
        console.log('Recived message from websocket server');
        obs.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    const observer = {
      next: (data: object) => {
        this.socket.emit('message', JSON.stringify(data));
      }
    };

    return Subject.create(observer, observable);
  }

  sendMsg(subject: Subject<any>, msg) {
    subject.next(msg);
  }
}
