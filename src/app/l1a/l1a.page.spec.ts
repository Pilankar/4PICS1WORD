import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L1aPage } from './l1a.page';

describe('L1aPage', () => {
  let component: L1aPage;
  let fixture: ComponentFixture<L1aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1aPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L1aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
