import React from 'react';
import { Icon, Table, Item } from 'semantic-ui-react';

const TableInfo = () => (
    <div>
        <Table celled structured>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='3' textAlign='center'>Class Info</Table.HeaderCell>
                    <Table.HeaderCell colSpan='3' textAlign='center'>Day and Time Info</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Location</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Instructor</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Status</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Campus</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Delivery Type</Table.HeaderCell>

                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>Section</Table.HeaderCell>
                    <Table.HeaderCell>Component</Table.HeaderCell>
                    <Table.HeaderCell>Class Number</Table.HeaderCell>
                    <Table.HeaderCell>Start Time</Table.HeaderCell>
                    <Table.HeaderCell>End Time</Table.HeaderCell>
                    <Table.HeaderCell>Days</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>001</Table.Cell>
                    <Table.Cell textAlign='right'>LEC</Table.Cell>
                    <Table.Cell textAlign='center'>
                        {/* <Icon color='green' name='checkmark' size='large' /> */}
                    1048
                </Table.Cell>
                    <Table.Cell>9:30am</Table.Cell>
                    <Table.Cell >12:30pm</Table.Cell>
                    <Table.Cell >Monday, Tuesday</Table.Cell>
                    <Table.Cell >Near Blah</Table.Cell>
                    <Table.Cell >Sprengler</Table.Cell>
                    <Table.Cell ><Icon color='green' name='checkmark' size='large' /></Table.Cell>
                    <Table.Cell >Main</Table.Cell>
                    <Table.Cell >Distance Studies/Online</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        <Item>
            <Item.Content>Requisites and Constraints: ONLINE COURSE. PRIORITY TO YRS 2,3 & 4 IN A DEPARTMENT OF VISUAL ARTS MODULE, OR PERMISSION OF THE DEPARTMENT. WAIT LIST OPTION AVAILABLE.
REQUISITES: Prerequisite(s): Registration in years 2 - 4 of a Department of Visual Arts Module, or permission of the department.	</Item.Content>
        </Item>
    </div>
);

export default TableInfo;