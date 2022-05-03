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
                return j % 3 != 0 ? <TextField onChange={(e) => handleChange(e, i)} value={value[i] ? value[i] : ""} id="outlined-basic" label={i} variant="outlined" /> : <>
                    <br />
                    <TextField onChange={(e) => handleChange(e, i)} value={value[i] ? value[i] : ""} id="outlined-basic" label={i} variant="outlined" /></>

            })}
            {/* <TextField onChange={(e) => handleChange(e, "nonce")} value={value.nonce} id="outlined-basic" label="Nonce" variant="outlined" />
            <TextField onChange={(e) => handleChange(e, "gasPrice")} value={value.gasPrice} id="outlined-basic" label="Gas Price" variant="outlined" />
            <TextField onChange={(e) => handleChange(e, "gasLimit")} value={value.gasLimit} id="outlined-basic" label="Gas Limit" variant="outlined" />
            <br/>
            <TextField onChange={(e) => handleChange(e, "to")} value={value.to} id="outlined-basic" label="To" variant="outlined" />
            <TextField onChange={(e) => handleChange(e, "value")} value={value.value} id="outlined-basic" label="Value" variant="outlined" />
            <TextField onChange={(e) => handleChange(e, "data")} value={value.data} id="outlined-basic" label="Data" variant="outlined" /> */}
        </Box>
    );
}
