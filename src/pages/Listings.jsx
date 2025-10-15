import {useState} from "react";
import houseData from "../data/houses";
import HouseCard from "../components/HouseCard";
import "./Listings.css";

export default function Listings(){
  const [searchLocation, setSearchLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredHouses = houseData.filter((house) => {
    const matchesLocation = house.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesMinPrice = minPrice === "" || house.price >= parseInt(minPrice);
    const matchesMaxPrice = maxPrice === "" || house.price <= parseInt(maxPrice);
    return matchesLocation && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="listings-page">
      <h1>🏘 House Listings</h1>
     
     <div className="filter-container">
      <input
      type="text"
      placeholder="Search by location"
      value = {searchLocation}
      onChange={(e) => setSearchLocation(e.target.value)}
      />

       <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
     </div>

    <div className="house-list">
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => <HouseCard key={house.id} house={house} />)
        ) : (
          <p>No houses found matching your criteria.</p>
        )}
      </div>


    </div>
  );

}