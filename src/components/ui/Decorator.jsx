import Decorator from "../../images/subtitle-decorator.svg";

function SubtitleDecorator({ text }) {
  return (
    <span className="flex flex-row gap-2 justify-start items-center uppercase font-serif text-decorator text-lightBlue">
      <img src={Decorator} alt="Três linhas verticais" className="pl-1" />
      {text}
    </span>
  );
}

export default SubtitleDecorator;
