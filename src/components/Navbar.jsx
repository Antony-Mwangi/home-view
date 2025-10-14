export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>🏠 HomeView</h1>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>Listings</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0d6efd",
    color: "white",
    padding: "1rem 2rem"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  menu: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    cursor: "pointer"
  }
};
