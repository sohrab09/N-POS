import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import './AppSidebar.css'
import { Link } from 'react-router-dom';
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import SidebarMenu from './SidebarMenu';
import { useEffect } from 'react';
import { Get } from '../../http/http';

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const AppSidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const [menus, setMenus] = useState([]);
  console.log("Menus ------------>>>>>>>> ", menus)

  useEffect(() => {
    Get('api/Menu/GetAll')
      .then(res => {
        console.log("Res ------------>>>>>>>> ", res.data.data)
        setMenus(res.data.data)
      })
  }, [])

  return (
    <div className="main-container">
      {/* Logo and Name */}
      <motion.div
        animate={{
          width: isOpen ? "260px" : "50px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar`}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                animate="show"
                exit="hidden"
                className="logo"
              >
                N POS
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            {
              isOpen ? <FontAwesomeIcon icon={faUser} onClick={toggle} /> : <FaBars onClick={toggle} />
            }
          </div>
        </div>

        {/* Menu */}

        {/* <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  setIsOpen={setIsOpen}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                />
              );
            }


            return (
              <Link
                to={route.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </section> */}

        {/* Menu */}
        <section className='routes'>
          {
            menus.map((menu, index) => {
              if (menu.parent_id === null) {

                // match parent id and mod id for sub menu

                /**
                              const subMenu = menus.filter((sub) => sub.parent_id !== null && sub.parent_id === menu.mod_id);
                              if (subMenu.length > 0) {
                                return (
                                  <SidebarMenu
                                    setIsOpen={setIsOpen}
                                    subMenu={subMenu}
                                    showAnimation={showAnimation}
                                    isOpen={isOpen}
                                  />
                                )
                              }
                 */


                return (
                  <Link
                    // to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {menu.mod_name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                )
              }
            })
          }
        </section>
      </motion.div>


    </div>
  )
}

export default AppSidebar