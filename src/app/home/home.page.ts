import { Component } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { MyCustomPlugin } from 'my-custom-plugin';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  result:any;
  constructor() {}
  async testPluginMethod(msg:string){
    await MyCustomPlugin.TestPlugin({value:msg})
    .then((res:any)=>{this.result=JSON.stringify(res.value)})
    .catch((err:any)=>{alert("return value is"+JSON.stringify(err))})
  }
}
