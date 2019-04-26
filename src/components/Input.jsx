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

export default class Input extends React.Component{
    render(){
        const { title } = this.props
        return(
            <div>
                <label style={labelStyle}>{title}</label>
                <input style={style} {...this.props}/>

            </div>
        )
    }
}