import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const input = [
    "nonce", "gasPrice", "gasLimit", "to", "value", "data"
]

export default function BasicTextFields({ handleChange, value }) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {input.map((i, j) => {
                return j % 3 !== 0 ? <TextField
                    key={j}
                    onChange={(e) => handleChange(e, i)} value={value[i] ? value[i] : ""} id="outlined-basic" label={i} variant="outlined" /> : <>
                    <br />
                    <TextField onChange={(e) => handleChange(e, i)} value={value[i] ? value[i] : ""} id="outlined-basic" label={i} variant="outlined" /></>

            })}
        </Box>
    );
}
