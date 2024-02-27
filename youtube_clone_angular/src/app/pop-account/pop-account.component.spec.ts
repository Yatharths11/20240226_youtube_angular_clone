import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopAccountComponent } from './pop-account.component';

describe('PopAccountComponent', () => {
  let component: PopAccountComponent;
  let fixture: ComponentFixture<PopAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
