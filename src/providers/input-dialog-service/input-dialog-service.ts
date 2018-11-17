//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';


/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Please Edit Item': 'Add item',
      message: item ? "Please edit item..." : 'Please enter item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index != undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
            this.dataService.editItem(item, index);
          }
        }
      ]
    });
    prompt.present();
  }


  //constructor(public http: HttpClient) {
  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

}
