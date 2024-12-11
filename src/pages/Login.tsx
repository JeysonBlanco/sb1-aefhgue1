import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { BlogLayout } from '../components/BlogLayout';

export function LoginPage() {
  return (
    <BlogLayout>
      <div className="max-w-md mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Iniciar Sesión</h2>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="font-medium text-[#002DA4] hover:text-[#001E5D]">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </BlogLayout>
  );
}