import React, { useState } from 'react'

import useProtal from 'react-use-portal'
import 'react-use-portal/dist/index.css'

const App = () => {
  const [state, setState] = useState(document.body);
  const { Protal, handleClose, handleShow, isShow } = useProtal({rootContainer: state});
  return (
    <>
      <div>状态：{isShow}</div>
      <button onClick={handleShow}>弹出</button>
      <Protal>
        <div>1</div>
        <button onClick={() => {
          setState(document.getElementById('root') as HTMLElement)
        }}>改变root</button>
        <button onClick={handleClose}>关闭</button>
      </Protal>
    </>
  )
}

export default App
