import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevisaodoTempoPage } from './previsaodo-tempo.page';

describe('PrevisaodoTempoPage', () => {
  let component: PrevisaodoTempoPage;
  let fixture: ComponentFixture<PrevisaodoTempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisaodoTempoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevisaodoTempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
