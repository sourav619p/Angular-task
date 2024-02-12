import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';

interface Vehicle {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  postArray=[]
  title = 'sourav';
  data={
     firstname:'',
     lastname:'',
     startdate:'',
     vehicle:'',
     animal:''
  }

  vehicles: Vehicle[] = [
    { id: 1, name: "Benz" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Audi" }
  ];

  constructor(private getApi: ApiCallService) {
    this.getApi.getPost().subscribe((res) => {
      console.log(res);
      this.postArray = res;
    });
  }

  selectVehicle(vehicle :Vehicle) {
    this.data.vehicle = vehicle.name;
  }

  onSubmit(){
    console.log("clicked")
    alert(JSON.stringify(this.data))
  }
}
