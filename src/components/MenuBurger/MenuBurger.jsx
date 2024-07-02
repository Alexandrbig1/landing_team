import SocialIcons from "../SocialIcons/SocialIcons";
import { useTheme } from "../../context/ThemeContext";
import FooterRightsText from "../UI/FooterRightsText/FooterRightsText";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import {
  BurgerContainer,
  CloseBurgerMenu,
  Menu,
  BurgerMenuItems,
  BurgerLogoWrapper,
  MenuBurgerText,
  MenuBurgerLinkIcon,
  MenuBurgerItems,
  BurgerMenuFooterWrapper,
  CloseBurgerIcon,
} from "./MenuBurger.styled";

// eslint-disable-next-line react/prop-types
export default function MenuBurger() {
  const { toggleMenu, menuOpen } = useTheme();

  const menuVars = (index) => ({
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5 * index,
        ease: [0.12, 0, 0.39, 0],
        type: "spring",
      },
    },
  });

  const menuItems = [
    { to: "/landing_team/", text: "Home" },
    { to: "team", text: "Team" },
    { to: "projects", text: "Projects" },
  ];

  return (
    <Menu $isOpen={menuOpen}>
      <CloseBurgerMenu
        type="button"
        aria-label="Close Menu"
        onClick={toggleMenu}
      >
        <CloseBurgerIcon />
      </CloseBurgerMenu>
      <BurgerContainer>
        <nav>
          <BurgerMenuItems>
            {menuItems.map((menuItemData, idx) => (
              <MenuBurgerItems
                key={uuidv4()}
                onClick={toggleMenu}
                variants={menuVars(idx)}
                initial="initial"
                animate="animate"
              >
                <MenuBurgerText to={menuItemData.to} end>
                  <MenuBurgerLinkIcon />
                  {menuItemData.text}
                </MenuBurgerText>
              </MenuBurgerItems>
            ))}
          </BurgerMenuItems>
        </nav>
      </BurgerContainer>
      <BurgerMenuFooterWrapper>
        <BurgerLogoWrapper>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <SocialIcons color="#7289d9" />
            </motion.div>
          )}
        </BurgerLogoWrapper>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 1 }}
          >
            <FooterRightsText burger />
          </motion.div>
        )}
      </BurgerMenuFooterWrapper>
    </Menu>
  );
}
