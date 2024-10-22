import { AxiosInstance } from 'axios';

interface GetByIdProps {
  id: number;
}

interface GetByUrlProps {
  url: string;
}

interface GetAllListProps {
  limit: number;
  offset: number;
}

const PoketmonAPI = (defaultAxios: AxiosInstance) => ({
  getById: ({ id }: GetByIdProps) =>
    defaultAxios
      .get(`/pokemon/${id}`)
      .then((res) => {
        return res;
      })
      .catch(function (err) {
        throw err;
      }),

  getByUrl: ({ url }: GetByUrlProps) =>
    defaultAxios
      .get(url)
      .then((res) => {
        return res;
      })
      .catch(function (err) {
        throw err;
      }),

  getImageByUrl: ({ url }: GetByUrlProps) =>
    defaultAxios
      .get(url)
      .then((res) => {
        return res;
      })
      .catch(function (err) {
        throw err;
      }),

  getAllList: ({ limit, offset }: GetAllListProps) =>
    defaultAxios
      .get(`/pokemon?limit=${limit}&offset=${offset}.`)
      .then((res) => {
        return res;
      })
      .catch(function (err) {
        throw err;
      }),

  speices: () =>
    defaultAxios
      .get('/pokemon-species' + '/aegislash')
      .then((res) => {
        return res;
      })
      .catch(function (err) {
        throw err;
      }),
});

export default PoketmonAPI;
