import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Champ } from '../champ/champ.component';
import { Game } from '../game/game.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export interface BubbleSeries {
  name: string;
  x: number;
  y: number;
  r: number;
}

export interface BubbleRootObject {
  name: string;
  series: BubbleSeries[];
}


export interface Series {
  name: number;
  value: number;
}

export interface RootObject {
  name: string;
  series: Series[];
}

export class Graph {
  constructor(
    public data: GraphData,
    public colors: GraphColors
  ) {
  }
}

export class GraphColors {
  constructor(
  public name: string,
  public value: string
  ) {
  }
}

export class GraphData {
  constructor(
  public name: string,
  public value: number
  ) {
  }
}

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})
export class GamedetailsComponent implements OnInit {
  champs: Champ[] = [];
  game: Game | undefined;
  cspm: Graph | undefined;
  gpm: Graph | undefined;
  damage: Graph | undefined;
  goldDiff: RootObject | undefined;
  teamGold: RootObject | undefined;
  playerGold: RootObject | undefined;
  mapKills: BubbleRootObject | undefined;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  CSPMLabel: string = 'CS/Min';
  GPMLabel: string = 'Gold/Min';
  DamageLabel: string = 'Damage to champ';
  GoldDiffLabel: string = 'Team gold difference';
  TeamGoldLabel: string = 'Team gold';
  PlayerGoldLabel: string = 'Gold per player';


  yAxisLabel: string = 'Population';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Years';
  maxRadius: number = 20;
  minRadius: number = 1;
  xScaleMin: number = 0;
  yScaleMin: number = 0;
  xScaleMax: number = 15000;
  yScaleMax: number = 15000;

  
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { 
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.getChamps();
    this.route.queryParams
      .subscribe(params => {
        this.getGame(params.gameId);
        this.getCSPM(params.gameId);
        this.getGPM(params.gameId);
        this.getDamage(params.gameId);
        this.getGoldDiff(params.gameId);
        this.getTeamGold(params.gameId);
        this.getPlayerGold(params.gameId);
        this.getKillPositions(params.gameId);
      }
    ); 
  }

  getChamps(){
    this.httpClient.get<any>(environment.API_URL + '/Champ/GetAllChamps').subscribe(
      response => {
        this.champs = response;
      }
    );
  }

  getGame(gameId: string){
    this.httpClient.get<any>(environment.API_URL + '/GameData/GetAllGameData?gameId=' + gameId).subscribe(
      response => {
        console.log(response);
        this.game = response;
      }
    );
  }

  getCSPM(gameId: string){
    this.httpClient.get<any>(environment.API_URL + '/GameData/GetCSPM?gameId=' + gameId).subscribe(
      response => {
        console.log(response);
        this.cspm = response;
      }
    );
  }

  getGPM(gameId: string){
    this.httpClient.get<any>(environment.API_URL + '/GameData/GetGPM?gameId=' + gameId).subscribe(
      response => {
        console.log(response);
        this.gpm = response;
      }
    );
  }

  getDamage(gameId: string){
    this.httpClient.get<any>(environment.API_URL + '/GameData/GetDamage?gameId=' + gameId).subscribe(
      response => {
        console.log(response);
        this.damage = response;
      }
    );
  }

  getGoldDiff(gameId: string){
    this.httpClient.get<any>(environment.API_URL + '/Timeline/GetGoldDiff?gameId=' + gameId).subscribe(
      response => {
        console.log(response);
        this.goldDiff = response;
      }
    );
  }

  getTeamGold(gameId: string){
    this.httpClient.get<any>(environment.API_URL + '/Timeline/GetTeamGold?gameId=' + gameId).subscribe(
      response => {
        console.log(response);
        this.teamGold = response;
      }
    );
  }

  getPlayerGold(gameId: string){
    this.httpClient.get<any>(environment.API_URL + '/Timeline/GetPlayerGold?gameId=' + gameId).subscribe(
      response => {
        console.log(response);
        this.playerGold = response;
      }
    );
  }

  getKillPositions(gameId: string){
    this.httpClient.get<any>(environment.API_URL + '/Timeline/GetKillPositions?gameId=' + gameId).subscribe(
      response => {
        console.log(response);
        this.mapKills = response;
      }
    );
  }

  CPMColors() {
    return this.cspm?.colors;
  }

  CPMData() {
    return this.cspm?.data;
  }

  GPMColors() {
    return this.gpm?.colors;
  }

  GPMData() {
    return this.gpm?.data;
  }

  DamageColors() {
    return this.damage?.colors;
  }

  DamageData() {
    return this.damage?.data;
  }

  GoldDiffData(){
    return this.goldDiff;
  }

  TeamGoldData(){
    return this.teamGold;
  }

  PlayerGoldData(){
    return this.playerGold;
  }

  MapKillsData(){
    return this.mapKills;
  }

}
