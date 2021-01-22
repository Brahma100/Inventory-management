import React, { Component } from "react";
import { Container, Row, Col,Button,Media,Form,Tooltip } from "react-bootstrap";
import './TrendingProductList.css'
import {Card} from 'react-bootstrap';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const styles = {
    mediaItem: {
      border: "1px solid gray",
      backgroundColor: "#f5f5f5",
 
    },
    mediaItemButtons: {
      paddingTop: "5px",
      paddingBottom: "5px"
    }
  };

class TrendingProductList extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Container  fluid>
        
          <Row >
            
            <div className='products'>
                 <Card  className='cardp' style={{height:'30rem',marginTop:'5rem'}}>
                 <Card.Header className='header'><b>Trending Products</b><p>Explore All Top Viewed Products</p></Card.Header>
                 <Card.Body className='overflow-auto custom-scrollbar-css p-3'>
                    <Media style={{padding:'.5rem'}} className={styles.mediaItem}>
                            <img
                                width={100}
                                height={100}
                                className="align-self-center mr-3"
                                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                alt="Generic placeholder"
                            />
                            <Media.Body className={styles.mediaBody}>
                                <p><b>Dxracer Formula Gaming Chair (Black/Red)</b></p>
                                <Row>
                                <Col xs={6}>
                                    <strong>By:</strong> Apple
                                </Col>
                                <Col xs={6}><b>4.5</b>/5</Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                    <strong>$48.99</strong>
                                </Col>
                                <Col xs={6}><strong>Stock</strong> 100</Col>
                                </Row>

                                <Row style={styles.mediaItemButtons}>
                                <Col xs={6}>
                                    <Button variant="primary" size="sm">
                                    <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="danger" size="sm">
                                    <FontAwesomeIcon icon={faTimes}/>
                                    </Button>
                                </Col>
                                </Row>
                            </Media.Body>
                            </Media>
                   
                    <Media style={{padding:'.5rem'}} className={styles.mediaItem}>
              <img
                width={100}
                height={100}
                className="align-self-center mr-3"
                src=" https://images-na.ssl-images-amazon.com/images/I/81lGKc7oDGL._SX425_.jpg"
                alt="Generic placeholder"
              />
              <Media.Body className={styles.mediaBody}>
                                <p><b>Dxracer Formula Gaming Chair (Black/Red)</b></p>
                                <Row>
                                <Col xs={6}>
                                    <strong>By:</strong> Apple
                                </Col>
                                <Col xs={6}><b>4.5</b>/5</Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                    <strong>$48.99</strong>
                                </Col>
                                <Col xs={6}><strong>Stock</strong> 100</Col>
                                </Row>

                                <Row style={styles.mediaItemButtons}>
                                <Col xs={6}>
                                    <Button variant="primary" size="sm">
                                    <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="danger" size="sm">
                                    <Tooltip >
          Tooltip on <strong>Delete</strong>.
        </Tooltip>
                                    <FontAwesomeIcon icon={faTimes}/>
                                    </Button>
                                </Col>
                                </Row>
                            </Media.Body>
            </Media>
           
                   
                    <Media style={{padding:'.5rem'}} className={styles.mediaItem}>
                            <img
                                width={100}
                                height={100}
                                className="align-self-center mr-3"
                                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                alt="Generic placeholder"
                            />
                            <Media.Body className={styles.mediaBody}>
                                <p>Dxracer Formula Gaming Chair (Black/Red)</p>
                                <Row>
                                <Col xs={6}>
                                    <strong>$48.99</strong>
                                </Col>
                                <Col xs={6}>1 piece</Col>
                                </Row>

                                <Row style={styles.mediaItemButtons}>
                                <Col xs={6}>
                                    <Button variant="primary" size="sm">
                                    <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="danger" size="sm">
                                    <FontAwesomeIcon icon={faTimes}/>
                                    </Button>
                                </Col>
                                </Row>
                            </Media.Body>
                            </Media>
                   
                    <Media style={{padding:'.5rem'}} className={styles.mediaItem}>
              <img
                width={100}
                height={100}
                className="align-self-center mr-3"
                src=" https://images-na.ssl-images-amazon.com/images/I/81lGKc7oDGL._SX425_.jpg"
                alt="Generic placeholder"
              />
              <Media.Body className={styles.mediaBody}>
                <p>AOC 27 inch 144hz Gaming Monitor</p>
                <Row>
                  <Col xs={6}>
                    <strong>$299.99</strong>
                  </Col>
                  <Col xs={6}>1 piece</Col>
                </Row>

                <Row style={styles.mediaItemButtons}>
                <Col xs={6}>
                                    <Button variant="primary" size="sm">
                                    <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="danger" size="sm">
                                    <FontAwesomeIcon icon={faTimes}/>
                                    </Button>
                                </Col>
                </Row>
              </Media.Body>
            </Media>
           
                    <Media style={{padding:'.5rem'}} className={styles.mediaItem}>
                            <img
                                width={100}
                                height={100}
                                className="align-self-center mr-3"
                                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                alt="Generic placeholder"
                            />
                            <Media.Body className={styles.mediaBody}>
                                <p>Dxracer Formula Gaming Chair (Black/Red)</p>
                                <Row>
                                <Col xs={6}>
                                    <strong>$48.99</strong>
                                </Col>
                                <Col xs={6}>1 piece</Col>
                                </Row>

                                <Row style={styles.mediaItemButtons}>
                                <Col xs={6}>
                                    <Button variant="primary" size="sm">
                                    <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="danger" size="sm">
                                    <FontAwesomeIcon icon={faTimes}/>
                                    </Button>
                                </Col>
                                </Row>
                            </Media.Body>
                            </Media>
                            </Card.Body>   
                             <NavLink className="m-3 p-2 btn btn-primary" style={{color:'white'}} to='/admin/products'><span className="btn-wrapper--label">View All</span></NavLink>
                         
                    </Card>
             

            </div>
            
          </Row>

         
        </Container>
      </div>
    );
  }
}

export default TrendingProductList;
