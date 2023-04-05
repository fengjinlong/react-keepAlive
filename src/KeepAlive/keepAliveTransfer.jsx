import { useRef, useContext, useEffect } from "react";
import { KeepAliveContext } from "./KeepAliveContext";

// 拿到缓存的 dom 直接放进容器，就是缓存
// todo 1. 缓存
// todo 2. 读取缓存
function keepAliveTransfer(KeepAliveComponent, keepAliveId) {
  return function (props) {
    // return <KeepAliveComponent />;
    // 目的是  缓存 dom
    const { keepAliveStates, setKeepAliveState } = useContext(KeepAliveContext);
    // dispatch
    // keepAliveStates
    // setKeepAliveState

    const _ref = useRef(null);
    useEffect(() => {
      const state = keepAliveStates[keepAliveId];
      console.log(state);
      if (state && state.nodes) {
        console.log("读取缓存");
        state.nodes.forEach((node) => {
          // appendChild 意思是 移动 node 到 _ref.current 最后
          _ref.current.appendChild(node);
        });
      } else {
        console.log("创建");
        //
        setKeepAliveState({
          keepAliveId,
          reactElement: <KeepAliveComponent {...props} />,
        });
      }
    }, [keepAliveStates, setKeepAliveState, props]);
    return <div className="xxx-home" ref={_ref}></div>;
  };
}
export default keepAliveTransfer;
