import Decorator from "../../images/subtitle-decorator.svg";

function SubtitleDecorator({ text }) {
  return (
    <span className="flex flex-row gap-2 justify-start items-center uppercase font-serif text-decorator text-lightBlue mobile:text-xxs">
      <img
        src={Decorator}
        alt="Três linhas verticais"
        className="pl-1 mobile:w-[13px] mobile:h-[12px]"
      />
      {text}
    </span>
  );
}

export default SubtitleDecorator;
