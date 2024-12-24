import React, { useRef } from "react";

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
import backgroundImage from "../../assets/home/image-1.png";
import { TypeAnimation } from "react-type-animation";
// icon
import breakfast from "../../assets/home/ourMenu/breakfast-1.png";
import dishes from "../../assets/home/ourMenu/dishes-1.png";
import drink from "../../assets/home/ourMenu/drink-1.png";
import desserts from "../../assets/home/ourMenu/dessert-1.png";
import MyLocationIcon from "@mui/icons-material/MyLocation";

// image
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

// image event
import catering from "../../assets/home/event/cathering.png";
import event from "../../assets/home/event/event-1.png";
import birthday from "../../assets/home/event/event-2.png";
// import wedding from "../../assets/home/event/event-3.png";

import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// image fast food

import image_2 from "../../assets/home/image-2.png";
import image_3 from "../../assets/home/image-3.png";
import image_4 from "../../assets/home/image-4.png";
import image_5 from "../../assets/home/image-5.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Customer from "./Customer";

const Home = () => {
  const navigate = useNavigate();
  //navigation function
  const handleNavigate = (object) => {
    //  navigate("/contact");
    navigate(object);
  };

  const sectionHome = useRef(null);

  useEffect(() => {
    // When the component mounts, check if the ref is available and scroll to it
    if (sectionHome.current) {
      const offset = 200; // Offset to ensure the section is not at the very top
      const position = sectionHome.current.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth", // Smooth scrolling
      });
    }
  }, []);

  const listIcon = [
    {
      imageList: breakfast,
      title: "Breakfast",
      text: "Nikmati sarapan khas Ponorogo dengan berbagai hidangan lezat seperti nasi pecel dan soto.",
    },
    {
      imageList: dishes,
      title: "Dishes",
      text: "Sajian utama Ponorogo, seperti nasi pecel, tongseng, dan sate ayam, yang menggugah selera.",
      linkUrl: "",
    },
    {
      imageList: drink,
      title: "Drink",
      text: "Minuman segar khas Ponorogo seperti es dawet dan es kelapa muda untuk melengkapi santapan Anda.",
    },
    {
      imageList: desserts,
      title: "Desserts",
      text: "Nikmati manisnya kue khas Ponorogo seperti klepon dan srabi, penutup yang sempurna.",
    },
  ];

  const listEvent = [
    {
      imageList: catering,
      title: "Catering",
      text: "",
    },
    {
      imageList: event,
      title: "BBQ Night",
      text: "",
    },
    {
      imageList: birthday,
      title: "Celebrations",
      text: "",
    },
    // {
    //   imageList: wedding,
    //   title: "Wedding",
    //   text: "",
    // },
  ];

  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        {/* Hero */}
        <Box
          // ref={sectionHome}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url(${backgroundImage})`,
            width: "100%",
            minHeight: "750px",
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
              variant="h2"
              sx={{
                fontFamily: "Playfair Display",
                // color: "white",
                fontWeight: 600,
                letterSpacing: 5,
              }}
            >
              <TypeAnimation
                sequence={[
                  "Cita Rasa Ponorogo Rasakan Sensasinya!",
                  2000,
                  "Selamat datang di Rumah Makan Ponorogo!",
                  2000,
                  "Rasakan sensasi kuliner Ponorogo dalam setiap suapan",
                  3000,
                ]}
                wrapper="span"
                // speed={1}
                deletionSpeed={50}
                speed={{ type: "keyStrokeDelayInMs", value: 250 }}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </Typography>
            <p
              data-aos="fade-up"
              data-aos-delay={200}
              className="text-xl text-[#2C2F24] font-semibold py-10"
            >
              Selamat datang di Rumah Makan Ponorogo! dan Rasakan sensasi
              kuliner Ponorogo dalam setiap suapan.
            </p>
            <Box
              data-aos="fade-up"
              data-aos-delay={400}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {/* book table */}
              <Button
                onClick={() => handleNavigate("/menu")}
                className="bg-[#AD343E!important] hover:shadow-xl"
                sx={{
                  padding: "20px 32px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
                variant="contained"
                color="primary"
              >
                Book A Menu
              </Button>
              <Button
                onClick={() => handleNavigate("/contact")}
                className="bg-[white!important] hover:shadow-xl"
                sx={{
                  padding: "20px 32px",
                  borderRadius: "999px",
                  border: "none",
                  fontWeight: "600",
                  color: "#2C2F24",
                  textTransform: "none",
                }}
                variant="outlined"
                color="primary"
              >
                <MyLocationIcon />
                <span className="pl-2">Location</span>
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
            data-aos="fade-up"
            data-aos-delay={300}
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
              padding: "2rem 0 2rem 0",
            }}
          >
            Browse Our Menu
          </Typography>
          {/* Grid*/}
          <Grid2
            data-aos="zoom-in"
            data-aos-delay={300}
            container
            spacing={2} // Adds spacing between grid items
            sx={{
              marginTop: 4,
              justifyContent: "center",
            }} // Adds margin at the top of the grid container
            gap={10}
          >
            {/* Loop through the items to display multiple cards */}
            {/* {Array.from(Array(4)).map((_, index) => ( */}
            {listIcon.map((icon, index) => (
              <Grid2
                onClick={() => handleNavigate("/menu")}
                item
                // xs={2} // Full width on mobile
                // sm={6} // 50% width on small screens (tablets)
                // md={3} // 25% width on medium and larger screens (desktops)

                sx={{
                  // Ensure that each item will not shrink
                  minWidth: "300px", // Set a minimum width for each item to prevent shrinking
                }}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 4,
                  xl: 2,
                }}
                key={index}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: 345,
                    margin: " 0 auto",
                    boxShadow: 3,
                    borderRadius: 100,
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
                      borderRadius: "80px",
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
                    <Typography
                      sx={{
                        fontWeight: "600",
                      }}
                      variant="h5"
                      component="div"
                    >
                      {icon.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="body2"
                      color="text.secondary"
                      padding="1rem 0"
                    >
                      {icon.text}
                    </Typography>

                    {/* Button */}
                    <Button
                      sx={{
                        bgcolor: "white",
                        color: "#AD343E",
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                      size="small"
                      variant="contained"
                      color="primary"
                    >
                      Explore Menu
                    </Button>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        {/* visit us */}
        <Container maxWidth="xl">
          <Box
            sx={{
              height: "600px",
              padding: "2rem",
              margin: "5rem 0",
            }}
          >
            <div
              data-aos="fade-left"
              data-aos-delay={400}
              className="grid grid-cols-2 max-xl:grid-cols-1 max-xl:overflow-y-auto bg-[#F9F9F7] h-full hover:shadow-xl duration-300 ">
              {/* col-1 */}
              <div className="relative">
                <img
                  className=" border border-black object-cover w-full h-full rounded-lg  "
                  src={image_2}
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
                  Kami menyediakan makanan sehat untuk keluarga Anda
                </Typography>
                <p className="text-[#2C2F24] font-semibold">
                  Cerita kami dimulai dengan visi untuk menciptakan pengalaman
                  bersantap yang unik yang menggabungkan hidangan berkualitas,
                  pelayanan luar biasa, dan suasana yang hidup. Berakar pada
                  budaya kuliner yang kaya di Ponorogo, kami bertujuan untuk
                  menghormati akar lokal kami sambil memadukan cita rasa global.
                </p>
                <p>
                  Di tempat ini, kami percaya bahwa bersantap bukan hanya
                  tentang makanan, tetapi juga tentang pengalaman secara
                  keseluruhan. Staf kami, yang dikenal dengan kehangatan dan
                  dedikasinya, berusaha untuk menjadikan setiap kunjungan
                  sebagai acara yang tak terlupakan.
                </p>
              </div>
            </div>
          </Box>
        </Container>
        {/* offer event */}
        <Box>
          {/* Title */}
          <Typography
            data-aos="fade-up-right"
            data-aos-delay={400}
            variant="h3"
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
              padding: "25px 25px",
            }}
          >
            Menawarkan berbagai event yang menarik
          </Typography>
          <Grid2
            py={"2.5rem"}
            container
            spacing={2} // Adds spacing between grid items
            justifyContent="center" // Centers the items horizontally
            gap={10}
          >
            {/* {Array.from(Array(4)).map((_, index) => ( */}
            {listEvent.map((event, index) => (
              <Grid2
                key={index}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 2,
                }}
              >
                <Card
                  data-aos="fade-down"
                  data-aos-delay={`${index+2}00`}
                  sx={{
                    transition: "transform 300ms ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      minHeight: "290px",
                      objectFit: "cover",
                      // padding: "1rem",
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
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        {/* fast food as parent */}

        <Box
          sx={{
            display: "flex",
            flexDirection: (theme) => ({
              xs: "column-reverse", // On small screens (less than 600px), flexDirection will be column-reverse
              sm: "row", // Background color will be red when screen width is 600px or above
            }),
            backgroundColor: "#F9F9F7",
            padding: "1rem",
            margin: "3rem 0",

            justifyContent: "center",
            border: "1px solid red ",
          }}
        >
          {/* coulumn-1 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex max-lg:flex-col p-4 gap-4">
            {/* coulumn-1.1 */}
            <div className="border border-blue-500 rounded-xl">
              <img
                className="max-w-[600px] object-cover h-full"
                src={image_3}
                alt=""
              />
            </div>
            {/* coulumn-1.2 */}
            <div className="flex flex-col gap-4 max-sm:max-w-[27rem]">
              <img
                className="max-w-[290px] object-cover max-lg:max-w-full  rounded-xl   max-h-[333px]"
                src={image_4}
                alt=""
              />
              <img
                className="max-w-[290px] object-cover  max-lg:max-w-full  rounded-xl  h-full"
                src={image_5}
                alt=""
              />
            </div>
          </div>
          {/* coulumn-2 */}
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="border border-purple-500 flex items-center">
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
                Menyajikan makanan lezat
              </Typography>

              <p className="">
                Warung Ponorogo menyajikan makanan lezat dengan layanan
                pengantaran tercepat di kota, siap memuaskan selera Anda!
              </p>
              <ul className="space-y-3 font-semibold">
                <li>
                  <DeliveryDiningIcon /> Siap antar pesanan
                </li>
                <li>
                  <MonetizationOnIcon /> Harga terjangkau
                </li>
                <li>
                  <WhatsAppIcon /> Whatsap Online
                </li>
              </ul>
            </div>
          </div>
        </Box>
        {/* our customer */}
        {/* <Customer /> */}
      </Container>
    </>
  );
};
export default Home;
