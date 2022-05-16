import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import QRCode from 'qrcode';
// Importing qrcode-reader module
import React from "react";
import Input from '../../../components/input';
import defaultTxParams from '../../../default/txParams';

const styles = {
    container: {
        margin: "2%"
    },
    row: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    },
    qr: {
        height: "400px",
        marginTop: 90
    }
}

function App() {

    const [txParams, setTxParams] = React.useState(defaultTxParams)

    React.useEffect(() => {
        QRCode.toDataURL(JSON.stringify(txParams))
            .then(url => {
                document.getElementById("qr").src = url
            })
            .catch(err => {
                console.error(err)
            })
    }, [txParams])

    const handleChange = (e, key) => {
        setTxParams({ ...txParams, [key]: e.target.value })
    }

    var options = {
        lineNumbers: true,
    }

    return (
        <div style={styles.container}>
            <div style={styles.row}>
                <div>
                    <div>
                        <h1 className="font">Tx Params for Offline Signing</h1>
                        <Input value={txParams} handleChange={(e, key) => handleChange(e, key)} />
                        <h4 style={styles.text}> OR</h4>
                        <CodeMirror
                            options={options}
                            // value={beautify(JSON.stringify(txParams), { indent_size: 2, space_in_empty_paren: true })}
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
                    <img id="qr" alt="qr" style={styles.qr} />
                </div>
            </div>

        </div>

    );
}

export default App;