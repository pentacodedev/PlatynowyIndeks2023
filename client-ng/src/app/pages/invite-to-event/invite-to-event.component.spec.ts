import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToEventComponent } from './invite-to-event.component';

describe('InviteToEventComponent', () => {
  let component: InviteToEventComponent;
  let fixture: ComponentFixture<InviteToEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteToEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
