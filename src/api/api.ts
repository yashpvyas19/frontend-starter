import axios from '@/api/axios.ts';
import endpoints from '@/api/endpoints.ts';
import type { AxiosOutput as Axios, AxiosDocsOutput as AxiosDocs } from '@/types/axios.type';

export const login: Axios = async data => axios({ ...endpoints.login, ...data });

export const getAllUsers: AxiosDocs = async data => axios({ ...endpoints.getAllUsers, ...data });
