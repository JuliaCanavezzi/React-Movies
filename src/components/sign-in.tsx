import { useState } from 'react';
import { FormButton, FormInfo, FormInput } from '@/components/form';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-5">
      <FormInfo info="Entre com suas credenciais" title="Login" />

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

      <FormButton to="/">Entrar</FormButton>
    </div>
  );
}
