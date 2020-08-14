import React from 'react';
import { Icon, Item } from 'semantic-ui-react';

const CourseInfo = (props) => (
  <Item.Group>
    <Item>
      <Item.Content header={props.subjectInfo} description={props.description} />
    </Item>
  </Item.Group>
);

export default CourseInfo;
