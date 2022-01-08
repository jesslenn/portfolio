import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    These are some of the technologies I've worked with...
  </SectionText>
  <List>
    <ListItem>
      <DiReact size = "3rem"/>
      <ListContainer>
        <ListTitle>Front End</ListTitle>
        <ListParagraph>
          Experience with: <br />
          React.js <br />
          Redux <br />
          Bootstrap <br />
          styled components <br />
          Material UI <br />
          HTML <br />
          CSS <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size = "3rem"/>
      <ListContainer>
        <ListTitle>Back End</ListTitle>
        <ListParagraph>
          Experience with: <br />
          Express.js <br />
          SQL <br />
          PostgreSQL <br />
          Sequelize <br />
          Node.js  <br />
          Firebase <br />
          NoSQL Databases <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size = "3rem"/>
      <ListContainer>
        <ListTitle>Mobile and Cloud</ListTitle>
        <ListParagraph>
          Experience with: <br />
          React Native <br />
          Google Vision API <br />
          Google Cloud Services <br />
          Expo <br />
          XCode <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
