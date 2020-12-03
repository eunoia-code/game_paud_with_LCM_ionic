import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GambarPage } from './gambar.page';

describe('GambarPage', () => {
  let component: GambarPage;
  let fixture: ComponentFixture<GambarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GambarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GambarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
