// 自定义hook
import { useLayoutEffect, useState } from 'react';

export default function useTitleHook(title) {

 const [state, setstate] = useState()

  useLayoutEffect(() => {
    document.title = title;
    setstate(title)
  }, [title])

  return state;

}
