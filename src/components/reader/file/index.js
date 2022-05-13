import { javascript } from '@codemirror/lang-javascript';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CodeMirror from '@uiw/react-codemirror';
import React from "react";
import decodeQR from '../../../utils/decodeQR';
const Input = styled('input')({
    display: 'none',
});
function Read() {

    const [fileName, setFileName] = React.useState([]);

    const parseFileName = (files) => {
        const ans = [];
        for (let i = 0; i < Object.keys(files).length; i += 1) {
            ans.push({ name: files[i].name });
        }
        setFileName(ans);
    };

    const showFile = async (e) => {
        parseFileName(e.target.files);
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            const fileBuffer = (e.target.result);
            const temp = await decodeQR(fileBuffer)
        }
        reader.readAsArrayBuffer(e.target.files[0]);
    };

    var options = {
        lineNumbers: true,
    }

    return (
        <div style={{ margin: "2%" }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div>
                    <div>
                        <h1 className="font">Tx Params for Offline Signing</h1>
                        <h4 style={{ textAlign: 'center' }}> OR</h4>
                        <CodeMirror
                            options={options}
                            value=""
                            height="200px"
                            placeholder="Enter/Paste the raw data here"
                            extensions={[javascript({ jsx: true })]}
                        />
                    </div>
                </div>
                <div>
                    <img id="qr" alt="qr" style={{ height: "400px", marginTop: 90 }} />
                </div>
            </div>

            <div style={{ margin: 40, marginTop: 0 }}>
                <label htmlFor="contained-button-file">
                    <Input
                        onChange={(e) => showFile(e)}
                        accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
                        id="contained-button-file" type="file" />
                    <Button variant="contained" component="span">
                        Upload File
                    </Button>
                </label>
            </div>
            {fileName.length > 0 ? <Typography variant="subtitle1">{`${fileName[0].name}`}</Typography> : null}

        </div>

    );
}

export default Read;