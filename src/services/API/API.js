import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const getAllCharters = async (page = 1) => {
  try {
    const { data } = await axios(`/character?count=8&page=${page}`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacterByName = async (name, page = 1) => {
  try {
    const { data } = await axios(`/character?page=${page}&name=${name}`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacterInfo = async id => {
  try {
    const { data } = await axios(`/character/${id}`);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};