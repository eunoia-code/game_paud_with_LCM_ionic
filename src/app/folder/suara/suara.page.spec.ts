import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuaraPage } from './suara.page';

describe('SuaraPage', () => {
  let component: SuaraPage;
  let fixture: ComponentFixture<SuaraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
