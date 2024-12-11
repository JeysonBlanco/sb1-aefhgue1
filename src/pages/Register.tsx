import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { BlogLayout } from '../components/BlogLayout';

export function RegisterPage() {
  return (
    <BlogLayout>
      <div className="max-w-md mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Registro</h2>
        <RegisterForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="font-medium text-[#002DA4] hover:text-[#001E5D]">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </BlogLayout>
  );
}