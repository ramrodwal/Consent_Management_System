import React from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';



function AllRecords(){
return(
    <>
    <center><h1>List of all records</h1></center>
    <Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr className='tablehead'>
      <th className='tabledata'>All Records</th>  
      
      
      
 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td className='tabledata'>1 <div className='checkbox'><Form.Check aria-label="option 1" /></div></td>
        
        

    </tr>
    <tr>
        <td className='tabledata'>2 <div className='checkbox'><Form.Check aria-label="option 1" /></div></td>
       

    </tr>
    <tr>
        <td className='tabledata'>3 <div className='checkbox'><Form.Check aria-label="option 1" /></div></td>
     

    </tr>
    <tr>
        <td className='tabledata'>4 <div className='checkbox'><Form.Check aria-label="option 1" /></div></td>
        

    </tr>
    <tr>
        <td className='tabledata'>5 <div className='checkbox'><Form.Check aria-label="option 1" /></div></td>
        

    </tr>
    <tr>
        <td className='tabledata'>6 <div className='checkbox'><Form.Check aria-label="option 1" /></div></td>
       

    </tr>
  </tbody>
</Table>
    </>
)
}

export default AllRecords;