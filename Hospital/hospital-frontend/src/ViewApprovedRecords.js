
import React from 'react'
import { Table } from 'react-bootstrap'

export default function ViewApprovedRecords() {
  return (

    <>
    <center><h1 className='pageheading'>Approved Records List</h1></center>
    <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Consent Id</th>
            <th>Disease Name</th>
            <th>Hospital Name</th>
            <th>Patient Name</th>
            <th>Status</th>
            <th>Fetch</th>

          </tr>
        </thead>
        </Table>
    </>
  )
}
