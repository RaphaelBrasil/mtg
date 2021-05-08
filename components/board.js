import React from 'react'
import 'antd/dist/antd.css'
import { Card as CardAntd, Layout } from 'antd'

import Dnd from './dnd'

const { Header, Footer, Sider, Content } = Layout

export default function Board() {
  return (
    <>
      <CardAntd
        size='small'
        style={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <CardAntd
          style={{
            backgroundColor: 'gray',
            borderRadius: '5px',
            height: '36vh',
          }}
        >
          P2 Board
        </CardAntd>
        <CardAntd
          style={{
            backgroundColor: 'gray',
            borderRadius: '5px',
            height: '38vh',
          }}
        >
          P1 Board
        </CardAntd>
        <CardAntd
          style={{
            backgroundColor: 'blue',
            borderRadius: '5px',
            height: '22vh',
          }}
        >
          <Dnd />
        </CardAntd>
      </CardAntd>
    </>
  )
}
