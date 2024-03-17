import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a nice idea? <br className="sm:block hidden" />
        Feel free to reach out to me{" "}
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default ContactMe;
