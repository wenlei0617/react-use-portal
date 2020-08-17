import React from 'react'
import useProtal from 'react-use-portal'
import 'react-use-portal/dist/index.css'
import { animated, useSpring } from 'react-spring';

const App = () => {
  const { Protal, handleClose, handleShow, isShow } = useProtal();
  const animation = useSpring({reverse: !isShow, to: {opacity: 1}, from: { opacity: 0}});

	

  return (
    <>
      <div>状态：{JSON.stringify(isShow)}</div>
      <button onClick={handleShow}>弹出</button>
      <Protal>
        <animated.div style={animation} className="mask">
          <div>这是一个简单的弹框</div>
          <button onClick={handleClose}>关闭</button>
        </animated.div>
      </Protal>
    </>
  )
}

export default App
