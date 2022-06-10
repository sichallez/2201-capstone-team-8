import React from "react";
import { connect } from "react-redux";
import { Box, Paper, InputBase, InputLabel } from "@mui/material";
import { Divider } from "@mui/material";

const UserProfile = ({ auth }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "60%",
        height: "350px",
        justifyContent: "space-around",
        margin: "20px auto",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          border: 1,
          borderColor: "#f4eee0",
          backgroundColor: "#f4eee0"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <h4
            style={{
              font: "Abril Fatface",
              margin: "0.5rem",
            }}
          >
            Personal Information
          </h4>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: "0.5rem",
            }}
          >
            <Box>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{
                  marginTop: "1rem",
                  marginLeft: "0.5rem",
                }}
              >
                User Name
              </InputLabel>
              <InputBase defaultValue={auth.username} id="bootstrap-input" />
            </Box>
            <Box>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{
                  marginTop: "1rem",
                }}
              >
                Email
              </InputLabel>
              <InputBase defaultValue={auth.email} id="bootstrap-input" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: "0.5rem",
            }}
          >
            <Box>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{
                  marginTop: "1rem",
                  marginLeft: "0.5rem",
                }}
              >
                Date of Birth
              </InputLabel>
              <InputBase
                defaultValue={auth.DOB.slice(0, 10)}
                id="bootstrap-input"
              />
            </Box>
            <Box>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{
                  marginTop: "1rem",
                  marginLeft: "0.5rem",
                }}
              >
                Shipping Address
              </InputLabel>
              <InputBase defaultValue={auth.address} id="bootstrap-input" />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

const mapState = ({ auth }) => {
    return { auth };
  };

export default connect(mapState)(UserProfile);
