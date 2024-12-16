import { useState } from "react";
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
  CardHeader,
  Avatar,
  Divider,
  CssBaseline,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

// image fast food
import image_1 from "../../assets/about/image-1.png";
import image_2 from "../../assets/about/image-2.png";
import image_3 from "../../assets/about/image-3.png";

import play from "../../assets/about/play.svg";
// image icon
import icon_1 from "../../assets/about/icon-1.svg";
import icon_2 from "../../assets/about/icon-2.svg";
import icon_3 from "../../assets/about/icon-3.svg";

// countUp animation
import CountUp from "react-countup";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const iconList = [
    {
      icon: icon_1,
      title: "Multi Cuisine",
      text: "",
    },
    {
      icon: icon_2,
      title: "Easy To Order",
      text: "",
    },
    {
      icon: icon_3,
      title: "Fast Delivery",
      text: "",
    },
  ];

  const informationList = [
    {
      number: "3",
      text: "Lokasi",
    },
    {
      number: "2021",
      text: "Awal Berdiri",
    },
    {
      number: "20",
      text: "Staff Members",
    },
    {
      number: "79",
      text: "Kepuasan Customer",
    },
  ];

  return (
    <>
      <CssBaseline />
            <Container maxWidth="xl">
              <Box sx={{ padding: "3rem" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Playfair Display",
                    textAlign: "center",
                  }}
                >
                  About Us
                </Typography>
                <p className="text-center py-3 max-w-[500px] mx-auto">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quas
                  dolorem iure numquam similique nisi eius nostrum qui, ex animi?
                </p>
              </Box>
            </Container>
      <Container maxWidth="xl">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:overflow-y-auto bg-[#F9F9F7] py-20 h-full ">
          {/* col-1 */}
          <div className="relative">
            <img
              className=" border border-black object-cover w-full h-[36rem] rounded-lg  "
              src={image_1}
              alt="person"
            />

            <div className=" bg-[#474747] w-[300px] h-auto absolute bottom-0 right-0 text-sm text-white p-5 space-y-3 rounded-lg">
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
                <PlaceIcon />: Sawangan Permai RT, RT.7RT.1/RW.9, Sawangan Baru,
                Kec. Sawangan, Kota Depok, Jawa Barat 16511
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
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
      </Container>
      <Container style={{ paddingLeft: 0, paddingRight: 0 }} maxWidth={false}>
        <Box
          component="div"
          alt="picture"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            objectFit: "cover",
            backgroundImage: `url(${image_2})`,
            fontFamily: "Playfair Display",
            color: "white",
            padding: "18rem 10rem 18rem 10rem",
            textAlign: "center",
          }}
        >
          {/* svg play button playlist */}
          <Button
            sx={{
              cursor: "pointer", // Indicate that it's clickable
              "&:hover": {
                opacity: 0.8, // Slightly fade out on hover
                transform: "scale(1.05)", // Slightly increase the size on hover
                transition: "transform 0.3s ease, opacity 0.3s ease", // Smooth transition for hover effect
              },
              "&:active": {
                transform: "scale(0.95)", // Slightly shrink the button when clicked
                transition: "transform 0.1s ease", // Quick transition for click effect
              },
              "& img": {
                width: "100%", // Ensure the image fits within the button
                height: "auto",
              },
            }}
          >
            <img className="" src={play} alt="Play Button" />
          </Button>
          {/* title */}

          <Typography
            variant="h3"
            sx={{
              fontFamily: "Playfair Display",
              paddingTop: "2rem",
            }}
          >
            Feel the authentic & original taste from us
          </Typography>
          {/* YouTube Video */}
          {/* {true && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)", // Optional overlay
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              width="80%" // You can adjust the width and height based on your preference
              height="80%"
              src="https://www.youtube.com/embed/LpRZi_cOSOI?autoplay=1&mute=1" // YouTube Embed URL with autoplay
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            />
          </Box>
        )} */}
        </Box>
      </Container>
      <Container maxWidth="xl">
        <div className="grid grid-cols-3 max-md:grid-cols-1 place-content-center gap-12 py-24">
          {iconList.map((item, index) => (
            <>
              {/* col-1 */}
              <div key={index} className="flex gap-5">
                {/* col-1.1 */}
                <div className="flex-shrink-0">
                  <img src={item.icon} alt={item.title} />
                </div>
                {/* col-1.2 */}
                <div className="space-y-3">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-darkGray text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum tempore optio dolor praesentium obcaecati sunt
                    perferendis rem ratione quo obcaecati doloremque!
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:overflow-y-auto bg-[#F9F9F7] h-full ">
          {/* col-1 */}
          <div className="relative flex flex-col items-center justify-center order-2 max-lg:pb-5">
            <img
              className=" border border-black object-cover w-full h-[36rem] rounded-lg "
              src={image_3}
              alt="person"
            />
          </div>
          {/* col-2 */}
          <div className="relative space-y-5 p-16  order-1">
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Playfair Display",
              }}
            >
              A little information for our valuable guest
            </Typography>
            <p className="text-[#2C2F24] font-semibold">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 ">
              {informationList.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white rounded-3xl space-y-2 py-8 max-sm:flex-shrink-0 "
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "Playfair Display",
                      }}
                    >
                      {/* {item.number} */}
                      <CountUp
                        start={0}
                        end={`${item.number}`}
                        duration={2.75}
                      />
                      {item.number === '79' ? ' %' : null}
                    </Typography>
                    <span className="text-xs font-semibold">{item.text}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default About;
