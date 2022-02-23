import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { GamesComponent } from './components/games/games.component';
import { FriendsComponent } from './components/friends/friends.component';
import { LibraryGamesComponent } from './components/library-games/library-games.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardsComponent } from './components/games/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { GamesSearchPipe } from './pipes/games-search.pipe';
import { ActionFilterPipe } from './pipes/action-filter.pipe';
import { IndieFilterPipe } from './pipes/indie-filter.pipe';
import { AdventureFilterPipe } from './pipes/adventure-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { MyGamesService } from './service/my-games.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinner } from './shared/loading-spinner/loading-spinner.component';
import { FriendItemComponent } from './components/friend-item/friend-item.component';
import { AuthGuardService } from './services/auth-guard.service';

const AppRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'games', component: GamesComponent, canActivate: [AuthGuardService] },
  {
    path: 'library',
    component: LibraryGamesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'friends',
    component: FriendsComponent,
    canActivate: [AuthGuardService],
  },
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    GamesComponent,
    FriendsComponent,
    LibraryGamesComponent,
    ProfileComponent,
    CardsComponent,
    GamesSearchPipe,
    ActionFilterPipe,
    IndieFilterPipe,
    AdventureFilterPipe,
    PriceFilterPipe,
    LoadingSpinner,
    FriendItemComponent,
  ],
 
  providers: [
    MyGamesService,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot(AppRoutes)

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
