import PersonalInformation from './modules/personal-information';
import Education from './modules/education';
import WorkExperiences from './modules/work-experiences';
import Other from './modules/other';
import AboutMe from './modules/about-me';

export default function App() {
  return (
    <div className="Curriculum">
      <PersonalInformation />
      <Education />
      <WorkExperiences />
      <Other />
      <AboutMe />
    </div>
  );
}
