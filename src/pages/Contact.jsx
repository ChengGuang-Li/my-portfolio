import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Pikachu from "../models/Pikachu";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Dance");

  const { alert, showAlert, hideAlert } = useAlert();

  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("Jump");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vincent",
          from_email: form.email,
          to_email: "vincentportfolio333@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        //show alert
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });
        setTimeout(() => {
          setCurrentAnimation("Dance");
          setForm({ name: "", email: "", message: "" }); // Clear the form
          hideAlert();
        }, 3000);
      })
      .catch((err) => {
        //debugger;
        setIsLoading(false);
        console.log(`Error: ${err}`);
        setCurrentAnimation("Idle");
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      });
  };

  const handleFocus = (e) => setCurrentAnimation("Walking");

  const handleBlur = (e) => setCurrentAnimation("Dance");

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text"> Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your email address"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              type="text"
              name="message"
              className="textarea"
              placeholder="Your message here"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              rows={4}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Pikachu Here */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-5[550px] h-[350px] flex justify-center items-center">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />

          <Suspense fallback={<Loader />}>
            <Pikachu
              currentAnimation={currentAnimation}
              position={[1, -2, 0]}
              scale={[2, 2, 2]}
              rotation={[Math.PI / 90, Math.PI / -10, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
