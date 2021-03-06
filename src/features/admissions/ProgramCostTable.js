import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react';

const programs = [
  {id: 1, value: 'youthEmpowerment', text: 'Youth Empowerment', length: '1 week', cost: '$1550'},
  {id: 2, value: 'youthEmpowerment', text: 'Youth Empowerment', length: '2 week', cost: '$2600'},
  {id: 3, value: 'youthEmpowerment', text: 'Youth Empowerment', length: '4 week', cost: '$4200'},
  {id: 4, value: 'healthInnovation', text: 'Health Innovation', length: '2 week', cost: '$3000'},
  {id: 5, value: 'healthInnovation', text: 'Health Innovation', length: '4 week', cost: '$5200'},
  {id: 6, value: 'education', text: 'Education', length: '2 week', cost: '$3000'},
  {id: 7, value: 'education', text: 'Education', length: '4 week', cost: '$5200'}
];

const ProgramCostTable = ({selectedProgram}) => {

function makeRow(program) {
  if (program.value === selectedProgram)
  return (
    <Table.Row key={program.id}>
      <Table.Cell>{program.text}</Table.Cell>
      <Table.Cell>{program.length}</Table.Cell>
      <Table.Cell>{program.cost}</Table.Cell>
    </Table.Row>
  );
}

return (
    <div>
      <div className="program-cost-header">
        <h1>Program Fee</h1>
        <p>Tax deductible up to 88% for US residents, the program fee is not refundable. Members have the option making a single payment upon acceptance, or several monthly payments while fundraising.</p>
      </div>
      <div className="program-cost-table">
      <Table textAlign='center' columns={3} basic='very' size="small">
        <Table.Body>
          {programs.map(makeRow)}
        </Table.Body>
      </Table>
      </div>
    </div>
  );
};

ProgramCostTable.propTypes = {
  selectedProgram: PropTypes.string.isRequired
}

export default ProgramCostTable;