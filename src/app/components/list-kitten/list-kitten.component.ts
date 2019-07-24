import { Component, OnInit } from '@angular/core';

import { TransmissionServService } from '../../services/transmission-serv.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})

export class ListKittenComponent implements OnInit {
datas;
hoverIndex = false;

constructor(public transmissionServService: TransmissionServService) { }


  ngOnInit() {
    this.datas = this.transmissionServService.datas;
  }

  enter() {
    this.hoverIndex = true;
  }

  leave() {
    this.hoverIndex = false;
  }

  adoptKitty(i) {
    const index = i;
    console.log(this.datas[index]);
    this.transmissionServService.addUserKitten(this.datas[index]);
    this.datas.splice(this.datas[index], 1);
  }

}
