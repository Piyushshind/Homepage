import React from 'react'

const MyButton = (
    {Text,Variant,onClick,style}
                    ) => {
  
  
    return (
    <div>
        <button 
        Variant={Variant}
        onClick={onClick}
        style={style}
        
        >
            {Text}
            </button>
    </div>
  )
}

export default MyButton;