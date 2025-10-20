import { footerItems } from "../../module/config/constants/globals";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Colon,
  CurlyBraces,
  Facebook,
  Groundnut,
  Instagram,
  Linkedin,
  SemiColon,
  SplittedTag,
} from "../../module/icons";
import MenuLink from "../menulink";
import { Button } from "../../module/components/ui/button";
import { footerClass as styles } from "./DFIfooter.classes";
import XIcon from "../../assets/X_icon.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const DFIFooter = () => {
  const { frameOne, frameTwo, frameThree } = footerItems;

  const controls = useAnimation();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const dropInVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DevFest Antalya Logo" />
          </Link>
        </div>
        <div className={styles.middle}>
          <p className={styles.location}>
            Merhaba! Antalya&apos;daki en büyük GDG etkinliğinin bir parçası ol.
            Teknoloji meraklılarının bir araya geldiği, son teknolojileri
            keşfettiği ve geleceği şekillendirdiği etkinliğe katıl
          </p>
          <div className={styles.menuWrapper}>
            <ul className={styles.menu}>
              {frameOne.map(({ label, slur }) => (
                <MenuLink key={slur} label={label} slur={slur} />
              ))}
            </ul>
            <ul className={styles.menu}>
              {frameTwo.map(({ label, slur }) => (
                <MenuLink key={slur} label={label} slur={slur} />
              ))}
            </ul>
            <ul className={styles.menu}>
              {frameThree.map(({ label, slur }) => (
                <MenuLink key={slur} label={label} slur={slur} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.socialsCopyright}>
            <div className={styles.socialsWrapper}>
              <p className={styles.pSm}>Sosyal medyada bizi takip edin</p>
              <ul className={styles.socials}>
                <li>
                  <a
                    href="https://www.instagram.com/gdgantalya"
                    target="_blank"
                    className={styles.socialLink}
                  >
                    <Instagram color="fill-white" fill="fill-social-dark" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/gdg-antalya"
                    target="_blank"
                    className={styles.socialLink}
                  >
                    <Linkedin color="fill-white" fill="fill-social-dark" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.facebook.com/GDGAntalya"
                    target="_blank"
                    className={styles.socialLink}
                  >
                    <Facebook color="fill-white" fill="fill-social-dark" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/GDGAntalya"
                    target="_blank"
                    className={styles.socialLink}
                  >
                    <img src={XIcon} alt="XIcon" className="rounded-lg" />
                  </a>
                </li>
              </ul>
            </div>
            <p className={styles.pSm}>@Devfest2025. Tüm Hakları Saklıdır</p>
          </div>
        </div>
      </div>
      <motion.div
        className="doodles flex justify-between items-end"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          className="doodleContainer w-full lg:w-[240px]"
          variants={dropInVariants}
        >
          <CurlyBraces fill="fill-pastel-green" stroke="stroke-black" />
        </motion.div>
        <motion.div
          className="doodleContainer w-full lg:w-[240px] "
          variants={dropInVariants}
        >
          <Colon fill="fill-core-blue" stroke="stroke-black" />
        </motion.div>
        <motion.div
          className="doodleContainer w-full lg:w-[525px]"
          variants={dropInVariants}
        >
          <Groundnut fill="fill-pastel-red" stroke="stroke-black" />
        </motion.div>
        <motion.div
          className="doodleContainer w-full lg:w-[245px]"
          variants={dropInVariants}
        >
          <SemiColon fill="fill-core-yellow" stroke="stroke-black" />
        </motion.div>
        <motion.div
          className="doodleContainer w-full lg:w-[344px]"
          variants={dropInVariants}
        >
          <SplittedTag fill="fill-halftone-red" stroke="stroke-black" />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default DFIFooter;
