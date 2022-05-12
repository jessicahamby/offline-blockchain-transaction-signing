import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import QRCode from 'qrcode';
import React from "react";
import Input from './components/input';

const defaultTxParams = {
    nonce: '0x00',
    gasPrice: '0x09184e72a000',
    gasLimit: '0x2710',
    to: '0x0000000000000000000000000000000000000000',
    value: '0x00',
    data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
}

function App() {

    const [txParams, setTxParams] = React.useState(defaultTxParams)

    React.useEffect(() => {
        QRCode.toDataURL(JSON.stringify(txParams))
            .then(url => {
                console.log(url)
                document.getElementById("qr").src = url
            })
            .catch(err => {
                console.error(err)
            })
    }, [txParams])

    const handleChange = (e, key) => {
        console.log("e", e, key)
        setTxParams({ ...txParams, [key]: e.target.value })
    }

    return (
        <div style={{ margin: "2%" }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div>
                    <div>
                        <h1 className="font">Tx Params for Offline Signing</h1>
                        <Input value={txParams} handleChange={(e, key) => handleChange(e, key)} />
                        <h4 style={{ textAlign: 'center' }}> OR</h4>
                        <CodeMirror
                            value=""
                            height="200px"
                            placeholder="Enter/Paste the raw data here"
                            extensions={[javascript({ jsx: true })]}
                            onChange={(value, viewUpdate) => {
                                console.log('value:', value);
                                setTxParams({})
                                setTxParams(value.toString())
                            }}
                        />
                    </div>
                </div>
                <div>
                    <img id="qr" alt="qr" style={{ height: "400px", marginTop: 90 }} />
                </div>
            </div>
            <div className="footer">
                <div>
                    <h4 className="font" style={{ fontSize: 40 }}>
                        Hail Blockchain
                    </h4>
                    <p className="" style={{ fontSize: "1.2rem" }}>
                        This is an Open Source Project present on Github. This is the web interface for entering the transaction parameters, which generates the QR Code, which in turn will then be Scanned by Private Offline Wallet to sign the transaction params with the safely located Private Key and generate the QR Code of Signed raw Transaction which can be then read by the web interface through the web camera and finally display the signed transaction in JSON format on the screen
                    </p>

                </div>
            </div>
        </div>

    );
}

export default App;
