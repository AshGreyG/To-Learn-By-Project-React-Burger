import { cn } from "../utils";
import { LucideIcon } from "lucide-react";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon
  className?: string;
  count?: number;
}

function IconButton({
  icon: Icon, // Actually Icon is the parameter, and icon is the property
  className,
  count,
  ...props
}: IconButtonProps) {
  return (
    <button 
      className={cn("relative group cursor-pointer", className!)}
      onClick={props.onClick}
    >
      <div className={
        `absolute -inset-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur
         opacity-0 group-hover:opacity-20 transition duration-300`
      }></div>
      <div className={`relative`}>
        <Icon className={`h-6 w-6 text-gray-700 group-hover:text-red-500 transition-colors duration-200`} />
      </div>
      {count && (
        <div className={
          `absolute -top-2 -right-2 bg-gradient-to-r from-red-400 to-red-600
           text-white text-xs font-bold rounded-full h-5 w-5 flex items-center
            justify-center`
        }>
          {count}
        </div>
      )}
    </button>
  );
}

export default IconButton;