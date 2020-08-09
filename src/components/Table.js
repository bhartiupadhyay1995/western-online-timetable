import React from 'react';
import { Icon, Table, Item } from 'semantic-ui-react';
import '../styles/Table.css';
import CourseInfo from './CourseInfo';

class TableInfo extends React.Component {
    renderContent(){
        if (this.props.subjects) {
            return this.props.subjects.map((subject) => {
                return <div className="course-table" key={`${subject.subject}_${subject.catalog_nbr}`}>
                    <CourseInfo subjectInfo={`${subject.subject} ${subject.catalog_nbr} - ${subject.className}`} description={subject.catalog_description}/>
                    <Table celled structured>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3' textAlign='center' className='headers'><Icon color='blue' name='book' />Class Info</Table.HeaderCell>
                                <Table.HeaderCell colSpan='3' textAlign='center' className='headers'><Icon color='blue' name='clock outline'/>Day and Time Info</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' className='headers'> <Icon color='blue' name='user outline'  />Instructor</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' className='headers'><Icon color='blue' name='hourglass start'/>Status</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' className='headers'><Icon color='blue' name='home'/>Campus</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' className='headers'><Icon color='blue' name='globe'/>Delivery Type</Table.HeaderCell>
        
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell className='headers' textAlign='center'>Section</Table.HeaderCell>
                                <Table.HeaderCell className='headers' textAlign='center'> Component</Table.HeaderCell>
                                <Table.HeaderCell className='headers' textAlign='center'>Class Number</Table.HeaderCell>
                                <Table.HeaderCell className='headers' textAlign='center'>Start Time</Table.HeaderCell>
                                <Table.HeaderCell className='headers' textAlign='center'>End Time</Table.HeaderCell>
                                <Table.HeaderCell className='headers' textAlign='center'>Days</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
        
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell textAlign='center'>{subject.course_info[0].class_section}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].ssr_component}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].class_nbr}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].start_time}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].end_time}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].days.toString()}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].instructors.toString()}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].enrl_stat === 'Not full' ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='cross' size='large' />}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].campus}</Table.Cell>
                                <Table.Cell className='course-desc'>{subject.course_info[0].descr}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Item>
                        <Item.Content className='pre-requist'>{subject.course_info[0].descrlong}</Item.Content>
                    </Item>
                </div>;
            })
        }

        // if (!this.props.subjects) {
        //     return <div>Loading....</div>
        // }
    }

    render() {
        return (<div>{this.renderContent()}</div>);
    }
};

export default TableInfo;