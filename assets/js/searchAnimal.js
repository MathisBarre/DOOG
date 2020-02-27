const url = new URL(window.location.href)
const searchedRace = url.searchParams.get("race");
const searchedType = url.searchParams.get("type");

var data
fetch("/_data/animals.json")
  .then((response) =>  {
    return response.json()
  })
  .then((response) => {
    return response.filter((animal) => {
      return (animal.type === searchedType && animal.race === searchedRace)
    })
  })
  .then((data) => console.log(data))