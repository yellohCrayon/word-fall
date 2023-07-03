import axios from 'axios';
const API_KEY = process.env.APP_API_KEY

export const getRandomWord = async () => {
    try {
        // const response = await axios.get('https://wordsapiv1.p.rapidapi.com/words/', {
        //     params: { random: 'true' },
        //     headers: {
        //         'X-RapidAPI-Key': API_KEY,
        //         'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        //     }
        // })
        return {word: 'test', results:[{definition:'mock definition, mock definition, mock definition'}] }
    } catch (error) {
        console.error(error);
    }
}

export const getWordDefinition = async (word) => {
    try {
        // const response = await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${word}`,
        //     {
        //         headers: {
        //             'X-RapidAPI-Key': API_KEY,
        //             'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        //         }
        //     }
        // );
        return 'hello'
    } catch (error) {
        console.error(error);
    }
}
