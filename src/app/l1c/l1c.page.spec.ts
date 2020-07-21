import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L1cPage } from './l1c.page';

describe('L1cPage', () => {
  let component: L1cPage;
  let fixture: ComponentFixture<L1cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1cPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L1cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
