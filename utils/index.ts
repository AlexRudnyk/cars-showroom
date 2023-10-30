export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "d456da968bmsh6fd4550ad88b050p1acbb2jsn50e3fcf67b6e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
