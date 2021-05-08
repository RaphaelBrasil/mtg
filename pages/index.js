import React from 'react'
import { resetServerContext } from 'react-beautiful-dnd'
import Dnd from '../components/dnd'
// import BaseCard from '../components/baseCard'

export default function Home() {
  return <Dnd />
  /*
  return (
    <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
    <Row justify='center' align='middle'>
    <Col flex='center'>
    <BaseCard
    card={{ id: 'card-5', content: 'Master of the Pearl Trident' }}
    image='https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/7/b7f3069f-7754-4c4d-9b62-40e3d49eba05.jpg?1592764600'
    oracle='Other Merfolk creatures you control get +1/+1 and have islandwalk. (They cant be blocked as long as defending player controls an Island.)'
    isDragging={false}
    />
    </Col>
    </Row>
    </div>
    )
    */
}

// Reseta o servidor, fazendo com que os componentes Styled e DnD funcionem
Home.getInitialProps = async () => {
  resetServerContext()
  return {}
}
