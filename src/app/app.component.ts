import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toDO: any[] = []
  event = ""
  date: string = ""

  addEvent() {
    if (this.event != "" && this.date != "") {
      this.toDO.push({ "eventName": this.event, "dateofEvent": this.date })
      this.event = this.date = ""
    } else alert("Please fill the details")
  }

  remove=(e:number)=>{this.toDO.splice(e, 1)}
}
