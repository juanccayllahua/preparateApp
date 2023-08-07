import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparatePageComponent } from './preparate-page.component';

describe('PreparatePageComponent', () => {
  let component: PreparatePageComponent;
  let fixture: ComponentFixture<PreparatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
