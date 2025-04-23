import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dm26ec6',
      'template_avf8f0f',       // <-- replace this
      form.current,
      'lbYksoLilwFR_9FNF'        // <-- replace this
    )
    .then((result) => {
      console.log('Email sent!', result.text);
      alert("Thanks! We'll be in touch soon.");
    }, (error) => {
      console.error('Email error:', error.text);
      alert("Oops! Something went wrong.");
    });

    e.target.reset(); // Clear the form
  };

  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">

        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Step to
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black font-sans uppercase mb-8 italic">
          Success
        </h1>

        <div className="text-s md:text-xl lg:text-m py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12
        bg-white bg-opacity-20 w-[700px] mx-auto mb-8 rounded-full text-black text-opacity-30">
          Stressed about college admissions? Extracurricular activities? SAT? 
          Actually, doing too much might be a bad thing. This guide privdes you with information on what you should be doing.
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col justify-center mb-4 mt-12 space-y-4">
            <input
              placeholder="Email address..."
              type="email"
              name="user_email"
              required
              className="text-lg placeholder:text-black-500 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-50 
              focus:bg-opacity-20 duration-150 rounded-full mb-4 md:mb-0 mx-auto w-[300px]"
            />

            <input 
              type="submit"
              value="Get my FREE guideline!"
              className="bg-primary rounded-full text-m md:text-m py-4 px-6 md:px-10 lg:py-6
              lg:px-12 cursor-pointer hover:opacity-75 duration-150 mb-4 mx-auto w-[300px]" 
            />
          </div>

          <div className="opacity-75 italic text-black">
            We will not share your information with anyone.
          </div>
        </form>

      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between text-black">
        <p>Provided by JTutor</p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
