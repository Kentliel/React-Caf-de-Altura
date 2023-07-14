import React, {useState, useEffect} from 'react'

const MapDeCafes = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        FetchCoffee()
            .then((data) => setCoffees(data))
            .catch((error) => console.log(error));
            console.log(coffees);
        }, []);
  return (
    <div>
        MapDeCafes
        
        {coffees.map((coffee, index) => (
                <Home key={coffee.id} name={coffee.name} price={coffee.price} img={coffee.image} number={index} />

            ))}
    </div>
  )
}

export default MapDeCafes