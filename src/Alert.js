import React, { Component } from "react";
import { Card, Button, Space } from "antd";
import PropTypes from "prop-types";

export default class Alert extends Component {
  static propTypes = {
    boss: PropTypes.string,
  };

  static defaultProps = {
    boss: "111",
  };

  constructor(props) {
    super(props);
    this.state = {
      members: ["王勇旭", "董金波"],
    };
  }

  handleClickAdd() {
    let newMember = "员工";
    this.setState({
      members: [...this.state.members, newMember],
    });
  }

  handleClickDelete() {
    let members = this.state.members;
    members.pop()
    this.setState({
      members: members,
    });
  }

  render() {
    return (
      <div>
        <Card
          size="small"
          title={this.props.boss}
          extra={
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  this.handleClickAdd();
                }}
              >
                添加
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => {
                  this.handleClickDelete();
                }}
              >
                淘汰
              </Button>
            </Space>
          }
          style={{ width: 300 }}
        >
          {this.state.members.map((v, index) => {
            return <p key={`Alert${index}`}>{v}</p>;
          })}
        </Card>
      </div>
    );
  }
}
