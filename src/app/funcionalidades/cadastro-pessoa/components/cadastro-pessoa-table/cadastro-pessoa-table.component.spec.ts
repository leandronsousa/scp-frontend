import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaTableComponent } from './cadastro-pessoa-table.component';

describe('CadastroPessoaTableComponent', () => {
  let component: CadastroPessoaTableComponent;
  let fixture: ComponentFixture<CadastroPessoaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPessoaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
