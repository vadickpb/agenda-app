import { useDispatch } from "react-redux";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {TurnedInNot} from '@mui/icons-material'
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";

const SideBarItem = ({ title= '' , body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch()
  const note = {id, title, body, date, imageUrls}

  const newTitle = useMemo( () => {
    return title.length > 15
      ? title.substring(0, 17)+'...'
      : title
  },[title])

  return (
  <ListItem disablePadding>
    <ListItemButton onClick={() => dispatch(setActiveNote(note))}>
      <ListItemIcon>
        <TurnedInNot />
      </ListItemIcon>
      <Grid container>
        <ListItemText primary={newTitle} />
        <ListItemText secondary={body} />
      </Grid>
    </ListItemButton>
  </ListItem>);
}

export default SideBarItem;