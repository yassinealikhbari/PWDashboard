import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {InjectablePipeVisitor} from '@angular/core/schematics/migrations/injectable-pipe/angular/injectable_pipe_visitor';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent implements OnInit {
  status = 'connected';
  stat = true;

  @Input()
  doorName: string;
  @Input()
  picAddress: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  sendMessage(sAction: string) {
    console.dir(sAction + ' ' + this.doorName + ' ' + this.picAddress);
    this.apiService.sendMessage(sAction, this.doorName, this.picAddress);
  }
}
