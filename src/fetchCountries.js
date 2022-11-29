function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error()
    }
    return resp.json();
  });
}

export { fetchCountries };
