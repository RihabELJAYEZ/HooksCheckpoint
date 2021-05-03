import React from 'react'


const Desc = ({cards,match,history}) => {
    return (
        <div>
            <h1 style={{ color: "red", fontSize: 30,  marginLeft: '40%', marginTop:'30px' }}>Movie Description</h1>
            <div style={{ marginLeft: '25px' , marginRight:'25px' }}>
            {cards.find(el=>el.id===match.params.id).description}
            </div>
            <div style={{ marginLeft: '345px', marginTop:'100px'}}>
            {cards.find(el=>el.id===match.params.id).trailer}
            </div>
            <button style={{ marginLeft: '345px', marginTop:'20px', color:"red"}} onClick={ ()=>history.goBack()}>Back to home page </button>
        
        </div>
    )
}

export default Desc
