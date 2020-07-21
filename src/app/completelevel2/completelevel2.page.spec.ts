import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Completelevel2Page } from './completelevel2.page';

describe('Completelevel2Page', () => {
  let component: Completelevel2Page;
  let fixture: ComponentFixture<Completelevel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Completelevel2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Completelevel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
