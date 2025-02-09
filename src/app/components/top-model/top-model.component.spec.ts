import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopModelComponent } from './top-model.component';

describe('TopModelComponent', () => {
  let component: TopModelComponent;
  let fixture: ComponentFixture<TopModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
