import anu from "../assets/avathar/anu.jpg";
import malik from "../assets/avathar/malik.jpg";
import raja from "../assets/avathar/raja.jpg";
const testimonials = [
  {
    id: 1,
    name: "Ms. Anu K S",
    title: "HOD, CSE dept",
    image: anu, 
    quote:
      "As the HOD of CSE, I’m proud to support Celestia, an exceptional platform driving student innovation and technical excellence.",
  },
  {
    id: 2,
    name: "Dr. Malik",
    title: "Assistent professor",
    image: malik, 
    quote:
      "As the HOD of CSE, I’m proud to support Celestia, an exceptional platform driving student innovation and technical excellence.",
  },
  {
    id: 3,
    name: "Dr. Raja",
    title: "Computer Science",
    image: raja,
    quote:
      "As the HOD of CSE, I’m proud to support Celestia, an exceptional platform driving student innovation and technical excellence.",
  },
];

const Testimonials = () => {
  return (
    <>
      <h2 className="text-white text-center text-4xl font-semibold mb-14 md:text-5xl">
        Testimonials
      </h2>
      <div className="w-full flex justify-center">
      <div className="grid gap-32 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#D9D9D9] text-black p-6 rounded-lg max-w-xs text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-8 border-[#0A1632] relative top-[-70px]">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-full h-full"
              />
            </div>
          <div className="relative top-[-60px]">
          <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-xs font-semibold">{testimonial.title}</p>
            <p className="mt-4 text-[#020000] font-semibold">“{testimonial.quote}  ”</p>
          </div>
          </div>
        ))}
      </div>
      </div>
      <div className="flex justify-center mt-6">
        <span className="h-2 w-2 bg-gray-500 rounded-full mx-1"></span>
        <span className="h-2 w-2  bg-red-500  rounded-full mx-1"></span>
        <span className="h-2 w-2 bg-gray-500 rounded-full mx-1"></span>
      </div>
    </>
  );
};

export default Testimonials;
