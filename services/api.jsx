import axios from 'axios';
import {API_KEY, BASE_URL, HTTP_REFERER, X_TITLE} from '@env'

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
        'Http-Refere': HTTP_REFERER,
        'X-Title': X_TITLE
    }
})

export const openRouter = async (pesanUser) => {
    try {
        const res =await instance.post('/chat/completions', {
            model: 'meta-llama/llama-4-maverick:free',
            messages : [
                {
                    role: 'user',
                    content: pesanUser,
                },
            ],
        });
        return res.data.choices[0].message.content;
    } catch (err){
        console.error('OpenRouter Error:', err.response?.data|| err.message)
    }
}