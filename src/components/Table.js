import React from 'react';
import { Icon, Table, Item } from 'semantic-ui-react';
import '../styles/Table.css';
import CourseInfo from './CourseInfo';

class TableInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = [{courseSaved: false}]
    }

    renderContent() {
        if (this.props.subjects) {
            if (this.props.subjects.length < 1) {
                return <div className='no-results'>No Results Found</div>
            }
            return this.props.subjects.map((subject) => {
                return <div className="course-table" key={subject.unique_id}>
                    <CourseInfo subjectInfo={`${subject.subject} ${subject.catalog_nbr} - ${subject.className}`} description={subject.catalog_description} />
                    <Table celled structured>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3' textAlign='center' className='headers'><Icon color='blue' name='book' />Class Info</Table.HeaderCell>
                                <Table.HeaderCell colSpan='3' textAlign='center' className='headers'><Icon color='blue' name='clock outline' />Day and Time Info</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' className='headers'> <Icon color='blue' name='user outline' />Instructor</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' className='headers'><Icon color='blue' name='hourglass start' />Status</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' className='headers'><Icon color='blue' name='home' />Campus</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' className='headers'><Icon color='blue' name='globe' />Delivery Type</Table.HeaderCell>

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
                                <Table.Cell textAlign='center'>{subject.course_info[0].instructors.length > 0 ? subject.course_info[0].instructors.toString() : 'Not Assigned'}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].enrl_stat === 'Not full' ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='delete' size='large' />}</Table.Cell>
                                <Table.Cell textAlign='center'>{subject.course_info[0].campus}</Table.Cell>
                                <Table.Cell className='course-desc'>{subject.course_info[0].descr ? subject.course_info[0].descr : 'Not Available'}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Item>
                        <Item.Content className='pre-requist'>{subject.course_info[0].descrlong}</Item.Content>
                    </Item>
                    <button class="ui primary button" onClick={() => this.setCourseInfoInStorage(subject.unique_id)} value={subject.unique_id}>
                        {this.checkSavedCourses(subject.unique_id) ? 'Already Saved' : 'Save this course Info'}
                    </button>
                </div>;
            })
        }
    }

    setCourseInfoInStorage(id) {
        let savedCourses = JSON.parse(window.localStorage.getItem('SAVED_COURSES'));
        const selectedCourse = this.props.subjects.filter(subject => {
            return subject.unique_id === id ? subject : ''
        })

        if(savedCourses) {
            const doesExist = savedCourses.some(function (value) {
                return value.unique_id === id;
            });

            if (!doesExist) {
                savedCourses.push(selectedCourse[0]);
                window.localStorage.setItem('SAVED_COURSES', JSON.stringify(savedCourses));
            }
        } else {
            window.localStorage.setItem('SAVED_COURSES', JSON.stringify(selectedCourse));
        }
        this.setState({courseSaved: true});
    }

    checkSavedCourses(id) {
        let savedCourses = JSON.parse(window.localStorage.getItem('SAVED_COURSES'));
        if (savedCourses) {
            const doesExist = savedCourses.some(function (value) {
                return value.unique_id === id;
            });
            
            return doesExist;
        }
        return false;
    }

    render() {
        return (<div>{this.renderContent()}</div>);
    }
};

export default TableInfo;