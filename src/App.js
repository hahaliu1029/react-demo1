import React, { Component } from "react";
import { Row, Col, Divider, Tabs } from "antd";
import Alert from "./Alert";
import Asset from "./Asset";
import Control from './Control';
import LifeCycles from './LifeCycles';

const { TabPane } = Tabs;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let title = "研发三处";
    return (
      <div className="App">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            <LifeCycles></LifeCycles>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <Divider orientation="left">{title}</Divider>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Asset boss={"贾伟"}></Asset>
              </Col>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Alert boss={"田琳"}></Alert>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Control boss={"张玉峰"}></Control>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
