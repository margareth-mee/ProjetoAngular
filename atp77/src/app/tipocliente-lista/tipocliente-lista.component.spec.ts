import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoclienteListaComponent } from './tipocliente-lista.component';

describe('TipoclienteListaComponent', () => {
  let component: TipoclienteListaComponent;
  let fixture: ComponentFixture<TipoclienteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoclienteListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoclienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
