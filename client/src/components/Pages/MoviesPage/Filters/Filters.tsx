import {ChangeEvent, FC, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Box, Button, FormControl, Grid, InputBase, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import classes from './Filters.module.scss';
import Typography from "@mui/material/Typography";
import {useAppDispatch} from "../../../../app/Redux/hooks";
import {getAllMovies} from "../../../../app/Redux/moviesSlice/moviesThunks";

const Filters:FC = () => {
    const [title, setTitle] = useState<any>('');
    const dispatch = useAppDispatch();

    const onSearchHandler = (e: any) => {
        dispatch(getAllMovies( { title } ));
    }

    return (
        <Card sx={{ my: 3 }}>
            <CardContent className={classes.Filters}>
                <Typography gutterBottom variant="h5" component="div" sx={{my: 2}}>
                    Movies
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box component='div' className={classes.Search_Box}>
                            <TextField
                                label="Search"
                                id="outlined-size-small"
                                size="small"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className={classes.Search_Input}
                            />
                            <Button variant='outlined' className={classes.Btn} onClick={e => onSearchHandler(e)}>Search</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl sx={{ minWidth: '100%' }} size="small">
                            <InputLabel id="demo-select-small">Age</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value=''
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Filters;