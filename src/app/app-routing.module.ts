import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {path: 'games', component: GameComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'gamedetails', component: GamedetailsComponent},
  {path: '', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
