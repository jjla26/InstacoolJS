import React from 'react'

const style = {
    padding:'10px 10px',
    border:'1px solid #eee',
    borderRadius: '5px',
    width: '100%'
}

const labelStyle = {
    fontSize: '15px',
    color: '#777',
    textTransform: 'uppercase',
    fontWeight: 900
}

const Input = props => {
    const { label, input } = props
    return(
        <div>
            <label style={labelStyle}>{label}</label>
            <input {...input} {...props} style={style} />
        </div>
    )
}

export default Input