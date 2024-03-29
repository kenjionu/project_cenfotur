import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPanelComponent } from './select-panel.component';

describe('SelectPanelComponent', () => {
  let component: SelectPanelComponent;
  let fixture: ComponentFixture<SelectPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
