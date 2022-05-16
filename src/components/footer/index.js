const styles = {
    bottomText: {
        margin: 30, marginTop: -10
    },
    heading: {
        fontSize: 40
    },
    text: {
        fontSize: "1.2rem"
    }
}

const footer = () => {
    return (
        <>
            <div className="footer">
                <div>
                    <h4 className="font" style={styles.heading}>
                        Hail Blockchain
                    </h4>
                    <p className="" style={styles.text}>
                        This is an Open Source Project present on Github. This is the web interface for entering the transaction parameters, which generates the QR Code, which in turn will then be Scanned by Private Offline Wallet to sign the transaction params with the safely located Private Key and generate the QR Code of Signed raw Transaction which can be then read by the web interface through the web camera and finally display the signed transaction in JSON format on the screen
                    </p>
                    <p>
                        View project on <a target="_blank" href="https://github.com/realabbas/transaction-offline-signing" rel="noreferrer">Github</a>
                    </p>
                </div>
                <br />
            </div>
            <div style={styles.bottomText}>
                <p>Tested on following blockchains:-</p>
                <img src="./assets/ethereum.png" height={50} alt="eth" />
            </div>
        </>
    )
}

export default footer;