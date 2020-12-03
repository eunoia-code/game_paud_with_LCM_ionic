import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngkaPage } from './angka.page';

describe('AngkaPage', () => {
  let component: AngkaPage;
  let fixture: ComponentFixture<AngkaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngkaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
