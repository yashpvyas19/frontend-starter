import type { Endpoints } from '@/types/axios.type';

const endpoints: Endpoints = {
  getAllUsers: {
    method: 'GET',
    url: '/users',
    showToast: { success: false, error: true },
  },
  login: {
    method: 'POST',
    url: '/login',
    showToast: { success: true, error: true },
  },
} as const;

export default endpoints;
