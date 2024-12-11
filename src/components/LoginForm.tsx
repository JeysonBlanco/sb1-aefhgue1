import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getUserByEmail } from '../db/database';
import { comparePasswords, generateToken } from '../utils/auth';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await getUserByEmail(email);
      if (!user) {
        toast.error('Usuario no encontrado');
        return;
      }

      const isValid = await comparePasswords(password, user.password);
      if (!isValid) {
        toast.error('Contraseña incorrecta');
        return;
      }

      const token = generateToken(user.id);
      localStorage.setItem('token', token);
      toast.success('Inicio de sesión exitoso');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Error al iniciar sesión');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#001E5D] hover:bg-[#002DA4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}