import { Component, OnInit } from '@angular/core';
import { TransmissionServService } from '../../services/transmission-serv.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
datas;

constructor(public transmissionServService: TransmissionServService) { }


  ngOnInit() {
    this.datas = this.transmissionServService.datas;
  }

  adoptKitty(i) {
    let index = i;
    console.log(i);
    this.transmissionServService.addUserKitten(this.datas[index]);
    // this.datas.slice(this.datas[index]);
    console.log(this.datas);
  }

}
