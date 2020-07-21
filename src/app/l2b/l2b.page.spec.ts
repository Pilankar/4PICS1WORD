import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L2bPage } from './l2b.page';

describe('L2bPage', () => {
  let component: L2bPage;
  let fixture: ComponentFixture<L2bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2bPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L2bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
