export default function PropertyCard({ property }) {
  return (
    <div style={styles.card}>
      <img src={property.image} alt={property.name} style={styles.image} />
      <h3>{property.name}</h3>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> Ksh {property.price.toLocaleString()}</p>
      <p><strong>Type:</strong> {property.type}</p>
      <button style={styles.button}>View Details</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "white"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  button: {
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "0.5rem"
  }
};
