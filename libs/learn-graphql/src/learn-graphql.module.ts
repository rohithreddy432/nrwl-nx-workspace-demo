/*
https://www.howtographql.com/angular-apollo/1-getting-started/
Simple API:        https://api.graph.cool/simple/v1/cjdjgmi0u2cye0129kgw4a1ug
Relay API:         https://api.graph.cool/relay/v1/cjdjgmi0u2cye0129kgw4a1ug
Subscriptions API: wss://subscriptions.graph.cool/v1/cjdjgmi0u2cye0129kgw4a1ug



*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LearnGraphqlComponent } from './learn-graphql.component';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { CreateLinkComponent } from './components/create-link/create-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: LearnGraphqlComponent }]),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule
  ],
  declarations: [LearnGraphqlComponent, LinkItemComponent, LinkListComponent, CreateLinkComponent]
})
export class LearnGraphqlModule {
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    const uri = 'https://api.graph.cool/simple/v1/cjdjgmi0u2cye0129kgw4a1ug';
    const http = httpLink.create({ uri });
    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
