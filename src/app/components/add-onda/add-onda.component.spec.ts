/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddOndaComponent } from './add-onda.component';

describe('AddOndaComponent', () => {
  let component: AddOndaComponent;
  let fixture: ComponentFixture<AddOndaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOndaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
