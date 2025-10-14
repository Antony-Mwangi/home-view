import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <div>
      <header style={styles.hero}>
        <h1>Find Your Dream Home</h1>
        <p>Explore the best houses, apartments, and villas available for sale or rent.</p>
      </header>

      <section style={styles.section}>
        <h2>🏡 Featured Properties</h2>
        <div style={styles.grid}>
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "3rem 1rem",
    backgroundColor: "#f8f9fa"
  },
  section: {
    padding: "2rem"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem"
  }
};
