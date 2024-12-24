import React from 'react'
import { toast } from 'react-toastify';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';
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
    <div className="home-head space-y-20 w-[90%] md:w-[70%] lg:h-screen ">
     <Navbar/>

    <h1 className='text-white text-center text-5xl font-bold  relative top-2 md:top-7'>Contact Us</h1>
   
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto px-5 text-gray-600  md:pt-8">
      <div className="flex flex-wrap text-white">
        <div className="w-full md:w-1/2 text-left">Name<input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Name" required />
        </div><div className="w-full md:w-1/2 text-left md:pl-4">Email<input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Email" required=""/>
        </div></div><div className="my-6 text-left text-white">Message<textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required="">
          </textarea>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-12 mb-10 rounded">{result ? result : "send message"}</button>
          </form>
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
