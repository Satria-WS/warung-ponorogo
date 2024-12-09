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
import play from "../../assets/about/play.svg";

const About = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:overflow-y-auto bg-[#F9F9F7] h-full ">
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
            textAlign:"center"
          }}
        >
          {/* svg play button */}
          <Box>
            <img src={play} alt="Play Button" />
          </Box>
          {/* title */}
          <div>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Playfair Display",
                paddingTop: "2rem",
              }}
            >
              Feel the authentic & original taste from us
            </Typography>
          </div>
        </Box>
      </Container>
    </>
  );
};
export default About;
