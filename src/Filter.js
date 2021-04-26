import React, {useRef} from 'react'
import { Form, FormControl} from 'react-bootstrap';

const Filter = ({handelChangeterm,searchTerm}) => {
    const ref =useRef("");
    const getSearchterm=()=>{
        handelChangeterm(ref.current.value)
    }

    return (
        <div style={{width:'35%', marginBottom: '35px', marginLeft:'40%'}}>
            <div>
        <Form inline>
        <FormControl ref={ref} type="text" placeholder="Search" value={searchTerm} className=" mr-sm-2" onChange={getSearchterm} />
        
        </Form>
        </div>
        </div>
    )
}

export default Filter
