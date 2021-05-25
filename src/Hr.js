import React, { Component } from "react";
import { Button, Row, Col, Divider } from "antd";
import { connect } from "react-redux";
import {
  addAlertPerson,
  addAlertPersonAsync,
  removeAlertPerson,
  removeAlertPersonAsync,
} from "./redux/alert.redux";
import {
  addAssetPerson,
  addAssetPersonAsync,
  removeAssetPerson,
  removeAssetPersonAsync,
} from "./redux/asset.redux";
import ThemeContext from "./context/themeContext";

@connect((state) => state, {
  addAlertPerson,
  addAlertPersonAsync,
  removeAlertPerson,
  removeAlertPersonAsync,
  addAssetPerson,
  addAssetPersonAsync,
  removeAssetPerson,
  removeAssetPersonAsync,
})
class Hr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <ThemeContext.Consumer>
        {value => {
          return (
            <div style={{ backgroundColor: value.theme.bgColor }}>
              <Row justify="center">
                <Col span={3}>
                  <Button
                    type="primary"
                    onClick={() => {
                      this.props.addAssetPerson();
                    }}
                  >
                    +贾伟组人
                  </Button>
                </Col>
                <Col span={3}>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      this.props.removeAssetPerson();
                    }}
                  >
                    -贾伟组人
                  </Button>
                </Col>
                <Col span={3}>
                  <Button
                    type="primary"
                    onClick={() => {
                      this.props.addAlertPerson();
                    }}
                  >
                    +田琳组人
                  </Button>
                </Col>
                <Col span={3}>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      this.props.removeAlertPerson();
                    }}
                  >
                    -田琳组人
                  </Button>
                </Col>
                <Col span={3}>
                  <Button
                    type="primary"
                    onClick={() => {
                      this.props.addAssetPersonAsync();
                    }}
                  >
                    隔两天+贾伟组人
                  </Button>
                </Col>
                <Col span={3}>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      this.props.removeAssetPersonAsync();
                    }}
                  >
                    隔两天-贾伟组人
                  </Button>
                </Col>
                <Col span={3}>
                  <Button
                    type="primary"
                    onClick={() => {
                      this.props.addAlertPersonAsync();
                    }}
                  >
                    隔两天+田琳组人
                  </Button>
                </Col>
                <Col span={3}>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      this.props.removeAlertPersonAsync();
                    }}
                  >
                    隔两天-田琳组人
                  </Button>
                </Col>
              </Row>
              <Divider orientation="center">主题</Divider>
              <Row justify="center">
                <Col span={8}>
                  <Button
                    type="primary"
                    onClick={() => {
                      value.dispatch("white");
                    }}
                  >
                    change white
                  </Button>
                </Col>
                <Col span={8}>
                  <Button
                    type="primary"
                    onClick={() => {
                      value.dispatch("dark");
                    }}
                  >
                    change dark
                  </Button>
                </Col>
              </Row>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Hr;
