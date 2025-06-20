const SamplePage2 = () => {
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      color: "#333",
    },
    section: {
      padding: "60px 20px",
      textAlign: "center" as const,
    },
    evenSection: {
      background: "#fafafa",
    },
    header: {
      background: "#f0f0f0",
      padding: "60px 20px",
      textAlign: "center" as const,
    },
    btn: {
      background: "#000",
      color: "#fff",
      padding: "10px 20px",
      textDecoration: "none",
      borderRadius: "5px",
      display: "inlineBlock",
      marginTop: "20px",
    },
    footer: {
      padding: "60px 20px",
      textAlign: "center" as const,
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>Your Business Name</h1>
        <p>Minimal, clean and professional landing page.</p>
        <a href="#contact" style={styles.btn}>
          Get in Touch
        </a>
      </header>

      <section id="about" style={styles.section}>
        <h2>About Us</h2>
        <p>We help businesses grow with modern solutions.</p>
      </section>

      <section
        id="services"
        style={{ ...styles.section, ...styles.evenSection }}
      >
        <h2>Our Services</h2>
        <p>Web Design, SEO, Marketing & more.</p>
      </section>

      <section id="contact" style={styles.section}>
        <h2>Contact Us</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +91-1234567890</p>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 Your Business Name</p>
      </footer>
    </div>
  );
};

export default SamplePage2;
