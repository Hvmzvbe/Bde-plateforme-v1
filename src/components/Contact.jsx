import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";



const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">


        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">


        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Blinkers
          </p>

          <AnimatedTitle
            title="let&#39;s sh<b>a</b>e the <br /> n<b>e</b>w f<b>u</b>t<b>u</b>r<b>e</b> of <br /> stud<b>e</b><b>e</b>t lif<b>e</b>."// let&#39;s SHAPE THE FUTURE <br/> OF STUDENT LIFE
            className="special-font !md:text-[6.2rem] w-full font-blinkers !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="!bg-Green-100 mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
