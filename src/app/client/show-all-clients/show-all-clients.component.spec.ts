import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllClientsComponent } from './show-all-clients.component';

describe('ShowAllClientsComponent', () => {
  let component: ShowAllClientsComponent;
  let fixture: ComponentFixture<ShowAllClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
