import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoclienteCadastroComponent } from './tipocliente-cadastro.component';

describe('TipoclienteCadastroComponent', () => {
  let component: TipoclienteCadastroComponent;
  let fixture: ComponentFixture<TipoclienteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoclienteCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoclienteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
