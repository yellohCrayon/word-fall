import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const config = {
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }
};

export const getRandomWord = async () => {
  try {
    const { data } = await axios.get('https://wordsapiv1.p.rapidapi.com/words/', {
      params: { random: 'true' },
      ...config
    })
    return data
  } catch (error) {
    console.error(error);
  }
};

export const getWordDefinition = async (word) => {
  try {
    const { data } = await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${word}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
