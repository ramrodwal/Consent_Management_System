import React from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';



function AllRecords(){
return(
    <>
    <center><h1 className='pageheading'>List of all records</h1></center>
    <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th className='tabledata'>All Records</th>  
      <th></th>
      
      
      
 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td className='tabledata'>1</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
        
        

    </tr>
    <tr>
        <td className='tabledata'>2</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
       

    </tr>
    <tr>
        <td className='tabledata'>3</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
     

    </tr>
    <tr>
        <td className='tabledata'>4</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
        

    </tr>
    <tr>
        <td className='tabledata'>5</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
        

    </tr>
    <tr>
        <td className='tabledata'>6</td>
        <td className='tabledata'><Form.Check aria-label="option 1" /></td>
       

    </tr>
  </tbody>
</Table>
<center><button type="submit" className="btn btn-primary">
              Submit
            </button>
            </center>
    </>
)
}

export default AllRecords;