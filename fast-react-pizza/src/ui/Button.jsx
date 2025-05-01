import { Link } from "react-router-dom";

const base =
  "inline-block rounded-full bg-yellow-400 text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

const style = {
  primary: base + " font-semibold px-4 py-2 md:px-6 md:py-3 ",
  small: base + " px-2 py-1 text-sm",
  round: base + " px-1.25 py-0.5 text-sm md:py-1 md:px-2.5 font-medium",
  secondary:
    "inline-block rounded-full bg-stone-400 text-stone-900 transition-all duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-3 font-semibold",
};

export default function Button({ children, disabled, to, type, onClick }) {
  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={style[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}
