import { ArrowRight, Clock } from "lucide-react";
import hamburgerImage from "../assets/Hamburger-pana.png";

function Hero() {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden`}
    >
      <div className={`absolute inset-0 overflow-hidden`}>
        <div
          className={`absolute top-20 left-20 w-64 h-64 bg-red-100 rounded-full
           mix-blend-multiply filter blur-xl opacity-70`}
        />
        <div
          className={`absolute top-40 left-20 w-72 h-72 bg-orange-100 rounded-full
           mix-blend-multiply filter blur-xl opacity-70`}
        />
        <div
          className={`absolute -bottom-8 left-40 w-72 h-72 bg-yellow-100 rounded-full
           mix-blend-multiply filter blur-xl opacity-70`}
        />
      </div>

      <div className={`flex flex-col lg:flex-row items-center gap-2 px-20 w-full`}>

        {/* Left Content (Buttons and texts) */}
        <div className={`lg:w-1/2 space-y-12 flex-1`}>
          <div
            className={`inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm`}
          >
            <span className={`h-2 w-2 bg-red-500 rounded-full`} />
            <span className={`text-sm font-medium text-gray-600`}>
              New Release
            </span>
          </div>

          <div className={`space-y-4`}>
            <h1
              className={`text-5xl lg:text-6xl font-bold leading-tight text-nowrap`}
            >
              <span
                className={`block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600`}
              >
                Experience the
              </span>
              <span
                className={`block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to orange-500`}
              >
                perfect taste
              </span>
            </h1>
            <p className={`text-lg text-gray-600 max-w-lg`}>
              Premium burgers crafted with passion, delivering an unforgettable
              dining experience to your doorstep.
            </p>
          </div>
          <div className={`flex-1 flex sm:flex-col lg:flex-row gap-6`}>
            <button
              className={`group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white
               transition-all duration-200 bg-red-500 rounded-xl hover:bg-red-600 cursor-pointer`}
            >
              <span
                className={`absolute inset-0 w-full h-full mt-1 ml-1 duration-300
                 ease-in-out bg-black rounded-xl group-hover:mt-0 group-hover:ml-0`}
              />
              <span
                className={`absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600
                 rounded-xl`}
              />
              <span className={`relative flex items-center`}>
                Order Now
                <ArrowRight
                  className={`ml-2 w-5 h-5 group-hover:rotate-90 transition-transform duration-300`}
                />
              </span>
            </button>

            <button
              className={`group relative inline-flex items-center justify-center px-8 py-4
               font-bold text-red-500 transition-all duration-200 bg-white rounded-xl border-2
               border-red-500 hover:bg-red-500 hover:text-white`}
            >
              <span className={`relative flex items-center`}>
                Track Order
                <Clock 
                  className={`ml-2 w-5 h-5`} 
                />
              </span>
            </button>
          </div>

          {/* Key Features */}
          <div className={`flex items-center gap-8 pt-8`}>
            <div className={`flex items-center gap-2`}>
              <span className={`h-1 w-1 bg-red-500 rounded-full`}/>
              <span className={`text-sm font-semibold text-gray-600`}>
                30 min Delivery
              </span>
            </div>
            <div className={`flex items-center gap-2`}>
              <span className={`h-1 w-1 bg-red-500 rounded-full`}/>
              <span className={`text-sm font-semibold text-gray-600`}>
                100% Secure
              </span>
            </div>
          </div>

        </div>

        {/* Right Content (Hamburger) */}
        <div className={`flex-1 relative perspective-[1000]`}>

          {/* Circle */}
          <div className={`absolute inset-0 flex items-center justify-center`}>
            <div className={`w-[80%] h-[90%] border-2 border-dashed border-red-200 rounded-full`}/>
            <div className={`absolute w-[65%] h-[70%] border-2 border-dashed border-red-200 rounded-full`}/>
          </div>

          {/* Burger Image */}
          <div className={`relative group cursor-pointer transform-gpu transition-all duration-300 
           hover:scale-105 hover:rotate-6`}
          >
            <div className={`relative p-10`}>
              <img
                src={hamburgerImage} 
                className={`w-full h-full object-contain drop-shadow-2xl transform transition-transform
                  duration-500 hover:rotate-12`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
