import React from 'react'
import { toast } from 'react-toastify';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';
import contactimg from '../assets/contact-img.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("error")
      setResult(data.message);
    }
  };
  return (
    <>
     <div className="flex justify-center" id="contact">
     <div className="home-head space-y-20 w-[90%] md:w-[70%]">
    <Navbar/>
    <div className="min-h-screen flex px-4 items-center justify-center bg-gray-900">
      <div className="w-[800px] bg-[#2D4A60] rounded-2xl  shadow-lg p-6">
        <h2 className="text-2xl  md:text-5xl font-bold text-white mb-6">Contact Us</h2>
        <form onSubmit={onSubmit} className="space-y-4  ">
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


  <div className=' '>
   <div className='mb-4' >
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 bg-[#96B8D4] text-black focus:outline-none rounded-xl "
              placeholder="Name"
            />
          </div>
          <div>
         
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 bg-[#96B8D4] text-black rounded-xl  focus:outline-none"
              placeholder="Email"
            />
          </div>
   </div>
          <div>
      
            <textarea
              id="message"
              rows="4"
              className="w-full mt-1 p-2 bg-[#96B8D4] text-black rounded-xl focus:outline-none"
              placeholder="Message"
            ></textarea>
          </div>
  </div>
    <div className='md:text-end'>
    <button
            type="submit"
            className="w-full md:w-1/4  py-2 bg-black text-white font-semibold rounded-xl transition"
          >
            {result ? result : "send message"}
          </button>
    </div>

    <div >
      <img
      className='hidden md:block max-w-[400px] pl-10   '
      src={contactimg} alt="" />
    </div>
        </form>
      </div>
    </div>
</div>
</div>

    <div className="footer  w-full flex justify-around items-center  py-10 bg-black rounded-t-[30px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
     <Footer/>
   </div>
   <p className="py-3 text-center text-sm">Copyright @{new Date().getFullYear()} Celestia</p>
    </>
  )
}

export default Contact
