import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '@/components';
import { FormButton, FormInfo, FormInput } from '@/components/form';
import { authService } from '@/services/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState({ isOpen: false, message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await authService.signIn(email, password, 'user');
      localStorage.setItem('token', response.value.token);
      navigate('/home');
    } catch (error) {
      console.error('Erro no login:', error);
      setModal({ isOpen: true, message: 'Email ou senha inválidos' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

      <FormButton onClick={() => {}}>Entrar</FormButton>

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title="Aviso"
      >
        {modal.message}
      </Modal>
    </form>
  );
}
