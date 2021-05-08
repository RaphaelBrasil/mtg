import React from 'react'

function ManualCard() {
  return (
    <div
      className='card-container'
      style={{
        border: '1px solid black',
        width: '50%',
        height: '70%',
        margin: '0 auto',
        marginTop: '5.6%',
        borderRadius: '2.5%',
        boxSizing: 'border-box',
        boxShadow: '-8px 9px 16px -3px gray',
        background: '#171314',
      }}
    >
      <div
        className='card-background'
        style={{
          zIndex: '0',
          height: '600px',
          margin: '20px 20px 0 20px',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          borderBottomLeftRadius: '8%',
          borderBottomRightRadius: '8%',
          backgroundColor: '#bbb',
        }}
      >
        <div
          className='card-frame'
          style={{
            zIndex: '1',
            position: 'relative',
            height: '108%',
            maxWidth: '97%',
            left: '1%',
            top: '0.5%',
            right: '1.2%',
            display: 'flex',
            flexDirection: 'column',
          }}
        />
      </div>
    </div>
  )
}

export default ManualCard
