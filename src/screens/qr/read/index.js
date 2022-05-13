import { javascript } from '@codemirror/lang-javascript';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CodeMirror from '@uiw/react-codemirror';
import QRCode from 'qrcode';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { QrReader } from 'react-qr-reader';
import decodeQR from '../../../utils/decodeQR';
var beautify = require('js-beautify').js;

const notify = (message) => toast.success(message, {
    duration: 4000,
    position: 'top-center',
});

const Input = styled('input')({
    display: 'none',
});

const Reader = (props) => {
    const [data, setData] = useState('');
    var options = {
        lineNumbers: true,
    }

    React.useEffect(() => {
        QRCode.toDataURL(JSON.stringify(data))
            .then(url => {
                console.log(url)
                document.getElementById("qr").src = url
            })
            .catch(err => {
                console.error(err)
            })
    }, [data])

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
            console.log("temp", temp)
            setData((temp))
        }
        reader.readAsArrayBuffer(e.target.files[0]);
    };

    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
                <QrReader
                    videoContainerStyle={{ margin: 40 }}
                    scanDelay={5000}
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                            notify('Scan Success')
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                />

                <div style={{margin:40, marginTop:0}}>
                    <label htmlFor="contained-button-file">
                        <Input onChange={(e) => showFile(e)} accept="image/*" id="contained-button-file" type="file" />
                        <Button variant="contained" component="span">
                            Upload File
                        </Button>
                    </label>
                    {fileName.length > 0 ? <Typography variant="subtitle1">{`${fileName[0].name}`}</Typography> : null}

                </div>

            </div>
            <div style={{ width: '40%', }}>
                <img id="qr" alt="qr" style={{ height: "400px", marginTop: 90 }} />
                <CodeMirror
                    options={options}
                    style={{ width: '100%' }}
                    value={beautify(data, { indent_size: 2, space_in_empty_paren: true })}
                    height="200px"
                    placeholder="Scan the QR and payload will be populated here"
                    extensions={[javascript({ jsx: true })]}
                />
            </div>
            <Toaster />
        </div>
    );
};

export default Reader;