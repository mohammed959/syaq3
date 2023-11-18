import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SyaqIcon from "../../images/Frame 21syaq-icon.svg";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { Services } from "../../data/data";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export const Nav = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={SyaqIcon} />
      </Typography>
      <Divider />

      <TextField
        id="search"
        placeholder="بحث"
        type="search"
        sx={{
          backgroundColor: "white",
          margin: "auto"
        }}
        InputProps={{
          style: {
            height: "45px",
            width: "200px",
            marginTop: 6,
            marginBottom: 6
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon sx={{ color: "black", fontSize: "30px" }} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Divider />
      <List>
        {Services.map(item => (
          <ListItem key={item.text} disablePadding>
            <Button
              key={item.text}
              component={NavLink}
              to={`${item.url}`}
              sx={{
                paddingX: 2,
                fontSize: 16,
                color: "rgba(0, 0, 0, 0.5)",
                position: "relative" // Position relative for the pseudo-element
              }}
            >
              {item.text}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ paddingX: 3, paddingY: 1, backgroundColor: "#ffffff" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              m: 1,

              borderRadius: 1,
              alignItems: "center",
              width: "100%"
            }}
          >
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <img src={SyaqIcon} />
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {Services.map(item => (
                <Button
                  key={item.text}
                  component={NavLink}
                  to={`${item.url}`}
                  sx={{
                    marginX: 4,
                    fontSize: 16,
                    color: "rgba(0, 0, 0, 0.5)",
                    position: "relative",
                    "&.active": {
                      color: "rgba(28, 119, 255, 1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        right: "-10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(28, 119, 255, 1)"
                      }
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <TextField
                id="search"
                placeholder="بحث"
                type="search"
                sx={{
                  backgroundColor: "white",
                  margin: "auto"
                }}
                InputProps={{
                  style: {
                    height: "45px"
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon sx={{ color: "black", fontSize: "30px" }} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export const SimpleNav = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar sx={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}
          >
             <Box>
              <Button
                component={NavLink}
                to="/"
                sx={{
                  marginX: 4,
                  fontSize: 16,
                  color: "rgba(0, 0, 0, 0.5)",
                  position: "relative",
                  "&.active": {
                    color: "rgba(28, 119, 255, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      right: "-10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(28, 119, 255, 1)"
                    }
                  }
                }}
              >
                الرئيسية
              </Button>
            </Box>
            <Box>
              <Button
                component={NavLink}
                to="/about"
                sx={{
                  marginX: 4,
                  fontSize: 16,
                  color: "rgba(0, 0, 0, 0.5)",
                  position: "relative",
                  "&.active": {
                    color: "rgba(28, 119, 255, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      right: "-10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(28, 119, 255, 1)"
                    }
                  }
                }}
              >
                نبذه عنا
              </Button>
            </Box>
            <Box>
              <Button
                component={NavLink}
                to="/services"
                sx={{
                  marginX: 4,
                  fontSize: 16,
                  color: "rgba(0, 0, 0, 0.5)",
                  position: "relative",
                  "&.active": {
                    color: "rgba(28, 119, 255, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      right: "-10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(28, 119, 255, 1)"
                    }
                  }
                }}
              >
                خدماتنا
              </Button>
            </Box>
            <Box>
              <Button
                component={NavLink}
                to="/contact"
                sx={{
                  marginX: 4,
                  fontSize: 16,
                  color: "rgba(0, 0, 0, 0.5)",
                  position: "relative",
                  "&.active": {
                    color: "rgba(28, 119, 255, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      right: "-10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(28, 119, 255, 1)"
                    }
                  }
                }}
              >
                تواصل معنا
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
