import { TestBed } from '@angular/core/testing';

import { EstudentService } from './estudent.service';

describe('EstudentService', () => {
  let service: EstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
