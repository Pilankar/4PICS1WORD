import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cl1aPage } from './cl1a.page';

describe('Cl1aPage', () => {
  let component: Cl1aPage;
  let fixture: ComponentFixture<Cl1aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1aPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cl1aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
