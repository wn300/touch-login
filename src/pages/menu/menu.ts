import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = 'TabsPage'

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 1, icon: 'people' },
    { title: 'Barcode', pageName: 'BarcodePage', icon: 'barcode' }
  ]



  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index }
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if(this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }
  }

}
