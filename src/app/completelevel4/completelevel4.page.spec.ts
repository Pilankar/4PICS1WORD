import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Completelevel4Page } from './completelevel4.page';

describe('Completelevel4Page', () => {
  let component: Completelevel4Page;
  let fixture: ComponentFixture<Completelevel4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Completelevel4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Completelevel4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
