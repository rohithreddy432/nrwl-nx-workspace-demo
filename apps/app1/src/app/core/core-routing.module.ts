import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Feature1Component } from '../feature1/feature1.component';
import { Feature1Module } from '../feature1/feature1.module';
import { Feature2Component } from '../feature2/feature2.component';
import { Feature2Module } from '../feature2/feature2.module';
import * as fromServices from '../services';
import { CoreComponent } from './core.component';

import { COREROUTEBASE } from './core-routing.constants';

const routes: Routes = [
  // { path: 'f3', component: Feature3Component }, // having this here will make /f3 work
  {
    path: COREROUTEBASE,
    component: CoreComponent,
    resolve: {
      userSession: fromServices.SessionResolver
    },
    children: [
      { path: '', redirectTo: 'f1', pathMatch: 'full' },
      { path: 'f1', component: Feature1Component },
      { path: 'f2', component: Feature2Component },
      { path: 'lazy', loadChildren: '../lazy/lazy.module#LazyModule' },
      { path: 'apollo', loadChildren: '@nrwl-nx-workspace-demo/app-apollo/src/lib/app-apollo.module#AppApolloModule' },
      { path: 'game', loadChildren: '@nrwl-nx-workspace-demo/apollo-game/src/lib/apollo-game.module#ApolloGameModule' },
      {
        path: 'learn-graphql',
        loadChildren: '@nrwl-nx-workspace-demo/learn-graphql/src/lib/learn-graphql.module#LearnGraphqlModule'
      },
      {
        path: 'learn-swiper',
        loadChildren: '@nrwl-nx-workspace-demo/learn-swiper/src/lib/learn-swiper.module#LearnSwiperModule'
      },
      {
        path: 'report',
        loadChildren: '../report/report.module#ReportModule'
      },
      {
        path: 'elements-sandbox',
        loadChildren: '@nrwl-nx-workspace-demo/elements-sandbox/src/lib/elements-sandbox.module#ElementsSandboxModule'
      },
      { path: 'not-found', loadChildren: '@nrwl-nx-workspace-demo/not-found/src/lib/not-found.module#NotFoundModule' },
      {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), Feature1Module, Feature2Module],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
