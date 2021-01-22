import React,{useState} from 'react';
import {Formik} from 'formik';
import {Form,Button,Col,Row,InputGroup,Modal,Accordion,AccordionCollapse,Media} from 'react-bootstrap';
import * as Yup from 'yup';
import { Input } from 'reactstrap';
// const { Formik } = formik;

const styles = {
    mediaItem: {
      border: "1px solid black",
      backgroundColor: "#f5f5f5",
      paddingTop: "5px",
      paddingBottom: "5px"
    },
    mediaItemButtons: {
      paddingTop: "5px",
      paddingBottom: "5px"
    }
  };
  
const schema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  username: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  terms: Yup.bool().required(),
});

function E2() {
    const [show, setShow] = useState(false);
    const [collapsed,setCollapsed]=useState(false);
    // collapsed: false

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

<>
      <Button variant="primary" onClick={handleShow}>
       Edit
      </Button>
      <Accordion>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed === false ? "See" : "Hide"} item details{" "}
          {collapsed === false ? "+" : "-"}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <>
            <Media className={styles.mediaItem}>
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
                      Details
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
            <Media className={styles.mediaItem}>
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
                      Details
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
          </>
        </Accordion.Collapse>
      </Accordion>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>


    
  );
}

export default E2;