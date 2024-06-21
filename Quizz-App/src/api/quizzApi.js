import axios from 'axios';

const API_URL = 'http://localhost:3000/api/quizzes';

export async function getQuizzes(category) {
  try {
    const response = await axios.get(`${API_URL}/category/${category}`);
    console.log('Quizzes obtenidos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener quizzes', error);
    throw error;
  }
}