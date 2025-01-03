import React, { Fragment, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
// import router
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
// import icon
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// icon
import fb from "./assets/icon/fb.svg";
import github from "./assets/icon/github.svg";
import instagram from "./assets/icon/instagram.svg";
import twitter from "./assets/icon/twitter.svg";
import goFood from "./assets/logo/logo-goFood.svg";
// import logo
import logoHeader from "./assets/logo/logo-header.svg";
import logoFooter from "./assets/logo/logo-footer.svg";

import logoPonorogo from "./assets/logo/rms.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// import material-Ui
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid2,
  Menu as Menu1,
  MenuItem,
  Fab,
} from "@mui/material";

import { Link } from "react-router-dom"; // for routing links if needed
import About from "./components/about/About";
import Menu from "./components/menu/Menu";

import Home from "./components/home/Home";
import { useState } from "react";
import image_2 from "./assets/home/image-2.png";
import image_3 from "./assets/home/image-3.png";
import image_4 from "./assets/home/image-4.png";
import image_5 from "./assets/home/image-5.png";
import Contact from "./components/contact/Contact";

// import image for footer
import imageF_1 from "./assets/footer/image-1.png";
import imageF_2 from "./assets/footer/image-2.png";
import imageF_3 from "./assets/footer/image-3.png";
import imageF_4 from "./assets/footer/image-4.png";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //configuraton aos
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // State for the menu visibility
  const [menuAnchorElx, setMenuAnchorElx] = useState(null);
  // hook navigate to function
  const navigate = useNavigate();
  // Get the current location (path)
  const location = useLocation();

  console.log("location?", location);

  //navigation function
  const handleNavigate = () => {
    // console.log("Navigating to Home...");
    navigate("/");
    // isActive = true;
  };

  // Open the menu (set the anchor element)
  const handleMenuOpen = (event: any) => {
    setMenuAnchorElx(event.currentTarget);
  };

  // Close the menu
  const handleMenuClose = () => {
    setMenuAnchorElx(null);
  };
  // console.log("menuAnchorEl?", menuAnchorElx);

  const menuList = ["home", "about", "menu", "contact"];
  const locationIndex =
    location.pathname === "/"
      ? 0
      : menuList.indexOf(location.pathname.substring(1));

  console.log("locationIndex", locationIndex);
  // const [activeLink, setActiveLink] = useState<any>(0); // Track the active link

  // const handleClick = (path: number) => {
  //   setActiveLink(path);
  //  setActiveLink(localStorage.setItem("activeLink", activeLink.toString()))
  // };

  // update local storage for new tab
  // useEffect(() => {
  //   localStorage.setItem("activeLink", activeLink.toString());
  // }, []);
  // console.log("localStorage?", localStorage.getItem("activeLink"))

  const iconList = [
    // {
    //   icon: fb,
    //   link: "#",
    //   altText: "facebook",
    // },
    // {
    //   icon: github,
    //   link: "#",
    //   altText: "github",
    // },
    // {
    //   icon: instagram,
    //   link: "#",
    //   altText: "instagram",
    // },
    // {
    //   icon: twitter,
    //   link: "#",
    //   altText: "twitter",
    // },
    {
      icon: goFood,
      link: "#",
      altText: "goFood",
    },
  ];
  const imageFooter = [
    {
      src: imageF_1,
    },
    {
      src: imageF_2,
    },
    {
      src: imageF_3,
    },
    {
      src: imageF_4,
    },
  ];

  // Specify the type for the accumulator as an array of JSX elements
  const listItems = iconList.reduce<JSX.Element[]>((acc, item, index) => {
    acc.push(
      <li className="pointer" key={index}>
        <a href={item.link}>
          <img width="30px" src={item.icon} alt={item.altText} />
        </a>
      </li>
    );
    return acc;
  }, []);

  let isActive;

  return (
    <Fragment>
      {/* header */}
      <header className="sticky w-full z-10 top-0">
        {/* top */}
        <div className="bg-darkGray max-sm:hidden ">
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
          <AppBar
            className=""
            position="relative"
            sx={{ backgroundColor: "#F9F9F7" }}
          >
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
                {/* Bug link */}
                {/* Logo Section */}
                <Box
                  onClick={handleNavigate}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <img
                    src={logoPonorogo}
                    alt="logo"
                    style={{
                      height: "clamp(50px, 10vw, 100px)",
                      marginRight: "10px",
                    }}
                  />
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontStyle: "italic",
                      fontFamily: "Fugaz One",
                      color: "black",
                      // fontSize: {
                      //   xs: "1.5rem", // for extra small screens (smallest size)
                      //   sm: "2rem",   // for small screens (e.g., tablets)
                      //   md: "3rem",   // for medium screens (e.g., desktop)
                      // },
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)", // Using clamp for responsive font size
                    }}
                  >
                    RMS Ponorogo
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    color: "black",
                    "@media(max-width:1024px)": {
                      display: "none",
                    },
                  }}
                >
                  {menuList.map((item, index) => {
                    const path = `/${item}`;

                    isActive = locationIndex === index;

                    return (
                      <Link
                        key={index}
                        to={path}
                        // onClick={() => handleClick(index)}
                        className={`hover:bg-[#DBDFD0] rounded-full duration-300 font-semibold px-4 py-2 ${
                          isActive ? "bg-[#DBDFD0] font-bold" : "bg-transparent"
                        }`} // Apply active styles conditionally
                      >
                        {`${item.charAt(0).toLocaleUpperCase()}${item.substring(
                          1
                        )}`}
                      </Link>
                    );
                  })}
                </Box>

                {/* Mobile menu icon */}
                <Box
                  sx={{
                    cursor: "pointer",
                    display: "none",
                    "@media(max-width:1024px)": {
                      display: "block",
                    },
                  }}
                >
                  <MenuOutlinedIcon
                    className="text-red-600"
                    fontSize="large"
                    onClick={handleMenuOpen} // Open the menu on click
                  />
                </Box>

                {/* Pop-up menu (for mobile) */}
                <Menu1
                  anchorEl={menuAnchorElx}
                  open={Boolean(menuAnchorElx)}
                  onClose={handleMenuClose} // Close the menu
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {menuList.map((item, index) => (
                    <Link
                      to={`/${item}`}
                      //   sx={{
                      //   transitionDuration:"300ms",
                      //   "&:hover": {
                      //     // hover: font - semibold duration- 300 cursor- pointer
                      //     fontWeight: 600,
                      //     cursor: "pointer",

                      //     }
                      // }}
                      key={index}
                      onClick={() => {
                        // handleClick(index);
                        handleMenuClose(); // Close the menu after selecting
                      }}
                    >
                      <MenuItem className="hover:font-semibold duration-300">
                        {`${item.charAt(0).toLocaleUpperCase()}${item.substring(
                          1
                        )}`}
                      </MenuItem>
                    </Link>
                  ))}

                  {/* <Link
                      className="hover:text-white duration-300 cursor-pointer block"
                      to={`/${item}`}
                    >
                      {`${item.charAt(0).toLocaleUpperCase()}${item.substring(
                        1
                      )}`}
                    </Link> */}
                </Menu1>
              </Container>
            </Toolbar>
          </AppBar>
        </nav>
      </header>

      {/* Router */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      {/*floating button  */}
      {/* gofood */}
      <Box
        onClick={() =>
          window.open(
            "https://gofood.co.id/jakarta/restaurant/warung-ponorogo-5912a9a5-d9bd-482b-86de-b42291b22576"
          )
        }
        sx={{
          position: "fixed",
          bottom: "4rem",
          right: "5rem",
          zIndex: 1000,
          "@media(max-width:640px)": {
            right: "1rem",
          },
        }}
      >
        <Fab
          color="primary"
          aria-label="goFood"
          sx={{
            backgroundColor: "none",
            width: { xs: 60, sm: 70, md: 80 },
            height: { xs: 60, sm: 70, md: 80 },
          }}
        >
          {/* <WhatsAppIcon
            sx={{
              fontSize: "3rem",
              width: { xs: 40, sm: 50, md: 60 },
              height: { xs: 40, sm: 50, md: 60 },
            }}
          /> */}
          <img
            className=" w-[100px] hover:opacity-95 hover:shadow-xl bg-white rounded-full"
            src={goFood}
            alt="goFood"
          />
        </Fab>
      </Box>
      {/* whatsap*/}
      <Box
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=%2B6281280807385&text&type=phone_number&app_absent=0"
          )
        }
        sx={{
          position: "fixed",
          bottom: "10rem",
          right: "5rem",
          zIndex: 1000,
          "@media(max-width:640px)": {
            right: "1rem",
          },
        }}
      >
        <Fab
          color="primary"
          aria-label="whatsap"
          sx={{
            backgroundColor: "#25D366",
            "&:hover": {
              backgroundColor: "#128C7E",
            },
            width: { xs: 60, sm: 70, md: 80 },
            height: { xs: 60, sm: 70, md: 80 },
          }}
        >
          <WhatsAppIcon
            sx={{
              fontSize: "3rem",
              width: { xs: 40, sm: 50, md: 60 },
              height: { xs: 40, sm: 50, md: 60 },
            }}
          />
        </Fab>
      </Box>
      {/* Footer */}
      <footer>
        <Box sx={{ backgroundColor: "#474747" }}>
          <div className="grid grid-cols-3 max-sm:grid-cols-1  gap-3 py-32 max-sm:px-6 max-lg:px-7 px-20  ">
            {/* col-1 */}
            <div className="space-y-4">
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
              <p className="py-5 text-lightOlive">
                Warung Ponorogo menyajikan kuliner khas dengan cita rasa
                autentik, pelayanan cepat, dan harga terjangkau, memberikan
                pengalaman makan yang memuaskan di setiap pesanan. Nikmati
                kelezatannya!
              </p>
            </div>
            {/* col-2 */}
            <div className="flex flex-col max-xl:col-span-2 items-center space-y-4">
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "600" }}
              >
                Pages
              </Typography>
              <ul className="space-y-3 text-lightOlive">
                {menuList.map((item, index) => (
                  <>
                    <Link
                      key={index}
                      className="hover:text-white duration-300 cursor-pointer block"
                      to={`/${item}`}
                    >
                      {`${item.charAt(0).toLocaleUpperCase()}${item.substring(
                        1
                      )}`}
                    </Link>
                  </>
                ))}
              </ul>
            </div>
            {/* col-3 */}
            <div className=" max-xl:col-span-3">
              {/* <Typography
                align="center"
                variant="h6"
                sx={{ color: "white", fontWeight: "600" }}
              >
                Follow Us On Instagram
              </Typography> */}
              {/* picture */}
              <div className="py-3">
                <Grid2
                  container
                  spacing={2}
                  sx={{
                    width: "100%",
                    height: "auto",
                    placeContent: "center",
                  }}
                >
                  {imageFooter.map((image, index) => (
                    <Grid2
                      key={index}
                      size={{
                        xs: 12,
                        md: 6,
                      }}
                    >
                      {/* Use size instead of xs */}
                      <Box
                        component="img"
                        src={image.src}
                        alt="picture"
                        sx={{
                          width: "100%",
                          minWidth: 150,
                          height: 170,
                          objectFit: "cover",
                          borderRadius: "20px",
                          flex: "1",
                        }}
                      />
                    </Grid2>
                  ))}
                </Grid2>
              </div>
            </div>
            {/* copyright */}
            <div className="flex justify-center my-10 col-span-3  ">
              <span className="text-white">{`Copyright © ${new Date().getFullYear()} Warung Ponorogo. All Rights Reserved`}</span>
            </div>
          </div>
        </Box>
      </footer>
    </Fragment>
  );
}

export default App;
