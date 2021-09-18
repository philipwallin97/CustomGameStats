import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './game/game.component';
import { ChampComponent } from './champ/champ.component';
import { PlayerComponent } from './player/player.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SortDirective } from './directive/sort.directive';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ChampComponent,
    PlayerComponent,
    LeaderboardComponent,
    SortDirective,
    GamedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxChartsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
