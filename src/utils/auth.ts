import jwtEncode from 'jwt-encode';
import { jwtDecode } from 'jwt-decode';

const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

// Simple password hashing for demo purposes
export const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
  const hashedInput = await hashPassword(password);
  return hashedInput === hash;
};

export const generateToken = (userId: number): string => {
  return jwtEncode({ userId, exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) }, JWT_SECRET);
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < currentTime) {
      return null;
    }
    return decoded;
  } catch (error) {
    return null;
  }
};