import { Box, Modal, Typography, useTheme, Button, Slider } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "../components/ProgressCircle";
import { useState } from "react";
import { ResponsivePie } from "@nivo/pie";

const styleContainer = {
  display: "flex",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "40vw",
  height: "30vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

const style = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  m: "20px"
}

const styleButtons = {
  display: "flex",
  justifyContent: "space-between"
}

const AnalisModal = (props) => {

  const [value, setValue] = useState(props.progress * 2);
  const data = [
    {
      "id": "drank",
      "label": "drank",
      "value": Math.round(value / 2 * 100),
      "color": "hsl(167, 70%, 50%)"
    },
    {
      "id": "remain",
      "label": "remain",
      "value": 100 - Math.round(value / 2 * 100),
      "color": "hsl(150, 70%, 50%)"
    }
  ]

  const handleClose = () => props.setShowModal(false)

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
    >
      <Box sx={styleContainer}>
        <Box sx={style}>
          <Typography>{props.title}</Typography>
          <Slider
            aria-label="Temperature"
            sx={{flex: 2}}
            value={value}
            valueLabelDisplay="auto"
            step={0.1}
            marks
            min={0.2}
            max={2}
            onChange={(e) => setValue(e.target.value)}
          />
          <Box sx={styleButtons}>
            <Button >Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
        <ResponsivePie 
          data={data}
          margin={{left: 10, right: 10}}
          width={80}
          height={100}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          enableArcLinkLabels
          borderWidth={1}
        />
      </Box>
    </Modal>
  )
}


const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    {showModal && 
      <AnalisModal 
        title={subtitle} 
        open={showModal} 
        setShowModal={setShowModal}
        progress={progress}
      />
    }
    <Box width="100%" m="20px">
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center"
      >
        {icon}
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
      <Button size="small" onClick={() => setShowModal(true)}>Learn More</Button>
    </Box>
    </>
  );
};

export default StatBox;
