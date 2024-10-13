export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': '9cc26c8070mshdd456a82fd90856p111570jsn5d02599839a4',
    },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};


export const fetchData = async(url,Options) => {
    const response = await fetch(url,Options);
    const data = await response.json();


return data;
};