import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BookIcon from '@mui/icons-material/Book';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Header from "../../components/Header";
import StatBox from "../../shared/StatBox";
import TodoList from "../todoList";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import GridHeader from "../../shared/GridHeader";

const Main = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Work-Life balance" subtitle="Welcome to your organized life"/>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridRow={"100px 200px" }
        gap="20px"
      >
        {/* Row 1 */}
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridArea="water"
          gridColumn="span 4"
          borderRadius="5px"
        >
          {/* quantity of water */}
          <StatBox
            title="0"
            subtitle="Water amount was drank"
            progress="0.75"
            increase="14%"
            icon={
              <WaterDropIcon
                sx={{ color: colors.blueAccent[600], fontSize: "40px"}}
              />
            }
          />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridArea="yoga"
          gridColumn="span 4"
          borderRadius="5px"
        >
          {/* yoga time */}
          <StatBox
            title="0"
            subtitle="Yoga timing"
            progress="0.50"
            increase="+21%"
            icon={
              <SelfImprovementIcon
                sx={{ color: colors.blueAccent[600], fontSize: "40px"}}
              />
            }
          />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridArea="books"
          gridColumn="span 4"
          borderRadius="5px"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <BookIcon
                sx={{ color: colors.blueAccent[600], fontSize: "40px"}}
              />
            }
          />
        </Box>

        {/* Row 2 */}
        <Box 
          gridColumn="span 6"
          gridRow="span 4"
        >
          <GridHeader title="Calendar"/>
          <FullCalendar 
            // height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
          />
        </Box>
        {/* Daily calendar */}
          <Box 
            display="flex"
            flexDirection="column"
            borderRadius="3px"
            gridColumn="span 6"
            gridRow="span 4"
          >
            <TodoList />
          </Box>
      </Box>
    </Box>
  );
};

export default Main;
