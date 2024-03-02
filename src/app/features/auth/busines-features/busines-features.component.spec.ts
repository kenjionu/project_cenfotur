import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesFeaturesComponent } from './busines-features.component';

describe('BusinesFeaturesComponent', () => {
  let component: BusinesFeaturesComponent;
  let fixture: ComponentFixture<BusinesFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinesFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
