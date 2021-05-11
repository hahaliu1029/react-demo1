import React, { Component } from "react";
import { Button, Row, Col } from "antd";
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
    return (
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
    );
  }
}

export default Hr