/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BateriaComponent } from './bateria.component';

describe('BateriaComponent', () => {
  let component: BateriaComponent;
  let fixture: ComponentFixture<BateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
