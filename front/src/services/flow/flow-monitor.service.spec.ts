import { TestBed } from '@angular/core/testing';

import { FlowMonitorService } from './flow-monitor.service';

describe('FlowMonitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowMonitorService = TestBed.get(FlowMonitorService);
    expect(service).toBeTruthy();
  });
});
