import ItemList from '../item-list';
import educationContent from './education-content';
import Title from '../title';

export default function Education() {
  return (
    <div className="Education u-space-y-large">
      <div className="container">
        <Title>Education</Title>
        <ItemList listItems={educationContent} />
      </div>
    </div>
  );
}
