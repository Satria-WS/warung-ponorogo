import {
  Container,
  Box,
  Typography,
  CssBaseline,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Grid2,
  CardHeader,
  Avatar,
  Divider,
  Tab,
  Tabs,
  Slide,
} from "@mui/material";
// importing tab
// import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import * as React from "react";



// import menu list
//breakfast
import ayamKatsu from "../../assets/menu/ayamKatsu.png";
import burger from "../../assets/menu/burger.png";
import kentang from "../../assets/menu/kentang.png";
import sandwich from "../../assets/menu/sandwich.png";

//mainDishes
import sateAyam from "../../assets/menu/sateAyam.png";
import ayamBakar from "../../assets/menu/ayamBakar.png";
import ayamPenyet from "../../assets/menu/ayamPenyet.png";
import ayamKremes from "../../assets/menu/ayamKremes.png";

// minuman
import tehPoci from "../../assets/menu/tehPoci.png";
import esJeruk from "../../assets/menu/esJeruk.png";
import esJerukBiji from "../../assets/menu/esJerukBiji.png";


//dessert
import cake from "../../assets/menu/cake.png";
import pudding from "../../assets/menu/pudding.png";

const Menu = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const filteredMenu = (type: string) => {
    if (type === "All") {
      return menuList; // Return all items if "All" is selected
    }
    return menuList.filter((item) => item.type === type); // Filter by type (Breakfast, Main Dishes, Drinks, Desserts)
  };

  const menuList = [
 //breakfast
    {
      image: ayamKatsu,
      price: "25000",
      name: "Ayam Katsu",
      text: "Ayam tepung renyah dengan saus khas, pilihan sempurna untuk sarapan yang memuaskan.",
      type: "Breakfast",
    },
    {
      image: burger,
      price: "10000",
      name: "Burger",
      text: "Burger lezat dengan daging pilihan dan sayuran segar, siap menemani pagi Anda.",
      type: "Breakfast",
    },
    {
      image: kentang,
      price: "20000",
      name: "Kentang",
      text: "Kentang goreng renyah dengan bumbu spesial, cocok sebagai teman sarapan Anda.",
      type: "Breakfast",
    },
    {
      image: sandwich,
      price: "10000",
      name: "Sandwich",
      text: "Sandwich dengan isian segar dan gurih, pas untuk sarapan ringan yang penuh energi.",
      type: "Breakfast",
    },
 //mainDishes
    {
      image: sateAyam,
      price: "34000",
      name: "Sate Ayam",
      text: "Sate ayam dengan bumbu kacang khas, rasanya gurih dan menggugah selera.",
      type: "Main Dishes",
    },
 
    {
      image: ayamBakar,
      price: "35000",
      name: "Ayam Bakar",
      text: "Ayam bakar dengan bumbu rempah yang kaya rasa, cocok untuk makan siang atau malam.",
      type: "Main Dishes",
    },
    {
      image: ayamPenyet,
      price: "25000",
      name: "Ayam Penyet",
      text: "Ayam penyet dengan sambal pedas yang menggigit, memberikan rasa yang pedas dan nikmat.",
      type: "Main Dishes",
    },
    {
      image: ayamKremes,
      price: "28000",
      name: "Ayam Kremes",
      text: "Ayam kremes dengan lapisan renyah yang gurih, berpadu sempurna dengan sambal khas.",
      type: "Main Dishes",
    },

   // minuman
    {
      image: tehPoci,
      price: "5000",
      name: "Teh Poci",
      text: "Teh poci yang menyegarkan, cocok untuk menemani waktu santai Anda..",
      type: "Drinks",
    },
    {
      image: esJeruk,
      price: "7000",
      name: "Es Jeruk",
      text: "Es jeruk segar dengan rasa manis alami, sempurna untuk menyegarkan tenggorokan.",
      type: "Drinks",
    },
    {
      image: esJerukBiji,
      price: "8000",
      name: "Es Jeruk Biji Selasih",
      text: "Es jeruk dengan tambahan biji selasih yang memberikan sensasi unik dan segar.",
      type: "Drinks",
    },
    // dessert
    {
      image: cake,
      price: "5000",
      name: "Cake",
      text: "Kue lembut dengan berbagai rasa, sempurna untuk menutup hidangan Anda dengan manis.",
      type: "Desserts",
    },
    {
      image: pudding,
      price: "5000",
      name: "Pudding",
      text: "Puding manis dan lembut, pilihan tepat untuk makanan penutup yang ringan dan menyegarkan.",
      type: "Desserts",
    },
  ];

  const sectionMenu = React.useRef<HTMLHeadingElement | null>(null);

  React.useEffect(() => {
    // When the component mounts, check if the ref is available and scroll to it
    if (sectionMenu.current) {
      const offset = 200; // Offset to ensure the section is not at the very top
      const position = sectionMenu.current.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth", // Smooth scrolling
      });
    }
  }, []);
  return (
    <>
      <CssBaseline />
      {/* title */}
      <Container maxWidth="xl">
        <Box ref={sectionMenu} sx={{ padding: "3rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
            }}
          >
            Our Menu
          </Typography>
          <p className="text-center py-3 max-w-[500px] mx-auto">
            Menu kami menawarkan hidangan lezat, sehat, khas Ponorogo, dan
            beragam pilihan.
          </p>
        </Box>
      </Container>
      {/* tab */}
      <Container maxWidth="xl">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: 1,
                borderColor: "divider",
                padding: "1rem 0",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
                sx={{
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                  "& .MuiTab-root": {
                    fontFamily: "DM Sans",
                    color: "#2C2F24",
                    marginRight: "10px",
                    fontWeight: 700,
                    borderRadius: 50,
                    border: "1px solid #DBDFD0",
                    textTransform: "none",
                    padding: "8px 16px",
                    minHeight: "auto",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#CD2026",
                    color: "#fff !important",
                    border: "none",
                  },
                }}
              >
                {["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"].map(
                  (item, index) => (
                    <Tab
                      sx={{
                        fontFamily: "DM Sans",
                        color: "#2C2F24",
                        marginRight: "10px",
                        fontWeight: 700,
                        borderRadius: 50,
                        border: "1px solid #DBDFD0",
                        textTransform: "none",
                      }}
                      key={index}
                      label={item}
                      value={`${index + 1}`}
                    />
                  )
                )}
              </Tabs>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                placeContent: "center",
                p: 3,
                "@media(max-width:1280px)": {
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                },
                "@media(max-width:1024px)": {
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                },
                "@media(max-width:640px)": {
                  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                },
              }}
            >
              {filteredMenu(
                value === "1"
                  ? "All"
                  : value === "2"
                  ? "Breakfast"
                  : value === "3"
                  ? "Main Dishes"
                  : value === "4"
                  ? "Drinks"
                  : "Desserts"
              ).map((item, index) => (
                <>
                  <TabPanel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    key={index}
                    value={value}
                  >
                    <Card
                      sx={{
                        maxWidth: "18rem",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translate(0,-10px)",
                        },
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "100%",
                          height:"250px"
                        }}
                        component="img"
                        image={item.image}
                        alt={item.name}
                      />
                      <CardContent className="text-center space-y-2">
                        <Typography
                          sx={{
                            color: "#AD343E",
                            fontWeight: 700,
                          }}
                          variant="h6"
                          component="div"
                        >
                          {item.price}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "DM Sans",
                            fontWeight: 700,
                          }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </TabPanel>
                </>
              ))}
              {/* {value === "1" && (
                <TabPanel value="1">
                  <img
                    className="w-80 "
                    src="https://ichef.bbci.co.uk/news/1024/branded_news/7614/production/_105482203__105172250_gettyimages-857294664.jpg"
                    alt=""
                  />
                  <Typography variant="body2" color="text.secondary">
                    Made with eggs, lettuce, salt, oil and other ingredients.
                  </Typography>
                </TabPanel>
              )}
              {value === "2" && (
                <TabPanel value="2">
                  <img
                    className="w-80"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYjDM2cqjRSUszBGdjCv1GIU3XPv88UjQEA&s"
                    alt=""
                  />
                  <Typography variant="body2" color="text.secondary">
                    Made with eggs, lettuce, salt, oil and other ingredients.
                  </Typography>
                </TabPanel>
              )} */}
            </Box>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};
export default Menu;
