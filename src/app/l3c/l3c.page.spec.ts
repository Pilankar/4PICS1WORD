import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L3cPage } from './l3c.page';

describe('L3cPage', () => {
  let component: L3cPage;
  let fixture: ComponentFixture<L3cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L3cPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L3cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
