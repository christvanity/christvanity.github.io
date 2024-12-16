import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoadingDataGridComponent } from './skeleton-loading-data-grid.component';

describe('SkeletonLoadingDataGridComponent', () => {
  let component: SkeletonLoadingDataGridComponent;
  let fixture: ComponentFixture<SkeletonLoadingDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonLoadingDataGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonLoadingDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
