import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import Modal from "../Modal/Modal";
import MenuBurgerIcon from "../MenuBurger/MenuBurgerIcon";
import { motion } from "framer-motion";
import {
  BurgerWrapper,
  HeaderIcons,
  HeaderItems,
  HeaderLink,
  HeaderMenu,
  HeaderMenuWrapper,
  HeaderText,
  HeaderWrapper,
} from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderMenuWrapper>
        <nav>
          <HeaderMenu>
            <HeaderItems>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.25 }}
              >
                <HeaderLink to="/landing_team/" end>
                  <HeaderIcons>
                    <FaHome />
                  </HeaderIcons>
                  <HeaderText>Home</HeaderText>
                </HeaderLink>
              </motion.div>
            </HeaderItems>
            <HeaderItems>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.5 }}
              >
                <HeaderLink to="team" end>
                  <HeaderIcons>
                    <FaPeopleGroup />
                  </HeaderIcons>
                  <HeaderText>Team</HeaderText>
                </HeaderLink>
              </motion.div>
            </HeaderItems>
            <HeaderItems>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.75 }}
              >
                <HeaderLink to="projects" end>
                  <HeaderIcons>
                    <GrProjects />
                  </HeaderIcons>
                  <HeaderText>Projects</HeaderText>
                </HeaderLink>
              </motion.div>
            </HeaderItems>
          </HeaderMenu>
        </nav>
        <BurgerWrapper>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 1 }}
          >
            <Modal />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 1.25 }}
          >
            <ThemeSwitcher />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 1.5 }}
          >
            <MenuBurgerIcon />
          </motion.div>
        </BurgerWrapper>
      </HeaderMenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;
