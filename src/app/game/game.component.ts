import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Champ } from '../champ/champ.component';

export class Game {
  constructor(
    public id: string,
    public gameData: GameData,
    public showFull: boolean = true
  ) {
  }
}

export class GameData {
  constructor(
    public id: string,
    public gameId: number,
    public platformId: string,
    public gameCreation: number,
    public gameDuration: number,
    public queueId: number,
    public mapId: number,
    public seasonId: number,
    public gameVersion: string,
    public gameMode: string,
    public gameType: string,
    public teams: Team[],
    public participants: Participant[],
    public participantIdentities: ParticipantIdentity[],
    public gameTimeString: string
  ) {
  }
}

export class Ban {
  constructor(
  public id: string,
  public championId: number,
  public pickTurn: number
  ) {
  }
}

export class Team {
  constructor(
  public id: string,
  public teamId: number,
  public win: string,
  public firstBlood: boolean,
  public firstTower: boolean,
  public firstInhibitor: boolean,
  public firstBaron: boolean,
  public firstDragon: boolean,
  public firstRiftHerald: boolean,
  public towerKills: number,
  public inhibitorKills: number,
  public baronKills: number,
  public dragonKills: number,
  public vilemawKills: number,
  public riftHeraldKills: number,
  public dominionVictoryScore: number,
  public bans: Ban[]
  ) {
  }
}

export class Stats {
  constructor(
  public id: string,
  public participantId: number,
  public win: boolean,
  public item0: number,
  public item1: number,
  public item2: number,
  public item3: number,
  public item4: number,
  public item5: number,
  public item6: number,
  public kills: number,
  public deaths: number,
  public assists: number,
  public largestKillingSpree: number,
  public largestMultiKill: number,
  public killingSprees: number,
  public longestTimeSpentLiving: number,
  public doubleKills: number,
  public tripleKills: number,
  public quadraKills: number,
  public pentaKills: number,
  public unrealKills: number,
  public totalDamageDealt: number,
  public magicDamageDealt: number,
  public physicalDamageDealt: number,
  public trueDamageDealt: number,
  public largestCriticalStrike: number,
  public totalDamageDealtToChampions: number,
  public magicDamageDealtToChampions: number,
  public physicalDamageDealtToChampions: number,
  public trueDamageDealtToChampions: number,
  public totalHeal: number,
  public totalUnitsHealed: number,
  public damageSelfMitigated: number,
  public damageDealtToObjectives: number,
  public damageDealtToTurrets: number,
  public visionScore: number,
  public timeCCingOthers: number,
  public totalDamageTaken: number,
  public magicalDamageTaken: number,
  public physicalDamageTaken: number,
  public trueDamageTaken: number,
  public goldEarned: number,
  public goldSpent: number,
  public turretKills: number,
  public inhibitorKills: number,
  public totalMinionsKilled: number,
  public neutralMinionsKilled: number,
  public neutralMinionsKilledTeamJungle: number,
  public neutralMinionsKilledEnemyJungle: number,
  public totalTimeCrowdControlDealt: number,
  public champLevel: number,
  public visionWardsBoughtInGame: number,
  public sightWardsBoughtInGame: number,
  public wardsPlaced: number,
  public wardsKilled: number,
  public firstBloodKill: boolean,
  public firstBloodAssist: boolean,
  public firstTowerKill: boolean,
  public firstTowerAssist: boolean,
  public firstInhibitorKill: boolean,
  public firstInhibitorAssist: boolean,
  public combatPlayerScore: number,
  public objectivePlayerScore: number,
  public totalPlayerScore: number,
  public totalScoreRank: number,
  public playerScore0: number,
  public playerScore1: number,
  public playerScore2: number,
  public playerScore3: number,
  public playerScore4: number,
  public playerScore5: number,
  public playerScore6: number,
  public playerScore7: number,
  public playerScore8: number,
  public playerScore9: number,
  public perk0: number,
  public perk0Var1: number,
  public perk0Var2: number,
  public perk0Var3: number,
  public perk1: number,
  public perk1Var1: number,
  public perk1Var2: number,
  public perk1Var3: number,
  public perk2: number,
  public perk2Var1: number,
  public perk2Var2: number,
  public perk2Var3: number,
  public perk3: number,
  public perk3Var1: number,
  public perk3Var2: number,
  public perk3Var3: number,
  public perk4: number,
  public perk4Var1: number,
  public perk4Var2: number,
  public perk4Var3: number,
  public perk5: number,
  public perk5Var1: number,
  public perk5Var2: number,
  public perk5Var3: number,
  public perkPrimaryStyle: number,
  public perkSubStyle: number,
  public statPerk0: number,
  public statPerk1: number,
  public statPerk2: number
  ) {
  }
}

export class CreepsPerMinDeltas {
  constructor(
  public id: string,
  public _1020: number,
  public _010: number,
  public _2030: number
  ) {
  }
}

export class XpPerMinDeltas {
  constructor(
  public id: string,
  public _1020: number,
  public _010: number,
  public _2030: number
  ) {
  }
}

export class GoldPerMinDeltas {
  constructor(
  public id: string,
  public _1020: number,
  public _010: number,
  public _2030: number
  ) {
  }
}

export class CsDiffPerMinDeltas {
  constructor(
  public id: string,
  public _1020: number,
  public _010: number,
  public _2030: number
  ) {
  }
}

export class XpDiffPerMinDeltas {
  constructor(
  public id: string,
  public _1020: number,
  public _010: number,
  public _2030: number
  ) {
  }
}

export class DamageTakenPerMinDeltas {
  constructor(
  public id: string,
  public _1020: number,
  public _010: number,
  public _2030: number
  ) {
  }
}

export class DamageTakenDiffPerMinDeltas {
  constructor(
  public id: string,
  public _1020: number,
  public _010: number,
  public _2030: number
  ) {
  }
}

export class Timeline {
  constructor(
  public id: string,
  public participantId: number,
  public creepsPerMinDeltas: CreepsPerMinDeltas,
  public xpPerMinDeltas: XpPerMinDeltas,
  public goldPerMinDeltas: GoldPerMinDeltas,
  public csDiffPerMinDeltas: CsDiffPerMinDeltas,
  public xpDiffPerMinDeltas: XpDiffPerMinDeltas,
  public damageTakenPerMinDeltas: DamageTakenPerMinDeltas,
  public damageTakenDiffPerMinDeltas: DamageTakenDiffPerMinDeltas,
  public role: string,
  public lane: string
  ) {
  }
}

export class Participant {
  constructor(
  public id: string,
  public playerId: string,
  public participantId: number,
  public teamId: number,
  public championId: number,
  public spell1Id: number,
  public spell2Id: number,
  public stats: Stats,
  public timeline: Timeline
  ) {
  }
}

export class ParticipantIdentity {
  constructor(
  public id: string,
  public participantId: number,
  public player: Player
  ) {
  }
}

export class Player {
  constructor(
    public id: string,
    public platformId: string,
    public acountId: number,
    public summonerName: string,
    public summonerId: number,
    public currentPlatformId: string,
    public currentAccountId: number,
    public matchHistoryUri: string,
    public profileIcon: number
  ) {
  }
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Game[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.httpClient.get<any>(environment.API_URL + '/GameData/GetAllGameDatas').subscribe(
      response => {
        console.log(response);
        this.games = response;
        this.games.forEach(element => {
          element.showFull = false
        });
      }
    );
  }

  toggleGame(e: Game) {
    e.showFull = !e.showFull;
   }
}
