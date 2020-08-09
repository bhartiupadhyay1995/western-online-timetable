import React from 'react';
import { Icon, Table, Item } from 'semantic-ui-react';
import getSchedule from '../service';
import '../styles/Table.css';

class TableInfo extends React.Component {
    state = { sujectResp: '' };

    async componentDidMount() {
        const resp = await getSchedule();
        this.setState({ sujectResp: resp.data.result }) 
    }

    renderContent(){
        if (this.state.sujectResp) {
            return this.state.sujectResp.map((subject) => {
                return <div className="course-table">
                    <Table celled structured>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3' textAlign='center'>Class Info</Table.HeaderCell>
                                <Table.HeaderCell colSpan='3' textAlign='center'>Day and Time Info</Table.HeaderCell>
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
                                <Table.Cell>{subject.course_info[0].class_nbr}</Table.Cell>
                                <Table.Cell textAlign='right'>{subject.course_info[0].ssr_component}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].class_nbr}</Table.Cell>
                                <Table.Cell>{subject.course_info[0].start_time}</Table.Cell>
                                <Table.Cell >{subject.course_info[0].end_time}</Table.Cell>
                                <Table.Cell>{subject.course_info[0].days.toString()}</Table.Cell>
                                <Table.Cell >Sprengler</Table.Cell>
                                <Table.Cell >{subject.course_info[0].enrl_stat === 'Not full' ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='cross' size='large' />}</Table.Cell>
                                <Table.Cell >{subject.course_info[0].campus}</Table.Cell>
                                <Table.Cell className='course-desc'>{subject.course_info[0].descr}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Item>
                        <Item.Content>{subject.course_info[0].descrlong}</Item.Content>
                    </Item>
                </div>;
            })
        }

        if (!this.state.sujectResp) {
            return <div>Loading....</div>
        }
    }

    render() {
        return (<div>{this.renderContent()}</div>);
    }
};

export default TableInfo;