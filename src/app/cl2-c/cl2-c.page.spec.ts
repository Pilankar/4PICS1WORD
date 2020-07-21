import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cl2CPage } from './cl2-c.page';

describe('Cl2CPage', () => {
  let component: Cl2CPage;
  let fixture: ComponentFixture<Cl2CPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl2CPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cl2CPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
