// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Fullnames } from '..';
import axios from "axios";
import { useParams } from 'react-router-dom';

interface FullnamesHandler{
  fullnames: Fullnames[]
  pagination: PaginationType
}
export type PaginationType = {
	totalPages   :number
	currentPage  :number
	nextPage     :number
	previousPage :number
}

export const GetFullnamesHandler = async (page: string | string[] | undefined):Promise<FullnamesHandler> => {
  const param = page || 1
  try {
  const res = await axios.get(`http://localhost/fullnames/`+param);
  return res.data
} catch (err) {
  return { fullnames: [], pagination: {totalPages: 0, currentPage: 0, nextPage: 0, previousPage: 0} };
}
};
