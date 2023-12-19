import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AddIcon from '@mui/icons-material/Add';
import ModalPanel from "../../shared/Modal";
import { useNavigate } from 'react-router-dom';

let itemsArray = [
  {
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />
  },
  {
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlinedIcon />
  },
  {
    title: "Line chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />
  },
  {
    title: "Geography chart",
    to: "/geography",
    icon: <MapOutlinedIcon />
  },
  {
    title: "Contact me",
    to: "/form",
    icon: <PersonOutlinedIcon />
  },
  {
    title: "New Page",
    icon: <AddIcon />,
    to: ""
  }
]

const Item = ({ 
  title,
  to,
  icon, 
  selected, 
  setSelected, 
  pushNewPage 
}) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();

  const setNewTitle = (e, name, type) => {
    let obj = {
      title: name,
      to: `/${type}/${name}`,
      // icon: <AddIcon />
    };
    pushNewPage(obj);
    setSelected(name);
    navigate(`/${type}/${name}`)
  }

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => {
        if (!to) {
          setIsOpenModal(true);
        }
        else {
          setSelected(title)}
        }
      }
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
      {isOpenModal ? 
        <ModalPanel
          isOpen={isOpenModal}
          setNewTitle={setNewTitle}
          setIsOpen={setIsOpenModal}
        /> :
        null
      }
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const [items, setItems] = useState(itemsArray);

  const pushNewPage = (obj) => {
    items.push(obj);
    setItems(items);
  }

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  WLB
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="120px"
                  height="100px"
                  src={`../../assets/maybel.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Aynur 
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            {items.map(el => (
                <Item 
                  {...el}
                  pushNewPage={pushNewPage}
                  selected={selected}
                  setSelected={setSelected}
                  showModal={el?.showModal}
                />
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
