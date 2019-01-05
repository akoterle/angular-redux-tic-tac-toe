import {applyMiddleware, createStore, Store} from 'redux';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {rootReducer} from './state/game/reducers';

import { IAppState} from './state/model';

export const store: Store<IAppState> = createStore(
  rootReducer,
  applyMiddleware(createLogger())
);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
