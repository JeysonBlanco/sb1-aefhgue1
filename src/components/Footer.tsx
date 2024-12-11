import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { colors } from '../theme/colors';

export function Footer() {
  const iconStyle = { color: colors.secondary.main };
  
  return (
    <footer className="bg-[#001E5D] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Logo centered at the top */}
        <div className="flex justify-center mb-12">
          <img
            src="/images/Segucargo®-logo-secundaria-negativo (2).png"
            alt="Segucargo Logo"
            className="h-12 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Social Media */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" style={iconStyle} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" style={iconStyle} />
              </a>
              <a href="https://www.linkedin.com/company/91578878/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" style={iconStyle} /> 
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" style={iconStyle} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#2AD4AE] transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2AD4AE] transition-colors">Cotizaciones</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2AD4AE] transition-colors">Rastreo de Carga</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2AD4AE] transition-colors">Blog Logístico</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#2AD4AE] transition-colors">Guías de Envío</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2AD4AE] transition-colors">Términos INCOTERMS</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2AD4AE] transition-colors">Documentación</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2AD4AE] transition-colors">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" style={iconStyle} />
                <span className="text-gray-300">Av Providencia 1208. Oficina 1603. Providencia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={iconStyle} />
                <a href="tel:+56224381919" className="text-gray-300 hover:text-[#2AD4AE] transition-colors">
                  +56 2 2438 1919
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={iconStyle} />
                <a href="mailto:ventas@segucargo.cl" className="text-gray-300 hover:text-[#2AD4AE] transition-colors">
                  ventas@segucargo.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Segucargo. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#2AD4AE] transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-[#2AD4AE] transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}