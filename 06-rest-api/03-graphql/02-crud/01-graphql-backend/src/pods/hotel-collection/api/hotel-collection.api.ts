import Axios from 'axios';
import { HotelEntityApi } from './hotel-collection.api-model';

const url = '/api/hotels';

export const getHotelCollection = async (): Promise<HotelEntityApi[]> => {
  const { data } = await Axios.get<HotelEntityApi[]>(url);
  return data;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
