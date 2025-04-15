import { Flame } from "lucide-react";

function Logo() {
  return (
    <a href="#h" className={`relative z-10`}>
      <div className={
        `absolute inset-1 bg-gradient-to-r from-red-600 to-orange-600
         rounded-xl blur opacity-25 hover:opacity-50 transition duration-300`
      }>
      </div>
      <Flame className={`text-red-600 w-10 h-10`}/>
    </a>
  );
}

export default Logo;