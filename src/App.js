import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';
import Footer from './components/footer';
import GenerateQR from './screens/qr/generate';
import ReadQR from './screens/qr/read';

export default function ColorToggleButton() {
    const [option, setOption] = React.useState('Read');

    const handleChange = (event, option) => {
        setOption(option);
    };

    return (
        <>
            <ToggleButtonGroup
                style={{ float: "right" }}
                color="primary"
                value={option}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="Generate">Generate</ToggleButton>
                <ToggleButton value="Read">Read</ToggleButton>
            </ToggleButtonGroup>
            {option === "Generate" ? <GenerateQR /> : <ReadQR />}
            <Footer/>
        </>
    );
}