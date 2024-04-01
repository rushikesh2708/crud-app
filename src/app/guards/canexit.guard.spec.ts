import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canexitGuard } from './canexit.guard';

describe('canexitGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canexitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
