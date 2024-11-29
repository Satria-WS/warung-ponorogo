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
import logo from "./assets/logo/logo-header.svg";
// import material-Ui
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom"; // for routing links if needed
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";

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
      <header className="border border-red-600 ">
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
        <nav className="bg-[#F9F9F7]">
          <AppBar position="sticky" sx={{ backgroundColor: "#F9F9F7" }}>
            <Toolbar>
              <Container
                maxWidth="lg"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* Logo Section */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ height: "40px", marginRight: "10px" }}
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "600", fontStyle: "italic" }}
                  >
                    Bistro Bliss
                  </Typography>
                </Box>

                {/* Menu Items */}
                <Box sx={{ display: "flex", gap: 3 }}>
                  {/* <Link   to="/about">
                    About
                  </Link>
                  <Link   to="/menu">
                    Menu
                  </Link>
                  <Link   to="/contact">
                    Contact
                  </Link> */}
                  {/* <Link  to="/about">
                    About
                  </Link>
                  <Link   to="/menu">
                    Menu
                  </Link>
                  <Link   to="/contact">
                    Contact
                  </Link> */}
                </Box>

                {/* Book a Table Button */}
                <Box>
                  <Button variant="contained" color="primary">
                    Book A Table
                  </Button>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
        </nav>
      </header>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
