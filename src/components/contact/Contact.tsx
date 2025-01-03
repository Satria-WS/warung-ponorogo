import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Icon,
  CssBaseline,
} from "@mui/material";
import "./contact.css";
import { useRef, useState, FormEvent, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import email
import emailjs from "@emailjs/browser";
// import logoP from "../../assets/logo/logo-ponorogo.svg";
// import logo_1 from "../../assets/logo/ponorogo-1.png";
// import logo_2 from "../../assets/logo/ponorogo-2.png";

// import material Icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

// import mediasocial
import goFood from "../../assets/logo/logo-goFood.svg";
import whatsap from "../../assets/logo/logo-whatsap.svg";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null); // Type the form reference as HTMLFormElement
  const [status, setStatus] = useState<string | null>(null);
  const location = useLocation();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      setStatus("Form reference is missing");
      return;
    }

    // Accessing form elements by their name attribute
    const formElements = form.current.elements as HTMLFormControlsCollection;
    const name = (formElements.namedItem("name") as HTMLInputElement)?.value;
    const email = (formElements.namedItem("email") as HTMLInputElement)?.value;
    const subject = (formElements.namedItem("subject") as HTMLInputElement)
      ?.value;
    const message = (formElements.namedItem("message") as HTMLTextAreaElement)
      ?.value;

    // Validate the form fields
    if (!name || !email || !subject || !message) {
      setStatus("All fields are required.");
      return;
    }

    // Send email with emailjs
    emailjs
      .sendForm(
        "service_d7g80ti", // Your EmailJS Service ID
        "template_rmw4f5c", // Your EmailJS Template ID
        form.current, // The reference to the form element
        "C9K36uwheVoFbeM2A" // Your EmailJS User ID (this is the public key now)
      )
      .then(
        (result) => {
          console.log("succes", result.text);
          setStatus("Message sent succesfull");
          form?.current?.reset(); // clear form input
        },
        (error) => {
          console.log("failed...", error.text);
          setStatus("Error sending message. Please try again later.");
        }
      );
  };

  // Create refs for each chapter
  // const sectionLocation = useRef(null);
  // // Scroll function to smooth scroll with an offset
  // const scrollToChapter = (ref: any) => {
  //   const offset = 100; // offset distance from the top
  //   const position = ref.current.offsetTop - offset;

  //   window.scrollTo({
  //     top: position,
  //     behavior: "smooth",
  //   });
  // };

  const sectionLocation = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // When the component mounts, check if the ref is available and scroll to it
    if (sectionLocation.current) {
      const offset = 100; // Offset to ensure the section is not at the very top
      const position = sectionLocation.current.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth", // Smooth scrolling
      });
    }
  }, []);

  // contact List
  const contactList = [
    {
      icon: PhoneIcon,
      title: "Phone",
      telp: "+6281280807385",
    },
    {
      icon: EmailIcon,
      title: "Email",
      email: "rms.ponorogo21@gmail.com",
    },
    {
      icon: PlaceIcon,
      title: "Place",
      address:
        "Jalan Sawangan Permai RT, RT.7RT.1/RW.9, Sawangan Baru, Kec. Sawangan, Kota Depok, Jawa Barat 16511",
    },
  ];

  // button function click
  const handleLink = (link: string) => {
    // open link browser
    window.open(link);
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        {/* <button onClick={() => scrollToChapter(sectionLocation)}>
          Jump to Chapter 4
        </button> */}
        <Box py="3rem">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
          <p className="max-w-[500px] mx-auto text-center py-5">
            Hubungi kami di Nomor Telepon/WhatsApp +62 812-8080-7385 atau email
            rms.ponorogo21@gmail.com untuk reservasi dan informasi lebih lanjut.
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
              marginLeft: "calc(-50vw + 50%)",
              width: "100vw",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor:
                status.includes("Error") ||
                status === "All fields are required."
                  ? "#f44336"
                  : "#4caf50", // Set red for error or missing fields
              color: "white",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            {status}
          </Box>
        )}

        <Box
          ref={sectionLocation}
          component="div"
          sx={{ textAlign: "center", padding: "7rem 2rem 4rem 2rem" }}
        >
          <Typography
            //  component='a'
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              marginBottom: "1.5rem", // Adds space below the title
            }}
          >
            <span>Location</span>
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "300px", sm: "500px" }, // Makes iframe responsive
              borderRadius: "8px",
              overflow: "hidden", // Ensures the border radius is applied
              boxShadow: 2, // Adds a subtle shadow for better appearance
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d700.9025114861278!2d106.77597848830102!3d-6.406482678745308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d-6.4065806!2d106.7763737!4m5!1s0x2e69e9ee4b13fa51%3A0xd886d79c40eca645!2sJalan%20Sawangan%20Permai%20RT%2C%20RT.7RT.1%2FRW.9%2C%20Sawangan%20Baru%2C%20Kec.%20Sawangan%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016511!3m2!1d-6.406599!2d106.77631989999999!5e0!3m2!1sid!2sid!4v1733928692807!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Map Location"
              id="location"
            />
          </Box>
        </Box>
        {/* parent */}
        <Box py="2rem">
          {/* child */}
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-y-8">
            {/* col1 */}

            {contactList.map((item, index) => (
              <>
                <Box
                  display="flex"
                  alignItems="center"
                  justifySelf="center"
                  sx={{
                    "@media(max-width:1280px)": {
                      // backgroundColor: "red",
                      justifySelf: "start",
                    },
                  }}
                >
                  <Icon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "auto",
                      height: "auto",
                      padding: "5px",
                      bgcolor: "#D91E15",
                      color: "white",
                      borderRadius: "10%",
                    }}
                  >
                    <item.icon fontSize="large" />
                  </Icon>
                  <Box ml={2}>
                    <p className="text-lg font-medium tracking-wider text-gray-500">
                      {item.title}
                    </p>
                    {item.telp && (
                      <p className="text-lg font-medium tracking-widest">
                        {item.telp}
                      </p>
                    )}
                    {item.email && (
                      <p className="text-lg font-medium tracking-widest">
                        {item.email}
                      </p>
                    )}
                    {item.address && (
                      <p className="text-sm font-medium tracking-widest">
                        {item.address}
                      </p>
                    )}
                  </Box>
                </Box>
              </>
            ))}
            {/* transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translate(0,-10px)",
                    }, */}
            {/* col2 */}
            <div
              onClick={() =>
                handleLink(
                  "https://gofood.co.id/jakarta/restaurant/warung-ponorogo-5912a9a5-d9bd-482b-86de-b42291b22576"
                )
              }
              className=" px-16 max-xl:col-span-1 hover:-translate-y-3  duration-300 cursor-pointer"
            >
              <div className="bg-red-600 h-full flex items-center justify-center py-10 shadow-xl rounded-2xl ">
                <img className="w-[100px]" src={goFood} alt="goFood" />
              </div>
            </div>
            {/* col3 */}
            <div
              onClick={() =>
                handleLink(
                  "https://api.whatsapp.com/send/?phone=%2B6281280807385&text&type=phone_number&app_absent=0"
                )
              }
              className="  px-16 hover:-translate-y-3 duration-300 cursor-pointer"
            >
              <div className="bg-white h-full flex items-center justify-center py-10 shadow-xl rounded-2xl">
                <img className="w-[100px]" src={whatsap} alt="goFood" />
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};
export default Contact;
