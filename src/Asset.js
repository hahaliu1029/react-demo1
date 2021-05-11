import React, { Component } from "react";
import { Card,} from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";

@connect((state) => state.asset, {})
class Asset extends Component {
  static propTypes = {
    boss: PropTypes.string,
  };

  static defaultProps = {
    boss: "111",
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Card
          size="small"
          title={this.props.boss}
          style={{ width: 300 }}
        >
          {this.props.person.map((v, index) => {
            return <p key={`Asset${index}`}>{v}</p>;
          })}
        </Card>
      </div>
    );
  }
}
export default Asset