import api from '../src/API/axios'
const API_KEY = 'd198a3e7459e43559300e2b8789de7d6';


const basicFetch = async (endpoint) => {
    const response = await api.get(`${endpoint}`, { params: { api_key: API_KEY, language: 'pt-br' } });
    return response.data;
};

const getHomeList = async () => {
    return [
        {
            slug: 'trending',
            title: 'Recomendados',
            items: await basicFetch(`/trending/all/week`)
        },
        {
            slug: 'toprated',
            title: 'Em alta',
            items: await basicFetch(`/movie/top_rated`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99`)
        },
    ];
};

export default getHomeList;
