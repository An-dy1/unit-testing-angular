import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Wumpkis', strength: 3 },
      { id: 2, name: 'Ballylog', strength: 35 },
      { id: 3, name: 'Raptar', strength: 99 },
    ];

    // initialize a jasmine spy, pass in an array of methods
    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);

    // component has a service dependency; don't want to call a real service in a unit test, so we need a mock
    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('removes passed in hero from the heroes list', () => {
      // the delete method in the component subscribes to an observable, so that's what we need our Spy to return
      mockHeroService.deleteHero.and.returnValue(of(true));

      // populate the heroes property with our sample data
      component.heroes = HEROES;

      component.delete(HEROES[2]);
      expect(component.heroes.length).toBe(2);
    });
  });
});
