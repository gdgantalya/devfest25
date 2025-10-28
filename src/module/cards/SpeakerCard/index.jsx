import { speakersCardClass as Styles } from "./speaker-card";
import clsx from "clsx";

const SpeakerCard = (props) => {
  const { name, src, title } = props;

  return (
    <div className={Styles.wrapper}>
      <section className={Styles.section}>
        <img alt={`${name}-${title}`} src={src} className={Styles.img} />
      </section>
      <div className={clsx(Styles.nameTitleWrapper, "h-full")}>
        <h1 className={Styles.name}>{name}</h1>
        <p className={Styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
