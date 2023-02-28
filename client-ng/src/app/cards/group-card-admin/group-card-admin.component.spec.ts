import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardAdminComponent } from './group-card-admin.component';

describe('GroupCardAdminComponent', () => {
  let component: GroupCardAdminComponent;
  let fixture: ComponentFixture<GroupCardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCardAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
