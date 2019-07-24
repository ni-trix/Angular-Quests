import { Component, OnInit } from '@angular/core';

import { TransmissionServService } from '../../services/transmission-serv.service';


@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {
userCats;
hoverIndex;

  constructor(public transmissionServService: TransmissionServService) { }

  ngOnInit() {
    this.userCats = this.transmissionServService.userDatas;
  }

  enter() {
    this.hoverIndex = true;
}

leave() {
    this.hoverIndex = false;
}

}
