import React from 'react';
import { Button, Header, Icon, Modal,Table } from 'semantic-ui-react'
import '../styles/Table.css';

// function handleReset  (e) {
//     let stateClone = JSON.parse(JSON.stringify(this.state));
//     let emptyQuestion = this.resetQuestion();
//     let emptyOptions = this.resetOptions(stateClone.options);
//     this.setState({ question: emptyQuestion, options: emptyOptions });
//     e.preventDefault();
// }
function ModalExampleCloseIcon() {
    // this.state = [{courseSaved: false}]
    const coursesFromStorage = { savedInfo: JSON.parse(window.localStorage.getItem('SAVED_COURSES')) }

    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={ <div className='container'>
            <Button fluid className='saveButton'>Checkout Your Saved Courses
            <Icon name='arrow right' /> 
</Button>   </div>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
           
        >
            <Header icon='archive' content='Saved Courses' />
            <Modal.Content>
                <p>
                    Here are your saved Courses.
              </p>
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
                            {/* <Table.HeaderCell className='headers' textAlign='center'>Remove</Table.HeaderCell> */}

                        </Table.Row>
                    </Table.Header>
                    {coursesFromStorage.savedInfo.map(subject => {

                        return (<Table.Body>

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
                                {/* <Button color="primary" onClick={handleReset()}>Reset</Button> */}
                            </Table.Row>
                        </Table.Body>)
                    })}
                </Table>
            </Modal.Content>
            {/* <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
              </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions> */}
        </Modal>
    )
}

export default ModalExampleCloseIcon


