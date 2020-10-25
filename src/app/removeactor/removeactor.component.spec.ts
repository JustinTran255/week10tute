import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveactorComponent } from './removeactor.component';

describe('RemoveactorComponent', () => {
  let component: RemoveactorComponent;
  let fixture: ComponentFixture<RemoveactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
