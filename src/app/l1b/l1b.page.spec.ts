import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L1bPage } from './l1b.page';

describe('L1bPage', () => {
  let component: L1bPage;
  let fixture: ComponentFixture<L1bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1bPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L1bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
