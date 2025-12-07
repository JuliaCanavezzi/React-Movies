import { useState } from 'react';
import { FormButton, FormInfo, FormInput } from '@/components/form';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <div className="flex flex-col gap-5">
      <FormInfo
        title="Criar Conta"
        info="Preencha os dados para criar sua conta"
      />

      <FormInput
        type="text"
        placeholder="seu nome"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        Nome
      </FormInput>

      <FormInput
        type="email"
        placeholder="seu@email.com"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
        E-mail
      </FormInput>

      <FormInput
        type="password"
        placeholder="••••••••"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      >
        Senha
      </FormInput>

      <FormInput
        type="password"
        placeholder="••••••••"
        id="passwordConfirm"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      >
        Confirmar Senha
      </FormInput>

      <FormButton to="/">Criar Conta</FormButton>
    </div>
  );
}
