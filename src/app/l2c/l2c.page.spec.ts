import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L2cPage } from './l2c.page';

describe('L2cPage', () => {
  let component: L2cPage;
  let fixture: ComponentFixture<L2cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2cPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L2cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
