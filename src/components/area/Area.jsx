import React from "react";
import "./area.css";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from "@mui/material/Button";

export default function Area({ name, image, onAreaClick }) { // Add onAreaClick as a prop
    return (
        <Card 
            className="areaContainer" 
            sx={{ maxWidth: 345 }} 
            onClick={() => onAreaClick(name)} // Use onAreaClick when the card is clicked
        >
            <CardActionArea
                sx={{ backgroundColor: 'transparent',
                    "&:hover": {
                        backgroundColor: 'transparent',
                    },
                    "&:focus": {
                        backgroundColor: 'transparent',
                    },
                    "&:active": {
                        backgroundColor: 'transparent',
                    }}}
                disableRipple
                disableTouchRipple
            >
                <CardMedia
                    component="img"
                    height="150"
                    image={image}
                    alt={`${name} image`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' }}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    Go to Area
                </Button>
            </CardActions>
        </Card>
    );
}
