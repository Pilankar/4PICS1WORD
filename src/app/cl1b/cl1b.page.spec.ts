import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cl1bPage } from './cl1b.page';

describe('Cl1bPage', () => {
  let component: Cl1bPage;
  let fixture: ComponentFixture<Cl1bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl1bPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cl1bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
