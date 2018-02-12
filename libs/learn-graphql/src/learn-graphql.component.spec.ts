import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnGraphqlComponent } from './learn-graphql.component';

describe('LearnGraphqlComponent', () => {
  let component: LearnGraphqlComponent;
  let fixture: ComponentFixture<LearnGraphqlComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LearnGraphqlComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnGraphqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
