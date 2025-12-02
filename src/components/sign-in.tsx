import { FormButton, FormInfo, FormInput } from '@/components/form';

export function SignIn() {
  return (
    <div className="flex flex-col gap-5">
      <FormInfo info="Entre com suas credenciais" title="Login" />

      <FormInput type="email" placeholder="seu@email.com" id="email">
        E-mail
      </FormInput>

      <FormInput type="password" placeholder="••••••••" id="password">
        Senha
      </FormInput>

      <FormButton>Entrar</FormButton>
    </div>
  );
}
