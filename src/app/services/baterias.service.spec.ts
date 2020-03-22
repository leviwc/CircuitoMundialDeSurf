/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BateriasService } from './baterias.service';

describe('BateriasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BateriasService]
    });
  });

  it('should ...', inject([BateriasService], (service: BateriasService) => {
    expect(service).toBeTruthy();
  }));
});
