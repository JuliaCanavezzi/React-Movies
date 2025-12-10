import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FormButton, FormInfo, FormInput } from '@/components/form';
import { authService } from '@/services/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await authService.signIn(email, password, 'user');
      localStorage.setItem('token', response.value.token);
      navigate('/');
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Email ou senha inválidos');
    }
  };

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

      <form onSubmit={handleSubmit}>
        <button 
          type="submit"
          className="flex min-h-10 w-full items-center justify-center rounded-md bg-green-400 font-bold text-sm text-white transition-all duration-300 hover:bg-green-500 dark:text-black"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
