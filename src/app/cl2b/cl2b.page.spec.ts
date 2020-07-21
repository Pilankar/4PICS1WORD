import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cl2bPage } from './cl2b.page';

describe('Cl2bPage', () => {
  let component: Cl2bPage;
  let fixture: ComponentFixture<Cl2bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl2bPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cl2bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
