import { TestBed } from '@angular/core/testing';

import { ImportscriptsService } from './importscripts.service';

describe('ImportscriptsService', () => {
  let service: ImportscriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportscriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
