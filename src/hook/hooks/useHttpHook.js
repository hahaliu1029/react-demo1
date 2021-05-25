import { useState, useEffect } from 'react';
import { message } from "antd";

export default function useHttpHook({
  url,
  method = 'post',
  headers,
  body = {},
  watch = []
}) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  async function Http() {
    setLoading(true);

    const defaultHeader = {
      'Content-type': "application/json" 
    }

    let params;

    if (method.toUpperCase() === 'GET') {
      params = undefined;
    } else {
      params = {
        headers: {
          ...defaultHeader,
          headers
        },
        method,
        body: JSON.stringify(body)
      }
    }

    return new Promise((resolve, reject) => {
      fetch(url, params)
        .then(res => res.json())
        .then(res =>  {
          if (res.status === 200) {
            resolve(res.data);
            setResult(res.data);
          } else {
            message.info("error");
            reject(res);
          }
        })
        .catch(err => {
          console.log(err)
          message.info(err);
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        })
    })
  }

  useEffect(() => {
    Http();
  }, watch)

  return [result, loading];
}