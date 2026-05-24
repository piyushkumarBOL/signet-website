import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySignetComponent } from './why-signet.component';

describe('WhySignetComponent', () => {
  let component: WhySignetComponent;
  let fixture: ComponentFixture<WhySignetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhySignetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhySignetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
