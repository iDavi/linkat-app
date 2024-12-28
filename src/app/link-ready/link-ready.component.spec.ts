import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkReadyComponent } from './link-ready.component';

describe('LinkReadyComponent', () => {
  let component: LinkReadyComponent;
  let fixture: ComponentFixture<LinkReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkReadyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
