import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
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
      title: "Masakakan Beragam",
      text: "Kami menawarkan beragam pilihan masakan lezat, dari hidangan tradisional Ponorogo hingga menu modern, memenuhi selera semua pengunjung.",
    },
    {
      icon: icon_2,
      title: "Mudah Order",
      text: "Pesan makanan kami dengan mudah melalui berbagai platform, baik langsung di tempat atau layanan pesan antar online yang cepat.",
    },
    {
      icon: icon_3,
      title: "Pengiriman Cepat",
      text: "Nikmati makanan favorit Anda dengan pengiriman cepat dan aman, memastikan hidangan sampai dalam kondisi segar dan siap dinikmati.",
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

  const sectionAbout = useRef(null);

  useEffect(() => {
    // When the component mounts, check if the ref is available and scroll to it
    if (sectionAbout.current) {
      const offset = 200; // Offset to ensure the section is not at the very top
      const position = sectionAbout.current.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth", // Smooth scrolling
      });
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          data-aos="fade"
          data-aos-delay="200"
          ref={sectionAbout}
          sx={{ padding: "3rem" }}
        >
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
            Kami menyajikan hidangan khas Ponorogo dengan layanan terbaik,
            menggabungkan cita rasa lokal dan atmosfer yang hangat untuk Anda.
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
          <div
            data-aos="fade"
            data-aos-delay="400"
            className="relative space-y-5 p-16"
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Playfair Display",
              }}
            >
              Kami menyediakan makanan sehat untuk keluarga
            </Typography>
            <p className="text-[#2C2F24] font-semibold">
              Kisah kami dimulai dengan visi untuk menciptakan pengalaman makan
              yang unik, menggabungkan hidangan khas Ponorogo, layanan istimewa,
              dan suasana yang nyaman. Berakar pada budaya kuliner Ponorogo yang
              kaya, kami berkomitmen untuk menghormati warisan lokal sambil
              menyajikan makanan sehat dan bergizi untuk seluruh keluarga. Kami
              percaya bahwa makanan yang enak dan sehat bisa dinikmati oleh
              siapa saja, kapan saja.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              harum ea consequuntur quia voluptas deserunt assumenda cumque,
              deleniti perferendis? Unde laboriosam magnam minus odio repellat
              beatae illum totam perferendis, praesentium reprehenderit et iste
              soluta aliquid nobis neque doloribus at obcaecati voluptas, ipsum
              earum corporis. Ratione nisi quisquam, rem quos tempore fugiat
              eveniet nobis exercitationem nam a iure incidunt nostrum vel
              perferendis? Ducimus pariatur voluptatibus doloribus numquam
              sapiente eum tempore vero? Obcaecati, esse veniam maxime error
              inventore molestias accusamus dolorum ut enim unde iure debitis
              rerum. Quisquam officiis dolore porro in sed? Laborum libero
              perferendis ipsam error dolor nihil odio et.
            </p> */}
          </div>
        </div>
      </Container>
      <Container style={{ paddingLeft: 0, paddingRight: 0 }} maxWidth={false}>
        <Box
          data-aos="fade"
          data-aos-delay="600"
          component="div"
          alt="picture"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100% ",
            backgroundSize: "cover",
            backgroundImage: `url(${image_2})`,
            fontFamily: "Playfair Display",
            color: "white",
            padding: "18rem 10rem 18rem 10rem",
            textAlign: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* svg play button playlist */}
          {/* <Button
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
          </Button> */}
          {/* title */}

          <Typography
            variant="h3"
            sx={{
              fontFamily: "Playfair Display",
              paddingTop: "2rem",
              letterSpacing: "10px",
            }}
          >
            Rasakan cita rasa original dari kami
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
                  <div className="text-darkGray text-justify">{item.text}</div>
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
              Sedikit Informasi untuk Tamu Kami yang Terhormat
            </Typography>
            <p className="text-[#2C2F24] font-semibold">
              Kisah kami dimulai dengan visi untuk menciptakan pengalaman makan
              yang unik, menggabungkan hidangan khas Ponorogo, layanan istimewa,
              dan suasana yang hangat. Berakar pada budaya kuliner Ponorogo yang
              kaya, kami berkomitmen untuk menghormati warisan lokal kami sambil
              menghadirkan cita rasa yang menggugah selera.
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
                      {item.number === "79" ? " %" : null}
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
