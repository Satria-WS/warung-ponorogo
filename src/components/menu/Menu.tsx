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
} from "@mui/material";
// importing tab
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import * as React from "react";

const Menu = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <CssBaseline />
      {/* title */}
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
            }}
          >
            Our Menu
          </Typography>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum
            soluta deserunt aut pariatur ipsa tempora suscipit sed qui
            voluptate.
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
                padding:"1rem 0 1rem 0"
              }}
            >
              <TabList onChange={handleChange}>
                {["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"].map(
                  (item, index) => (            
                      <Tab
                      sx={{
                        fontFamily: "DM Sans",
                        color:"#2C2F24",
                        marginRight: "10px",
                        fontWeight:700,
                        borderRadius: 50,
                        border: "1px solid #DBDFD0",
                        textTransform:"none"
                        }}
                        key={index}
                        label={item}
                        value={`${index + 1}`}
                      />            
                  )
                )}
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item four</TabPanel>
            <TabPanel value="5">Item five</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};
export default Menu;
