import { useTheme } from '@mui/material/styles';
import { Box, Divider, FormLabel, Grid, TextField, Menu, MenuItem, Stack, Typography } from '@mui/material';

import { FacebookFilled, LinkedinFilled, MoreOutlined, InstagramFilled, TwitterCircleFilled} from '@ant-design/icons';
import Avatar from '../../components/extended/Avatar';
import {AiFillLinkedin} from "react-icons/ai";
import React from "react";


const AboutUSProfile = ({image, name, title, link1, link2, link3}) =>{
  const theme = useTheme();


  return (<>
    <Stack spacing={2.5} alignItems="center">
        <Avatar alt="Avatar 1" src={image} sx={{ width: 124, height: 124 }} />
      <TextField
        type="file"
        id="change-avtar"
        placeholder="Outlined"
        variant="outlined"
        sx={{ display: 'none' }}
      />
      <Stack spacing={0.5} alignItems="center">
        <Typography variant="h5">{name}</Typography>
        <Typography color="secondary">{title}</Typography>
      </Stack> <Stack direction="row"
                      spacing={3}
                      sx={{
                        '& svg': {
                          fontSize: '1.15rem',
                          cursor  : 'pointer'
                        }
                      }}>

      <a href={link1}
         target="_blank"
         rel="noReferrer"
         className="icon">
        <span style={{color: '#0e76a8'}}>
          <LinkedinFilled />
        </span>
      </a>

      <a href={link2}
         target="_blank"
         rel="noReferrer"
         className="icon">
        <span style={{color: '#E1306C'}}>
          <InstagramFilled />
        </span>
      </a>

      <a href={link3}
         target="_blank"
         rel="noReferrer"
         className="icon">
        <span style={{color: '#1DA1F2'}}>
          <TwitterCircleFilled />
        </span>
      </a>


    </Stack> </Stack>
  </>
)
}


export default AboutUSProfile;