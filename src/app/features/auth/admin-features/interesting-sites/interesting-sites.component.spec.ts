import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingSitesComponent } from './interesting-sites.component';

describe('InterestingSitesComponent', () => {
  let component: InterestingSitesComponent;
  let fixture: ComponentFixture<InterestingSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestingSitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestingSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
