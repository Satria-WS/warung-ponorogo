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

const Home = () => {
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
        <Box sx={{
          padding: "3rem 0"
        }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              textAlign:"center"
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
            {Array.from(Array(4)).map((_, index) => (
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
                    padding:'1.5rem'
                  }}
                >
                  {/* Card Media for Image */}
                  <CardMedia
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                    component="img"
                    image={breakfast} // Your image source
                    alt="Breakfast"
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
                      Breakfast
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
      </Container>
    </>
  );
};
export default Home;
