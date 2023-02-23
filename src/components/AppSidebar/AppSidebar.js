import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import './AppSidebar.css'
import { Link } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import { useEffect } from 'react';
import { Get } from '../../http/http';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



const AppSidebar = () => {

  const [isOpen, setIsOpen] = useState(true);
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
  // console.log("Menus ------------>>>>>>>> ", menus)

  const getAllMenus = () => {
    try {
      Get('api/Menu/GetAll')
        .then(res => {
          console.log("Res ------------>>>>>>>> ", res)
          setMenus(res.data.data)
        })
    } catch (error) {
      console.log("Get Menu Error ------->>>>> ", error)
    }
  };

  useEffect(() => {
    getAllMenus()
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
              isOpen ? <FontAwesomeIcon icon={faAngleLeft} onClick={toggle} /> : <FontAwesomeIcon icon={faAngleRight} onClick={toggle} />
            }
          </div>
        </div>

        {/* Menu */}
        <section className='routes'>
          {
            // eslint-disable-next-line array-callback-return
            menus.map((menu, index) => {
              if (menu.parent_id === null) {

                const subMenu = menus.filter((sub) => menu.mod_id === sub.parent_id);
                if (subMenu.length > 0) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      subMenu={subMenu}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                      menu={menu}
                    />
                  )
                }

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