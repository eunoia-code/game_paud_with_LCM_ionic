import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarnaPage } from './warna.page';

describe('WarnaPage', () => {
  let component: WarnaPage;
  let fixture: ComponentFixture<WarnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
