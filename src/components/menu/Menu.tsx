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
import eggs from "../../assets/menu/eggs.png";
import pizza from "../../assets/menu/pizza.png";
import cocktail from "../../assets/menu/cocktail.png";
import cake from "../../assets/menu/cake.png";
import lemon from "../../assets/menu/lemon.png";
import icecream from "../../assets/menu/icecream.png";
import burger from "../../assets/menu/burger.png";
import waffle from "../../assets/menu/waffles.png";

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
    {
      image: eggs,
      price: "$5.99",
      name: "Scrambled Eggs",
      text: "Fluffy scrambled eggs served with toast.",
      type: "Breakfast",
    },
    {
      image: pizza,
      price: "$12.99",
      name: "Margherita Pizza",
      text: "Classic pizza with tomato, mozzarella, and basil.",
      type: "Main Dishes",
    },
    {
      image: cocktail,
      price: "$7.99",
      name: "Mango Cocktail",
      text: "Refreshing tropical mango drink with a splash of rum.",
      type: "Drinks",
    },
    {
      image: cake,
      price: "$4.99",
      name: "Chocolate Cake",
      text: "Rich and moist chocolate cake with creamy frosting.",
      type: "Desserts",
    },
    {
      image: lemon,
      price: "$3.99",
      name: "Lemonade",
      text: "Freshly squeezed lemonade, sweet and tart.",
      type: "Drinks",
    },
    {
      image: icecream,
      price: "$2.99",
      name: "Vanilla Ice Cream",
      text: "Creamy vanilla ice cream with a smooth texture.",
      type: "Dessert",
    },
    {
      image: burger,
      price: "$10.99",
      name: "Cheeseburger",
      text: "Juicy beef patty with cheese, lettuce, and tomato.",
      type: "Main Dishes",
    },
    {
      image: waffle,
      price: "$6.99",
      name: "Belgian Waffles",
      text: "Golden waffles served with syrup and whipped cream.",
      type: "Breakfast",
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
                        component="img"
                        height="140"
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
