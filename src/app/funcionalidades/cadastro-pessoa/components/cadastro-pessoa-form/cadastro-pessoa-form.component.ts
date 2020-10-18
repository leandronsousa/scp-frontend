import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.scss']
})
export class CadastroPessoaFormComponent implements OnInit {

  private _pessoa: Pessoa;

  @Output() incluirPessoa: EventEmitter<Pessoa> = new EventEmitter();

  @Output() alterarPessoa: EventEmitter<Pessoa> = new EventEmitter();

  @Input() get pessoa(): Pessoa {
    return this._pessoa;
  }

  set pessoa(p: Pessoa) {
    this._pessoa = p;
    if (p && p.id) {
      this.carregarEdicao(p);
    }
  }

  pessoaForm = this.formBuilder.group({
    id: this.formBuilder.control(
      {value: null, disabled: false}
    ),
    nome: this.formBuilder.control(
      {value: '', disabled: false},
      {
        validators: Validators.compose([Validators.required, Validators.minLength(2)])
      }
    ),
    cpf: this.formBuilder.control(
      {value: '', disabled: false},
      {
        validators: Validators.compose([Validators.required])
      }
    ),
    sexo: this.formBuilder.control(
      {value: '', disabled: false}
    ),
    dataNascimento: this.formBuilder.control(
      {value: '', disabled: false},
      Validators.compose([Validators.required])
    ),
    email: this.formBuilder.control(
      {value: '', disabled: false},
      {
        validators: Validators.compose([Validators.email])
      }
    ),
    naturalidade: this.formBuilder.control(
      {value: '', disabled: false}
    ),
    nacionalidade: this.formBuilder.control(
      {value: '', disabled: false}
    )
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  carregarEdicao(pessoa: Pessoa): void {
    this.id.patchValue(pessoa.id);
    this.nome.patchValue(pessoa.nome);
    this.email.patchValue(pessoa.email);
    this.sexo.patchValue(pessoa.sexo);
    this.cpf.patchValue(pessoa.cpf);
    this.naturalidade.patchValue(pessoa.naturalidade);
    this.nacionalidade.patchValue(pessoa.nacionalidade);
    this.dataNascimento.patchValue(pessoa.dataNascimento);
  }

  salvar(): void {
    if (this.pessoa && this.pessoa.id) {
      this.alterarPessoa.emit(this.pessoaForm.value);
    } else {
      this.incluirPessoa.emit(this.pessoaForm.value);
    }
  }

  get id(): FormControl {
    return this.pessoaForm.get('id') as FormControl;
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get cpf(): FormControl {
    return this.pessoaForm.get('cpf') as FormControl;
  }

  get sexo(): FormControl {
    return this.pessoaForm.get('sexo') as FormControl;
  }

  get dataNascimento(): FormControl {
    return this.pessoaForm.get('dataNascimento') as FormControl;
  }

  get naturalidade(): FormControl {
    return this.pessoaForm.get('naturalidade') as FormControl;
  }

  get nacionalidade(): FormControl {
    return this.pessoaForm.get('nacionalidade') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

}
