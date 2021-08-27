import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClasesComponent } from './register-clases.component';

describe('RegisterClasesComponent', () => {
  let component: RegisterClasesComponent;
  let fixture: ComponentFixture<RegisterClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
