import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

export class Champ {
  constructor(
    public id: number,
    public name: string
  ) {
  }
}

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent implements OnInit {

  champs: Champ[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getChamps();
  }

  getChamps(){
    this.httpClient.get<any>(environment.API_URL + '/Champ​/GetAllChamps').subscribe(
      response => {
        console.log(response);
        this.champs = response;
      }
    );
  }

}
