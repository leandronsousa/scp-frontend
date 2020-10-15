import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCadastroPessoaListComponent } from './container-cadastro-pessoa-list.component';

describe('ContainerCadastroPessoaListComponent', () => {
  let component: ContainerCadastroPessoaListComponent;
  let fixture: ComponentFixture<ContainerCadastroPessoaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCadastroPessoaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCadastroPessoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
