/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OndaComponent } from './onda.component';

describe('OndaComponent', () => {
  let component: OndaComponent;
  let fixture: ComponentFixture<OndaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
