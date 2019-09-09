import React from "react";

const styles = {
    footer: {
    bottom: 0,
    width: "100%",
    height: "100px",
    background: "black",
    marginTop: "100px",
    },

    text: {
        color: "white",
        padding: "10px"

    },
};


function Footer() {
    return(
    <footer className="footer" style={styles.footer}>
      <div className="container text-center" style={styles.text}>
        <span className="text-center" style={styles.text}>Enjoy Your Book</span>
      </div>
    </footer>

    )
}

export default Footer;