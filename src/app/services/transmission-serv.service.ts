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
      name: '',
      race: '',
      birthday,
      photoUrl,
    };
    kittenObject.name = name;
    kittenObject.race = race;
    kittenObject.birthday = birthday;
    kittenObject.photoUrl = photoUrl;
    this.datas.push(kittenObject);
  }

  addUserKitten(myCat: any) {
    const newCat = myCat;
    this.userDatas.push(newCat);
  }


}
