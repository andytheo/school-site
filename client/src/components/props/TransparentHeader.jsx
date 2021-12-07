import React from 'react'

const TransparentHeader = (props) => {
    return (
        <div>
          <div className='p-5 text-center bg-light admission-process'>
            <h1 className='mb-5 text-light'>{props.text}</h1>
            {/* <button className="btn text-light rounded" style={{backgroundColor: "#161E54"}}></button> */}
          </div>
        </div>
    )
}

export default TransparentHeader
