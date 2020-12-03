import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkorPage } from './skor.page';

describe('SkorPage', () => {
  let component: SkorPage;
  let fixture: ComponentFixture<SkorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
