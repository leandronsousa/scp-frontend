import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCadastroPessoaFormComponent } from './container-cadastro-pessoa-form.component';

describe('ContainerCadastroPessoaFormComponent', () => {
  let component: ContainerCadastroPessoaFormComponent;
  let fixture: ComponentFixture<ContainerCadastroPessoaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCadastroPessoaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCadastroPessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
