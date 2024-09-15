import React from "react"
import "./searchBox.css"
import TextField from "@mui/material/TextField";  // Import TextField from Mater

export default function SearchBox({searchField, onSearchChange}) {
    return (
        <div className="textFieldContainer">
            <TextField
                placeholder="Search"
                className="outlined-basic"
                variant="outlined"
                value={searchField}
                onChange={onSearchChange}
            />
        </div>
    )
}

