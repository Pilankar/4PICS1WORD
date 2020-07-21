import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Completelevel1Page } from './completelevel1.page';

describe('Completelevel1Page', () => {
  let component: Completelevel1Page;
  let fixture: ComponentFixture<Completelevel1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Completelevel1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Completelevel1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
