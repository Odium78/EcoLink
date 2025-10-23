function NavButton({ dest = "", icon = "\u2193" }) {
  return (
    <a href={dest} className="mt-5 navButton px-7 cursor-pointer">
      {icon}
    </a>
  );
}

export default NavButton;
