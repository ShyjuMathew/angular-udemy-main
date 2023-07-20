import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageListComponent } from './my-page-list.component';

describe('MyPageListComponent', () => {
  let component: MyPageListComponent;
  let fixture: ComponentFixture<MyPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
