import React, { Fragment } from "react";
// import router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import icon
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

// icon
import fb from "./assets/icon/fb.svg";
import github from "./assets/icon/github.svg";
import instagram from "./assets/icon/instagram.svg";
import twitter from "./assets/icon/twitter.svg";
// import logo
import logoHeader from "./assets/logo/logo-header.svg";
import logoFooter from "./assets/logo/logo-footer.svg";
// import material-Ui
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Link as MUILink,
} from "@mui/material";
import { Link } from "react-router-dom"; // for routing links if needed
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import { useState } from "react";

function App() {
  const iconList = [
    {
      icon: fb,
      link: "#",
      altText: "facebook",
    },
    {
      icon: github,
      link: "#",
      altText: "github",
    },
    {
      icon: instagram,
      link: "#",
      altText: "instagram",
    },
    {
      icon: twitter,
      link: "#",
      altText: "twitter",
    },
  ];

  const menuList = ["home", "about", "menu", "contact"];

  const [activeLink, setActiveLink] = useState(0); // Track the active link

  const handleClick = (path: any) => {
    setActiveLink(path);
  };

  // Specify the type for the accumulator as an array of JSX elements
  const listItems = iconList.reduce<JSX.Element[]>((acc, item, index) => {
    acc.push(
      <li className="pointer" key={index}>
        <a href={item.link}>
          <img src={item.icon} alt={item.altText} />
        </a>
      </li>
    );
    return acc;
  }, []);

  return (
    <Fragment>
      <Router>
        {/* header */}
        <header>
          {/* top */}
          <div className="bg-darkGray">
            <div className="container flex justify-between py-2">
              {/* col-1 */}
              <div className="flex text-white gap-10">
                <div className="space-x-2">
                  <LocalPhoneIcon />
                  <span>081281116697</span>
                </div>
                <div className="space-x-2">
                  <MailIcon />
                  <span>ponorogo@gmail.com</span>
                </div>
              </div>
              {/* col-2 */}
              <div>
                <ul className="flex gap-2">{listItems}</ul>
              </div>
            </div>
          </div>
          {/* bottom */}
          <nav>
            <AppBar position="relative" sx={{ backgroundColor: "#F9F9F7" }}>
              <Toolbar>
                <Container
                  disableGutters
                  maxWidth={"lg"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.2rem",
                  }}
                >
                  {/* Logo Section */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={logoHeader}
                      alt="logo"
                      style={{ height: "60px", marginRight: "10px" }}
                    />
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        fontWeight: "600",
                        fontStyle: "italic",
                        fontFamily: "Playfair Display",
                        color: "black",
                      }}
                    >
                      Bistro Bliss
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: 3, color: "black" }}>
                    {menuList.map((item, index) => {
                      const path = `/${item}`;
                      const isActive = activeLink === index;

                      return (
                        <Link
                          key={index}
                          to={path}
                          onClick={() => handleClick(index)}
                          className={`hover:bg-[#DBDFD0] rounded-full duration-300 font-semibold px-4 py-2 ${
                            isActive
                              ? "bg-[#DBDFD0] font-bold"
                              : "bg-transparent"
                          }`} // Apply active styles conditionally
                        >
                          {`${item
                            .charAt(0)
                            .toLocaleUpperCase()}${item.substring(1)}`}
                        </Link>
                      );
                    })}
                  </Box>

                  {/* Book a Table Button */}
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        backgroundColor: "red",
                        "&:hover": { backgroundColor: "darkred" },
                        borderRadius: "999px",
                      }}
                    >
                      Book A Table
                    </Button>
                  </Box>
                </Container>
              </Toolbar>
            </AppBar>
          </nav>
        </header>

        {/* Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* Footer */}
      <footer>
        <Box>
          <div className="grid grid-cols-3 gap-3">
            {/* col-1 */}
            <div className="bg-orange-300 space-y-4">
              <div className="flex gap-3 items-center">
                <img src={logoFooter} alt="footer logo" />
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: "600",
                    fontStyle: "italic",
                    fontFamily: "Playfair Display",
                    color: "white",
                  }}
                >
                  Bistro Bliss
                </Typography>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae accusantium odio possimus ipsum. Ab, recusandae.
                Atque ducimus et repellat porro?
              </p>
              <ul className="flex gap-2">
                {iconList.map((item, index) => (
                  <>
                    <li className="pointer" key={index}>
                      <a href={item.link}>
                        <img className="bg-red-700 rounded-full" src={item.icon} alt={item.altText} />
                      </a>
                    </li>
                  </>
                ))}
              </ul>
              <div>
              </div>
            </div>
            {/* col-2 */}
            <div className="flex flex-col items-center bg-orange-300 space-y-4">
              <Typography variant="h6" sx={{color:"white" , fontWeight:"600"}}>Pages</Typography>
              <ul className="space-y-3">
                {menuList.map((item, index) => (
                  <>
                    <li>{item}</li>
                  </>
           ))}
                </ul>
            </div>
            {/* col-3 */}
            <div className="bg-orange-300">
            <Typography variant="h6" sx={{color:"white" , fontWeight:"600"}}>Follow Us On Instagram</Typography>
            </div>
          </div>
          
        </Box>
      </footer>
    </Fragment>
  );
}

export default App;
