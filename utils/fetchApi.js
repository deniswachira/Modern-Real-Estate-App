import axios from "axios";


 export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const{data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '2f44000aabmshbcd8c6e900af31cp168815jsne82eb629a92f'
          }
    })
    return data;
}
