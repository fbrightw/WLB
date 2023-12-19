import { useState } from "react";
import { 
    Box, 
    InputBase, 
    IconButton, 
    ListItem, 
    List, 
    ListItemButton, 
    ListItemIcon,
    Checkbox,
    ListItemText
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import GridHeader from "../../shared/GridHeader";


export default function TodoList() {

    const [value, setValue] = useState();
    const [bulletedList, setBulletedList] = useState([]);

    const add = (e) => {
        setBulletedList([...bulletedList, value]);
        setValue("");
    }

    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    const handleKeyDown = (event) => {
        console.log("enter", event.key, event.target);
        if (event.key === 'Enter') {
            add(event.target.value)
        }
    }

    return (
        <>
            <GridHeader title="To Do List" />
            <Box display="flex">
                <InputBase 
                    sx={{ ml: 2, flex: 1 }} 
                    placeholder="Write..." 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <IconButton type="button" sx={{ p: 1 }} onClick={add}>
                    <AddIcon />
                </IconButton>
            </Box>
            {/* to do list */}
            <Box>
                <List>
                    {bulletedList.map((el, i) => {
                        const labelId = `checkbox-list-label-${el}`;
                        return (
                            <ListItem key={el}>
                                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${i + 1}. ${el}`} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </>
    )
}
