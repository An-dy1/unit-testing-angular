import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
  });

  it('should have correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'Flimbus', strength: 13 };
    expect(fixture.componentInstance.hero.name).toEqual('Flimbus');
    expect(fixture.componentInstance.hero.strength).toEqual(13);
  });

  it('should render hero name in an anchor tag', () => {
    fixture.componentInstance.hero = { id: 1, name: 'Flimbus', strength: 13 };

    // tells the component to update bindings that may exist on the component
    fixture.detectChanges();

    // native element exposes browser's DOM api
    // expect(fixture.nativeElement.querySelector('a').textContent).toContain(
    //   'Flimbus'
    // );

    // same test as above, but using the debug element; exposes some additional properties
    let debugElement = fixture.debugElement.query(By.css('a'));
    expect(debugElement.nativeElement.textContent).toContain('Flimbus');
  });
});
