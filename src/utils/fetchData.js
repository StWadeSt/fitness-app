export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c146c7f277msh34a0a75839c62b2p1cc400jsnee71630004e0',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) =>{
    const response = await fetch(url, exerciseOptions);
    const data = await response.json();

    return data;

}