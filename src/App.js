import React, { Component } from "react";
import { Row, Col, Divider, Tabs, Space, Tag, Button } from "antd";
import Alert from "./Alert";
import Asset from "./Asset";
import Control from "./Control";
import LifeCycles from "./LifeCycles";
import Hr from "./Hr";
import ThemeContext from "./context/themeContext";
import HookDemo from './hook/demo'

const { TabPane } = Tabs;

const theme = {
  white: {
    bgColor: "#ffffff",
  },
  dark: {
    bgColor: "#000000",
  },
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...theme.white,
    };
  }

  handleDispatch = (action) => {
    switch (action) {
      case "white":
        return this.setState({
          ...theme.white,
        });
      case "dark":
        return this.setState({
          ...theme.dark,
        });
      default:
        return this.setState({
          ...theme.white,
        });
    }
  };

  render() {
    let title = "研发三处";
    // const { store, addPerson, removePerson, addPersonAsync } = this.props;
    // const currentStore = store.getState();
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
          {/* <TabPane tab="Redux" key="3">
            <Divider orientation="left">人资</Divider>
            <Row>
              <Space>
                {currentStore.person.map((v) => {
                  return (
                    <Tag key={v} color="#108ee9">
                      {v}
                    </Tag>
                  );
                })}
              </Space>
            </Row>
            <Row className="mg12">
              <Space>
                <Button type='primary' onClick={()=>store.dispatch(addPerson())}>招聘</Button>
                <Button type='primary' danger onClick={()=>store.dispatch(removePerson())}>淘汰</Button>
                <Button type='primary' onClick={()=>store.dispatch(addPersonAsync())}>招聘</Button>
              </Space>
            </Row>
          </TabPane> */}
          <TabPane tab="Redux" key="4">
            <ThemeContext.Provider
              value={{
                theme: this.state,
                dispatch: this.handleDispatch,
              }}
            >
              <Divider orientation="left">人资</Divider>
              <Hr></Hr>
              <Divider orientation="left">研发三处</Divider>
              <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Asset boss={"贾伟"}></Asset>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Alert boss={"田琳"}></Alert>
                </Col>
              </Row>
            </ThemeContext.Provider>
          </TabPane>
          <TabPane tab="hook" key="5">
            <HookDemo></HookDemo>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
