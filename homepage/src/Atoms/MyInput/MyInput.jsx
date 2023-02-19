import React from 'react'

const MyInput = (
    {type,onChange}
    ) => {
  return (
    <>
    <input type={type} onChange={onChange} />
    </>
  )
}

export default MyInput