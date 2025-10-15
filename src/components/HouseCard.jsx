export default function HouseCard({ house }){
    return (
        <div className="house-card">
            <img src={house.image} alt={house.title} className="house-image" />
            <h2 className="title">{house.title}</h2>
            <p className="location"><strong>Location:</strong> {house.location}</p>
            <p className="price"><strong>Price:</strong> ${house.price.toLocaleString()}</p>
            <p className="house-description">{house.description}</p>
        </div>
    );
}