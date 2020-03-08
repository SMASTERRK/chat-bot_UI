import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-report',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[];
  dataSource: PeriodicElement[];
  constructor(private http: HttpClient, private app: AppComponent) { }
  url: string;
  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = ELEMENT_DATA;
    this.onRefresh();
  }
  onRefresh() {
    this.url = 'http://ec2-18-217-188-135.us-east-2.compute.amazonaws.com:8080/employees/list';
    
    this.http.get(this.url, null).subscribe(data => {
      let jsonstring = JSON.stringify(data);
      let jsonObject = JSON.parse(jsonstring);
      this.dataSource = jsonObject;
      let values = Object.values(jsonObject);
      if (values.length > 0) {
        this.displayedColumns = Object.keys(values[0]);
      }
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
];

