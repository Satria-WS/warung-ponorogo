import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Grid2,
} from "@mui/material";
import backgroundImage from "../../assets/home/image-1.png";
import CardMenu from "./CardMenu";
// icon
import breakfast from "../../assets/home/ourMenu/breakfast.svg";
import dishes from "../../assets/home/ourMenu/dishes.svg";
import drink from "../../assets/home/ourMenu/drinks.svg";
import desserts from "../../assets/home/ourMenu/desserts.svg";

// image
import image_2 from "../../assets/home/image-2.png";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

// image event
import catering from "../../assets/home/event/event-1.png";
import birthday from "../../assets/home/event/event-2.png";
import wedding from "../../assets/home/event/event-3.png";
import event from "../../assets/home/event/event-4.png";

import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// image fast food
import image_3 from "../../assets/home/image-3.png";
import image_4 from "../../assets/home/image-4.png";
import image_5 from "../../assets/home/image-5.png";

const Home = () => {
  const listIcon = [
    {
      imageList: breakfast,
      title: "Breakfast",
      text: "",
      linkUrl: "",
    },
    {
      imageList: dishes,
      title: "Dishes",
      text: "",
      linkUrl: "",
    },
    {
      imageList: drink,
      title: "Drink",
      text: "",
      linkUrl: "",
    },
    {
      imageList: desserts,
      title: "Desserts",
      text: "",
      linkUrl: "",
    },
  ];

  const listEvent = [
    {
      imageList: catering,
      title: "Catering",
      text: "",
    },
    {
      imageList: birthday,
      title: "Birthday",
      text: "",
    },
    {
      imageList: wedding,
      title: "Wedding",
      text: "",
    },
    {
      imageList: event,
      title: "Event",
      text: "",
    },
  ];

  return (
    <>
      <Container className="" disableGutters maxWidth={false}>
        {/* Hero */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url(${backgroundImage})`,
            width: "100%",
            height: "750px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            border: "1px solid red",
          }}
        >
          <Box
            sx={{
              border: "1px solid red",
              maxWidth: "660px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Playfair Display",
              }}
            >
              Best food for your taste
            </Typography>
            <p className="text-xl text-[#2C2F24] font-semibold py-10">
              Discover delectable cuisine and unforgettable moments in our
              welcoming, culinary haven.
            </p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                className="bg-[#AD343E!important]"
                sx={{
                  padding: "20px 32px",
                  borderRadius: "999px",
                  fontWeight: "600",
                }}
                variant="contained"
                color="primary"
              >
                Book A table
              </Button>
              <Button
                className="bg-[white!important]"
                sx={{
                  padding: "20px 32px",
                  borderRadius: "999px",
                  border: "1px solid black",
                  fontWeight: "600",
                  color: "#2C2F24",
                }}
                variant="outlined"
                color="primary"
              >
                Explore menu
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Our Menu */}
        <Box
          sx={{
            padding: "3rem 0",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
            }}
          >
            Browse Our Menu
          </Typography>
          {/* Grid*/}
          <Grid2
            container
            spacing={2} // Adds spacing between grid items
            justifyContent="center" // Centers the items horizontally
            sx={{ marginTop: 4 }} // Adds margin at the top of the grid container
            gap={10}
          >
            {/* Loop through the items to display multiple cards */}
            {/* {Array.from(Array(4)).map((_, index) => ( */}
            {listIcon.map((icon, index) => (
              <Grid2
                item
                xs={2} // Full width on mobile
                sm={6} // 50% width on small screens (tablets)
                md={3} // 25% width on medium and larger screens (desktops)
                key={index}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: 345,
                    boxShadow: 3,
                    borderRadius: 2,
                    padding: "1.5rem",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translate(0,-10px)",
                    },
                  }}
                >
                  {/* Card Media for Image */}
                  <CardMedia
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                    component="img"
                    image={icon.imageList} // Your image source
                    alt={icon.title}
                  />

                  {/* Card Content */}
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Title */}
                    <Typography variant="h5" component="div">
                      {icon.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ullam, quibusdam.
                    </Typography>

                    {/* Button */}
                    <Button size="small" variant="contained" color="primary">
                      Explore Menu
                    </Button>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        {/* visit us */}
        <Box
          sx={{
            height: "600px",
            padding: "2rem",
            margin: "5rem 0",
          }}
        >
          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:overflow-y-auto bg-[#F9F9F7] h-full ">
            {/* col-1 */}
            <div className="relative">
              <img
                className=" border border-black object-cover w-full h-[36rem] rounded-lg  "
                src={image_2}
                alt="person"
              />

              <div className=" bg-[#474747] w-[300px] h-[200px] absolute bottom-0 right-0 text-sm text-white p-5 space-y-3 rounded-lg">
                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Come and visit us
                </Typography>
                <div>
                  <PhoneIcon />: 0813-8797-1837
                </div>
                <div>
                  <EmailIcon />: extencezone02@gmail.com
                </div>
                <div className="text-justify">
                  <PlaceIcon />: Sawangan Permai RT, RT.7RT.1/RW.9, Sawangan
                  Baru, Kec. Sawangan, Kota Depok, Jawa Barat 16511
                </div>
              </div>
            </div>
            {/* col-2 */}
            <div className="relative space-y-5 p-16">
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Playfair Display",
                }}
              >
                We provide healthy food for your family
              </Typography>
              <p className="text-[#2C2F24] font-semibold">
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance. Rooted in city's rich culinary culture, we aim
                to honor our local roots while infusing a global palate.
              </p>
              <p>
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>
          </div>
        </Box>
        {/* offer event */}
        <Box>
          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
              padding: "25px 25px",
            }}
          >
            We provide healthy food for your family
          </Typography>
          <Grid2
            container
            spacing={2} // Adds spacing between grid items
            justifyContent="center" // Centers the items horizontally
            gap={10}
          >
            {/* {Array.from(Array(4)).map((_, index) => ( */}
            {listEvent.map((event, index) => (
              <Grid2
                item
                xs={2} // Full width on mobile
                sm={6} // 50% width on small screens (tablets)
                md={3} // 25% width on medium and larger screens (desktops)
                key={index}
              >
                <Card>
                  <CardMedia
                    sx={{
                      width: "400px",
                      height: "300px",
                    }}
                    component="img"
                    image={event.imageList} // Your image source
                    alt={event.title}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Title */}
                    <Typography variant="h5" component="h5">
                      {event.title}
                    </Typography>

                    {/* Description */}
                    <p></p>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        {/* fast food */}
        {/* parent */}
        <Box
          sx={{
            backgroundColor: "#F9F9F7",
            padding: "1rem",
            margin: "3rem 0",
            display: "flex",
            justifyContent: "center",
            border: "1px solid red ",
          }}
        >
          {/* coulumn-1 */}
          <div className="flex p-16 gap-4">
            {/* coulumn-1.1 */}
            <div>
              <img src={image_3} alt="" />
            </div>
            {/* coulumn-1.2 */}
            <div className="flex flex-col gap-4">
              <img src={image_4} alt="" />
              <img src={image_5} alt="" />
            </div>
          </div>
          {/* coulumn-2 */}
          <div className="border border-purple-500 flex items-center">
            {/* text content */}
            <div className="max-w-[29rem] p-4 space-y-5">
              {/* title */}
              <Typography
                sx={{
                  fontFamily: "Playfair Display",
                }}
                variant="h3"
                component="h3"
              >
                Fastest Food Delivery in City
              </Typography>

              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab in
                esse eveniet consectetur quis temporibus dolorum eius iste
                facere neque?
              </p>
              <ul>
                <li>
                  <DeliveryDiningIcon /> Delivery within 30 minutes
                </li>
                <li>
                  <MonetizationOnIcon /> Best Offer & Prices
                </li>
                <li>
                  <WhatsAppIcon /> Whatsap Online
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};
export default Home;
