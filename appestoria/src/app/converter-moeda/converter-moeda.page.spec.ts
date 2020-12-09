import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConverterMoedaPage } from './converter-moeda.page';

describe('ConverterMoedaPage', () => {
  let component: ConverterMoedaPage;
  let fixture: ComponentFixture<ConverterMoedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverterMoedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConverterMoedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
