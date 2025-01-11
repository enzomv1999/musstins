import Arrow from "../../images/arrow.svg";

function Button({ text }) {
  return (
    <a
      href="/"
      className="w-fit flex flex-row items-center gap-2 bg-lightBlue py-2 px-3 rounded-md font-sans text-button mobile:text-xs"
    >
      {text}
      <img src={Arrow} alt="Seta à direita" />
    </a>
  );
}

export default Button;
