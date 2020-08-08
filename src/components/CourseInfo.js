import React from 'react';
import { Item } from 'semantic-ui-react';

const description = [
  ' An introductory visual and historical survey with a focus on Western art from the Baroque period to Contemporary times. The course provides a study of painting, sculpture, architecture, and other forms of media through considerations of the cultural environments within which they were produced. Students will gain a working knowledge of terms, methodologies, and themes in art history. Antirequisite(s): Art History 1640, the former VAH 1040. Extra Information: 2 lecture hours and 1 tutorial hour, or blended/online format.',
].join(' ');

const CourseInfo = () => (
  <Item.Group>
    <Item>
      <Item.Content header='AH 1642B - HISTORY OF ART & VISUAL CULTUR' description={description} />
    </Item>
  </Item.Group>
);

export default CourseInfo;
