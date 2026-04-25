
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export async function fetchApi(query,page=1,per_page=20){
   const url = new URL('https://api.unsplash.com/search/photos');
url.searchParams.append('query', query);
url.searchParams.append('page', page);
url.searchParams.append('per_page', per_page);

const res = await fetch(url, {
  method: 'GET',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_KEY}`
  }
});

const data = await res.json();
return data
} 

export async function fetchvideos(query,per_page=15){
   const url = new URL('https://api.pexels.com/v1/videos/search');
url.searchParams.append('query', query);
url.searchParams.append('per_page', per_page);

const res = await fetch(url, {
  method: 'GET',
  headers: {
    Authorization:PEXELS_KEY
  }
});

const data = await res.json();
return data
} 