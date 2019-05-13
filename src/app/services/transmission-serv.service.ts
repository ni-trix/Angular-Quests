import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransmissionServService {
datas = [];
userDatas = [];
  constructor() { }

  addKitten(name: string, race: string, birthday: any, photoUrl: any) {
    const kittenObject = {
      // id: 0,
      name: '',
      race: '',
      birthday,
      photoUrl,
    };
    kittenObject.name = name;
    kittenObject.race = race;
    kittenObject.birthday = birthday;
    kittenObject.photoUrl = photoUrl;
    // kittenObject.id = this.datas[(this.datas.length - 1)].id + 1;
    this.datas.push(kittenObject);
  }

  addUserKitten(myCat: any) {
    let newCat = myCat;
    this.userDatas.push(newCat);
  }


}
