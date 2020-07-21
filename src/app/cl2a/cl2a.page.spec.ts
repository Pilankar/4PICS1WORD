import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cl2aPage } from './cl2a.page';

describe('Cl2aPage', () => {
  let component: Cl2aPage;
  let fixture: ComponentFixture<Cl2aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl2aPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cl2aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
