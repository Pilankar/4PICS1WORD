import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L2aPage } from './l2a.page';

describe('L2aPage', () => {
  let component: L2aPage;
  let fixture: ComponentFixture<L2aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2aPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L2aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
