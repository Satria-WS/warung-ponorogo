import { Box, Container, Typography, TextField, Button } from "@mui/material";
import "./contact.css";
import { useRef, useState,FormEvent  } from "react";
// import email
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null); // Type the form reference as HTMLFormElement
  const [status, setStatus] = useState<string | null>(null);



  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.current) {
      setStatus("Form reference is missing");
      return;
    }

    emailjs.sendForm(
      "service_o8aw3wd", // Your EmailJS Service ID
      "service_o8aw3wd",   // Your EmailJS Template ID
      form.current, // The reference to the form element
      "C9K36uwheVoFbeM2A"  // Your EmailJS User ID (this is the public key now)
    ) 
      .then(
      (result) => {
        console.log("succes", result.text);
        setStatus("Message sent succesfull");
      },
      (error) => {
        console.log("Failded...", error.text);
        setStatus("Error sending message. Please try again later.");
      }
    );
  };
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
        <form ref={form} onSubmit={sendEmail}>
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
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                textTransform: "none",
                fontFamily: "DM Sans",
                fontWeight: 700,
                width: "100%",
                padding: "1rem",
                borderRadius: "100px",
                backgroundColor: "#AD343E",
                "&:hover": {
                  backgroundColor: "#a51920",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </form>
        {/* logical error if wrong */}
        {status && (
        <Box
          sx={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: status.includes('Error') ? '#f44336' : '#4caf50',
            color: 'white',
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          {status}
        </Box>
      )}
      </Container>
    </>
  );
};
export default Contact;
