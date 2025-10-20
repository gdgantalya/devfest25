import menulinkClasses from "./menulink.classes";

const MenuLink = ({ slur, label }) => {
  const isExternal = slur.startsWith("http") || slur.startsWith("mailto");
  const href = isExternal ? slur : `#${slur}`;

  return (
    <li className={menulinkClasses.list}>
      <a
        href={href}
        aria-label={label}
        className={menulinkClasses.link}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {label}
      </a>
    </li>
  );
};

export default MenuLink;
