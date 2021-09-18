import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Champ } from '../champ/champ.component';
import { StatObject } from '../player/player.component';

export class LeaderboardStat {
  constructor(
    public id: string,
    public summonerId: number,
    public iconId: number,
    public ign: string,
    public kills: number,
    public deaths: number,
    public assists: number,
    public wins: number,
    public losses: number,
    public winPercent: number,
    public averageKDA: number,
    public mostPlayedChamp: number
  ) {
  }
}

export class ChampFrequency {
  constructor(
    public champId: number,
    public value: number
  ) {
  }
}

export class SummonerFrequency {
  constructor(
    public summonerId: number,
    public summonerName: string,
    public profileIcon: number,
    public value: number
  ) {
  }
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  dateAndGames: StatObject | undefined;
  playerWithMostDeaths: StatObject | undefined;
  playerWithMostKills: StatObject | undefined;
  playerWithMostAssists: StatObject | undefined;
  champs: Champ[] = [];
  leaderboardStats: LeaderboardStat[] = [];
  mostBannedChamps: ChampFrequency[] = [];
  mostPickedChamps: ChampFrequency[] = [];

  mostFirstbloods: SummonerFrequency[] = [];
  mostFirstblooded: SummonerFrequency[] = [];

  gamesPlayedLimit = 5;

  nrOfItemsInPickedAndBanned = 5;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getChamps();
    this.getLeaderboard();
    this.getNumberOfGamesAndDates();
    this.getPlayerWithMostKills();
    this.getPlayerWithMostDeaths();
    this.getPlayerWithMostAssists();
    this.getMostBannedChamps();
    this.getMostPickedChamps();
    this.getMostFirstbloods();
    this.getMostFirstblooded();
  }

  getChamps(){
    this.httpClient.get<any>(environment.API_URL + '/Champ/GetAllChamps').subscribe(
      response => {
        this.champs = response;
      }
    );
  }

  getLeaderboard(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetLeaderboardStats').subscribe(
      response => {
        this.leaderboardStats = response;
      }
    );
  }

  getNumberOfGamesAndDates(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetNumberOfGamesAndDates')
    .subscribe(
      response => {
        console.log(response);
        this.dateAndGames = response;
      }
    );
  }

  getPlayerWithMostDeaths(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetPlayerWithMostDeaths')
    .subscribe(
      response => {
        console.log(response);
        this.playerWithMostDeaths = response;
      }
    );
  }

  getPlayerWithMostKills(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetPlayerWithMostKills')
    .subscribe(
      response => {
        console.log(response);
        this.playerWithMostKills = response;
      }
    );
  }

  getPlayerWithMostAssists(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetPlayerWithMostAssists')
    .subscribe(
      response => {
        console.log(response);
        this.playerWithMostAssists = response;
      }
    );
  }

  getMostBannedChamps(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetMostBannedChamps?nrOfResults=' + this.nrOfItemsInPickedAndBanned)
    .subscribe(
      response => {
        console.log(response);
        this.mostBannedChamps = response;
      }
    );
  }

  getMostPickedChamps(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetMostPickedChamps?nrOfResults=' + this.nrOfItemsInPickedAndBanned)
    .subscribe(
      response => {
        console.log(response);
        this.mostPickedChamps = response;
      }
    );
  }


  getMostFirstbloods(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetMostFirstBloods?nrOfResults=' + this.nrOfItemsInPickedAndBanned)
    .subscribe(
      response => {
        console.log(response);
        this.mostFirstbloods = response;
      }
    );
  }

  getMostFirstblooded(){
    this.httpClient.get<any>(environment.API_URL + '/Leaderboard/GetMostFirstBlooded?nrOfResults=' + this.nrOfItemsInPickedAndBanned)
    .subscribe(
      response => {
        console.log(response);
        this.mostFirstblooded = response;
      }
    );
  }

  toggleShowPlayersWithFewGames(){
    if (this.gamesPlayedLimit == 5){
      this.gamesPlayedLimit = 0;
    }
    else
    { 
      this.gamesPlayedLimit = 5;
    }
  }

}
