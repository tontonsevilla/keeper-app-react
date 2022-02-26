import React from "react";

function Footer() {
    let dateNow = new Date();

    return (
        <footer>
            <p>Copyright &copy; {dateNow.getFullYear()}</p>
        </footer>
    );
}

export default Footer;