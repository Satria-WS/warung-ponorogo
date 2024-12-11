import { Box, Container, Typography, TextField, Button } from "@mui/material";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
          <p className="max-w-[500px] mx-auto text-center">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </Box>
        {/* form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "2rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0px 2.979px 59.574px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="w-full flex justify-between gap-3">
            <TextField
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
              placeholder="Enter your name"
              color="grey"
              // sx={{
              //   "& .MuiInputLabel-root": {
              //     color: "purple", // Label color
              //   },
              //   "& .MuiOutlinedInput-input": {
              //     color: "orange", // Change to your desired text color
              //   },

              //   "& .MuiOutlinedInput-root": {
              //     "& fieldset": {
              //       borderColor: "blue", // Change to desired border color
              //     },
              //     "&:hover fieldset": {
              //       borderColor: "green", // Change to color when hovered
              //     },
              //     "&.Mui-focused fieldset": {
              //       borderColor: "red", // Change to color when focused
              //     },
              //   },
              // }}
            />
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter email address"
            />
          </div>

          <TextField
            fullWidth
            name="subject"
            label="Subject"
            variant="outlined"
            placeholder="Write a subject"
          />
          <TextField
            fullWidth
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Write your message"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: "100%",
              maxWidth: "200px",
              backgroundColor: "#CD2026",
              "&:hover": {
                backgroundColor: "#a51920",
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default Contact;
