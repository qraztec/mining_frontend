import React from "react";
import "./area.css";
import { Link } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
export default function Area({ name, image }) {
    return (
        <Card className="areaContainer" sx={{ maxWidth: 345 }}>
            <Link to={`/area/${name}`} style={{ textDecoration: 'none' }}>
                <CardActionArea
                    sx={{ backgroundColor: 'transparent', // Ensure background is transparent
                        "&:hover": {
                            backgroundColor: 'transparent', // No background on hover
                        },
                        "&:focus": {
                            backgroundColor: 'transparent', // No background on focus
                        },
                        "&:active": {
                            backgroundColor: 'transparent', // No background on click
                        }}}
                    disableRipple
                    disableTouchRipple  // Disable ripple effect
                >
                    <CardMedia
                        component="img"
                        height="150"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" >
                        Go to Area
                    </Button>
                </CardActions>
            </Link>
        </Card>
    );

}