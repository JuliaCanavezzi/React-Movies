import { FormButton, FormInfo, FormInput } from '@/components/form';

export function SignUp() {
  return (
    <div className="flex flex-col gap-5">
      <FormInfo
        title="Criar Conta"
        info="Preencha os dados para criar sua conta"
      />

      <FormInput type="text" placeholder="seu nome" id="name">
        Nome
      </FormInput>

      <FormInput type="email" placeholder="seu@email.com" id="email">
        E-mail
      </FormInput>

      <FormInput type="password" placeholder="••••••••" id="password">
        Senha
      </FormInput>

      <FormInput type="password" placeholder="••••••••" id="passwordConfirm">
        Confirmar Senha
      </FormInput>

      <FormButton>Criar Conta</FormButton>
    </div>
  );
}
