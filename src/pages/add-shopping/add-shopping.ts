import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../app/models/shoppingItem/shoppingItem.interface';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: AngularFireList<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list("shoppingList"); 
  }

  // function to add shooping item information to main page
  addShoppingItem(shopppingItem: ShoppingItem){
    // create a new object
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });
  
    this.shoppingItem = {} as ShoppingItem;

    this.navCtrl.pop();
  }


}
