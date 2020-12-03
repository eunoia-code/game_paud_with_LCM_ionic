import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HurufPage } from './huruf.page';

describe('HurufPage', () => {
  let component: HurufPage;
  let fixture: ComponentFixture<HurufPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HurufPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HurufPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
