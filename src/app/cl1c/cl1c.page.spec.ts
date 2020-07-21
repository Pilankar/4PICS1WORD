import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cl1cPage } from './cl1c.page';

describe('Cl1cPage', () => {
  let component: Cl1cPage;
  let fixture: ComponentFixture<Cl1cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1cPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cl1cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
