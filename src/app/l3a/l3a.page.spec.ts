import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L3aPage } from './l3a.page';

describe('L3aPage', () => {
  let component: L3aPage;
  let fixture: ComponentFixture<L3aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L3aPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L3aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
