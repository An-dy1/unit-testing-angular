import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from '../hero/hero.component';

describe('HeroComponent shallow test', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    // testbed lets us test a component and its template together
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroComponent);

    it('should have correct hero', () => {
      fixture.componentInstance.hero = { id: 1, name: 'Flimbus', strength: 13 };
      expect(fixture.componentInstance.hero.name).toEqual('Flimbus');
      expect(fixture.componentInstance.hero.strength).toEqual(13);
    });
  });
});
