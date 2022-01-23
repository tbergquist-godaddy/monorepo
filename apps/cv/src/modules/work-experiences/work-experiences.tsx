import Title from '../title';
import ItemList from '../item-list';
import workExperienceContent from './work-experience-content';

export default function WorkExperiences() {
  return (
    <div className="WorkExperiences">
      <div className="container">
        <Title>Work experiences</Title>
        <ItemList listItems={workExperienceContent} />
      </div>
    </div>
  );
}
