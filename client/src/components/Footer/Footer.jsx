
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer style={{borderTop:'3px solid #ebeced'}} className="footer">
        <Container fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/admin/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/productsGrid">Products</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="/">
             <b> ShopperZ</b>
            </a>
            , Made with  <FontAwesomeIcon style={{color:'red'}} icon={faHeart}/> in <b> India</b>
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
