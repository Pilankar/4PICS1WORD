import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L3bPage } from './l3b.page';

describe('L3bPage', () => {
  let component: L3bPage;
  let fixture: ComponentFixture<L3bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L3bPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L3bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
