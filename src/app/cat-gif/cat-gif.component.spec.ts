import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGifComponent } from './cat-gif.component';

describe('CatGifComponent', () => {
  let component: CatGifComponent;
  let fixture: ComponentFixture<CatGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatGifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
