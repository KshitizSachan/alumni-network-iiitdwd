import { BorderButton } from "../Buttons";
import { Grid, Typography, Button, Avatar } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";

const AlumniCard = (props) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems={"center"}
        className="p-4 shadow-md rounded-md"
      >
        <Grid item container xs={12} sm={9}>
          <Grid item xs={12} sm={3}>
            <Avatar
              src="https://picsum.photos/536/354"
              alt={props.name}
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={1} direction={"column"}>
              <Grid item>
                <Typography variant="h5" fontWeight="bold">
                  {props.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {props.batch} || {props.branch}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  {props.position} || at {props.company}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={3}>
          <Grid item xs={12}>
            <NavLink to={`/profile?view=${props.userId}`}>
            <Button
              variant="outlined"
              fullWidth
              style={{
                backgroundColor: 'white',
                borderColor: "#FA005E",
                color: "#FA005E",
                height: "50px",
                fontWeight: 600,
                fontSize: "1em",
                textTransform: "capitalize"
              }}
            >
              View Profile
            </Button>
            </NavLink>
            
            {/* <div className=" col-span-2 row-span-4 justify-center place-items-center row-start-1 flex">
              <BorderButton name="View Profile" />
            </div> */}
          </Grid>
        </Grid>
      </Grid>

      <div className="flex md:hidden justify-end">
        <div className="p-4 shadow-md rounded-md grid grid-cols-6 grid-rows-5 gap-x-3">
          <div className="row-start-1 col-span-2 row-span-5">
            <img
              src="https://picsum.photos/536/354"
              alt={props.name}
              className="row-start-1 col-span-2 row-span-4 h-16 w-28 rounded-full"
            />
            <div className="flex place-items-end">
              <BorderButton name="Profile" />
            </div>
          </div>

          <div className="row-start-1 col-start-3 col-span-4 row-span-5">
            <p className=" text-lg font-semibold"> {props.name}</p>
            <p className=" font-thin text-sm"> {props.batch}</p>
            <p className=" font-thin text-sm"> {props.branch}</p>
            <p className=" font-thin text-sm"> {props.position}</p>
            <p className=" font-thin text-sm"> {props.company}</p>
          </div>

          {/* <div className="col-span-2 row-span-4 justify-center place-items-center row-start-1 flex">
           <BorderButton name="View Profile" />
           <div /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default AlumniCard;
