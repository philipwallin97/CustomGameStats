import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Champ } from '../champ/champ.component';
import { Participant, Player } from '../game/game.component';

export class StatObject {
  constructor(
    public id: string,
    public stat: string,
    public stat2: string,
    public stat3: string,
    public stat4: string,
    public stat5: string
  ) {
  }
}

export class TeammateStat {
  constructor(
    public summonerId: number,
    public summonerName: number,
    public wins: number,
    public winPercent: number,
    public losses: number,
    public lossPercent: number,
    public nrOfGames: number
  ) {
  }
}

export class ChampStats {
  constructor(
    public champId: number,
    public wins: number,
    public losses: number,
    public nrOfTimes: number,
    public kills: number,
    public deaths: number,
    public assists: number,
    public winPercent: number,
    public averageKills: number,
    public averageDeaths: number,
    public averageAssists: number
  ) {
  }
}


export class PlayerLaneStat{
  constructor(
    public damageTop: number,
    public gamesTop: number,
    public killsTop: number,
    public deathsTop: number,
    public assistsTop: number,
    public damageJungle: number,
    public gamesJungle: number,
    public killsJungle: number,
    public deathsJungle: number,
    public assistsJungle: number,
    public damageMid: number,
    public gamesMid: number,
    public killsMid: number,
    public deathsMid: number,
    public assistsMid: number,
    public damageBot: number,
    public gamesBot: number,
    public killsBot: number,
    public deathsBot: number,
    public assistsBot: number,
    public damageSupport: number,
    public gamesSupport: number,
    public killsSupport: number,
    public deathsSupport: number,
    public assistsSupport: number
  ) {
  }
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerWinLosePercent: StatObject | undefined;
  playerKDA: StatObject | undefined; 
  playerMostKills: StatObject | undefined;
  playerMostDeaths: StatObject | undefined;
  playerMostAssists: StatObject | undefined;
  playerMultipleKillStats: StatObject | undefined;
  player!: Player;
  playerLaneStat!: PlayerLaneStat;
  champs: Champ[] = [];
  games: Participant[] = [];
  teammateStats : TeammateStat[] = [];
  champStats: ChampStats[] = [];
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getChamps();
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params.summonerId);
        this.getPlayer(params.summonerId);
        this.getPlayerWinLosePercent(params.summonerId);
        this.getPlayerAverageKDA(params.summonerId);
        this.getPlayerMostKills(params.summonerId);
        this.getPlayerMostDeaths(params.summonerId);
        this.getPlayerMostAssists(params.summonerId);
        this.getPlayerMultipleKillStats(params.summonerId);
        this.getPlayerTeammateStats(params.summonerId);
        this.getPlayerLaneStats(params.summonerId);
        this.getChampsStats(params.summonerId);
      }
    ); 
  }

  getChamps(){
    this.httpClient.get<any>(environment.API_URL + '/Champ/GetAllChamps').subscribe(
      response => {
        console.log("Champs");
        console.log(response);
        this.champs = response;
      }
    );
  }

  getPlayer(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerBySummonerId?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.player = response;
        this.getParticipantData();
      }
    );
  }

  getParticipantData(){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetAllParticipantDataFromPlayer?summonerId=' + this.player.summonerId).subscribe(
      response => {
        this.games  = response;
      }
    );
  }

  getPlayerWinLosePercent(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerWinLosePercent?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.playerWinLosePercent = response;
      }
    );
  }

  getPlayerAverageKDA(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerAverageKDA?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.playerKDA = response;
      }
    );
  }

  getPlayerMostKills(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerMostKills?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.playerMostKills = response;
      }
    );
  }

  getPlayerMostDeaths(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerMostDeaths?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.playerMostDeaths = response;
      }
    );
  }

  getPlayerMostAssists(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerMostAssists?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.playerMostAssists = response;
      }
    );
  }

  getPlayerMultipleKillStats(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerMultipleKillStats?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.playerMultipleKillStats = response;
      }
    );
  }

  getPlayerTeammateStats(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerTeammateStats?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.teammateStats = response;
      }
    );
  }

  getPlayerLaneStats(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetPlayerLaneStats?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.playerLaneStat = response;
      }
    );
  }

  getChampsStats(summonerId: string){
    this.httpClient.get<any>(environment.API_URL + '/Player/GetChampsStats?summonerId=' + summonerId)
    .subscribe(
      response => {
        console.log(response);
        this.champStats = response;
      }
    );
  }

}
