import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Completelevel3Page } from './completelevel3.page';

describe('Completelevel3Page', () => {
  let component: Completelevel3Page;
  let fixture: ComponentFixture<Completelevel3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Completelevel3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Completelevel3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
