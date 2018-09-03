import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from "angularfire2/database"
import { ShoppingItem } from '../../app/models/shoppingItem/shoppingItem.interface';
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: AngularFireList<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingListRef$ = this.database.list('shoppingList');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  navToAddShopping(): void{
    this.navCtrl.push("AddShoppingPage");
  }

}
