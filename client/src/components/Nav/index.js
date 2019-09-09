import React from "react";

const styles = {
  navbar: {
    color: "white",
    background: "black"
  },
};

function Nav() {
  return (
      <nav className="navbar fixed-top navbar-expand-lg" style={styles.navbar}>
      <a className="navbar-brand" href="/" style={styles.navbar}>
       Home
      </a>
      <a className="navbar-brand" href="./Saved" style={styles.navbar}>
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
