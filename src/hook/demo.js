import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from "react";
import { useTitleHook, useHttpHook } from "./hooks";
import { Button, Badge, Space, Tag } from "antd";

export default function (props) {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("text-demo");
  const [titlestate, setTitleState] = useState('title')

  // 执行异步相关操作ou
  useEffect(() => {
    console.log("effect依赖项空数组");
  }, []);
  useEffect(() => {
    console.log("没有依赖项");
  });
  useEffect(() => {
    console.log("effect有依赖项");
  }, [count]);

  // 所有DOM渲染完毕后才执行，通常在这里做DOM相关操作
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  // const handleAdd = () => {
  //   setCount(count + 1);
  // };

  const handleAdd = useCallback(() => {
    console.log("count changed");
    setCount(count + 1);
  }, [count]);

  const noCacheText = () => {
    console.log("text changed");
    return text;
  };

  // 不会重复渲染
  const memoText = useMemo(() => {
    console.log("memo text changed");
    return text;
  }, [text]);

  const title = useTitleHook(titlestate);

  const handleTitleChange = () => {
    setTitleState('title changed')
  }

  useHttpHook({
    url: "http://www.xxt.cn/client/morenotice.action?noticeType=1&page=4&uGradeId=7&uVersionId=1&__ajax_random__=0.8393972558172615&callback=jsonp4",
    method: "get",
    watch: [titlestate],
  });

  return (
    <div>
      <h1> {title} </h1>
      <Space>
        <Badge count={count} showZero>
          <span className="head-example"> </span>
        </Badge>
        <Button type="primary" onClick={handleAdd}>
          Add
        </Button>
        {
          // 每次都会重复渲染， uesMemo hook是为了解决这个问题
        }
        <span>
          text: <Tag color="magenta">{noCacheText()}</Tag>
        </span>
        <span>
          text: <Tag color="volcano">{memoText}</Tag>
        </span>

        <Button type="primary" onClick={handleTitleChange}>
          修改title
        </Button>
      </Space>
    </div>
  );
}
