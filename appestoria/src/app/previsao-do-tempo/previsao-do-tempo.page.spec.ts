import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevisaoDoTempoPage } from './previsao-do-tempo.page';

describe('PrevisaoDoTempoPage', () => {
  let component: PrevisaoDoTempoPage;
  let fixture: ComponentFixture<PrevisaoDoTempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisaoDoTempoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevisaoDoTempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
