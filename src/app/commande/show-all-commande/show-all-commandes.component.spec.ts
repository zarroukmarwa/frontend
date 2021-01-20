import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCommandesComponent } from './show-all-commandes.component';

describe('ShowAllCommandesComponent', () => {
  let component: ShowAllCommandesComponent;
  let fixture: ComponentFixture<ShowAllCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
