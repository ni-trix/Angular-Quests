import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TransmissionServService } from '../../services/transmission-serv.service';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {
  // datas = [];
  // profileForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(1)]),
  //   race: new FormControl('', [Validators.required, Validators.minLength(1)]),
  //   birthday: new FormControl('', [Validators.required]),
  //   photoUrl: new FormControl('', ),
  // });

  constructor( public transmissionServService: TransmissionServService ) { }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const race = form.value['race'];
    const birthday = form.value['birthday'];
    const photoUrl = form.value['photoUrl'];
    this.transmissionServService.addKitten(name, race, birthday, photoUrl );
    console.log(form.value);
}


  // onSubmit($event) {

  //   let urlForm = this.profileForm.value.photoUrl;
  //   let nameForm = this.profileForm.value.name;
  //   let raceForm = this.profileForm.value.race;
  //   let birthForm = this.profileForm.value.birthday;

  //   if ( nameForm.length >= 2 && raceForm.length >= 2) {
  //   this.datas.push(nameForm);
  //   this.datas.push(raceForm);
  //   this.datas.push(birthForm);
  //   this.datas.push(urlForm);
  //   console.log('oui');
  //   console.log(this.datas);
  //   } else {
  //     console.log('ERROR');
  //   }
  // }

  ngOnInit() {
    // this.datas = this.transmissionServService.datas;
  }

}
