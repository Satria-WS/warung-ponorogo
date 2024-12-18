import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Divider,

} from "@mui/material";

const Customer = () => {
  return (
    <>
         <Box
          sx={{
            padding: "2rem 1rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              textAlign: "center",
            }}
            variant="h3"
            component="h3"
          >
            What Our Customer Say
          </Typography>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 place-items-center max-w-[78rem] mx-auto py-10 gap-3">
            {Array.from(Array(3)).map((_, index) => (
              <>
                <Card
                  sx={{
                    backgroundColor: "#F9F9F7",
                    maxWidth: "400px",
                  }}
                >
                  <CardContent
                    sx={{
                      padding: "1rem 2rem",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#AD343E",
                      }}
                      variant="h4"
                      component="h4"
                    >
                      “The best restaurant”
                    </Typography>
                    <p className="py-4">
                      Last night, we dined at place and were simply blown away.
                      From the moment we stepped in, we were enveloped in an
                      inviting atmosphere and greeted with warm smiles.
                    </p>
                  </CardContent>
                  <Divider />
                  <CardHeader
                    avatar={
                      <Avatar
                        alt="Remy Sharp"
                        src="https://pasa.org/wp-content/uploads/2021/06/Vervet-Monkey-Foundation-credit-Kyle-.jpg"
                      />
                    }
                    title="Monkey"
                    subheader="Update place"
                  />
                </Card>
              </>
            ))}
          </div>
        </Box>
    </>
  )
}
export default Customer