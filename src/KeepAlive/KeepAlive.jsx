import { useReducer, useCallback } from "react";
import keepAliveReducer from "./keepAliveReducer";
import { KeepAliveContext } from "./KeepAliveContext";
import * as actionTypes from "./actionTypes";
import { useEffect } from "react";
function KeepAlive(props) {
  console.log("KeepAlive render");
  /**
   * {
   *  home: {
   *    keepAliveId: "home",
   *    reactElement,
   *    nodes,
   *    status: create | created
   *  },
   * }
   *
   */
  const [keepAliveStates, dispatch] = useReducer(keepAliveReducer, {});
  useEffect(() => {
    console.log("keepAliveStates ---- change", keepAliveStates);
  }, [keepAliveStates]);

  const setKeepAliveState = useCallback(
    ({ reactElement, keepAliveId }) => {
      if (!keepAliveStates[keepAliveId]) {
        // 第一次 创建
        dispatch({
          type: actionTypes.CREATING,
          payload: {
            reactElement,
            keepAliveId,
          },
        });
      }
    },
    [keepAliveStates]
  );
  /**
   * {
   *  home: {
   *    keepAliveId: "home",
   *    reactElement,
   *    nodes,
   *    status: create | created
   *  },
   * }
   *
   */

  return (
    <KeepAliveContext.Provider
      value={{ keepAliveStates, setKeepAliveState, dispatch }}
    >
      {props.children}
      {Object.values(keepAliveStates).map(({ keepAliveId, reactElement }) => {
        return (
          <div
            className="first"
            key={keepAliveId}
            ref={(node) => {
              if (node && !keepAliveStates[keepAliveId].nodes) {
                dispatch({
                  type: actionTypes.CREATED,
                  payload: {
                    keepAliveId,
                    nodes: [...node.childNodes],
                  },
                });
              }
            }}
          >
            {reactElement}
          </div>
        );
      })}
    </KeepAliveContext.Provider>
  );
}
export default KeepAlive;
