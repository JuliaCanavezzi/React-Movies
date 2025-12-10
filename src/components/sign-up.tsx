import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FormButton, FormInfo, FormInput } from '@/components/form';
import { authService } from '@/services/auth';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert('Senhas não coincidem!');
      return;
    }

    try {
      const response = await authService.signUp(name, email, password, 'user');
      localStorage.setItem('token', response.value.token);
      navigate('/');
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro ao criar conta');
    }
  };

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

      <form onSubmit={handleSubmit}>
        <button 
          type="submit"
          className="flex min-h-10 w-full items-center justify-center rounded-md bg-green-400 font-bold text-sm text-white transition-all duration-300 hover:bg-green-500 dark:text-black"
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}
