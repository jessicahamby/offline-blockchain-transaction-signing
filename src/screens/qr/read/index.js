import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import QRCode from 'qrcode';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
var beautify = require('js-beautify').js;


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

    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
                <QrReader

                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                />
            </div>
            <div style={{ width: '40%', }}>
                <img id="qr" alt="qr" style={{ height: "400px", marginTop: 90 }} />
                <CodeMirror
                    options={options}
                    style={{ width: '100%'}}
                    value={beautify(data, { indent_size: 2, space_in_empty_paren: true })}
                    height="200px"
                    placeholder="Scan the QR and payload will be populated here"
                    extensions={[javascript({ jsx: true })]}
                />
            </div>
        </div>
    );
};

export default Reader;