import Title from '../title';

export default function Other() {
  return (
    <div className="Other">
      <div className="container">
        <Title>Other</Title>
        <ul className="ItemList">
          <li>
            <span className="ItemList_Date">Language</span>
            <span className="ItemList_Detail">
              <div>
                <span className="u-text-bold">Norwegian, </span>
                <span>Native language</span>
              </div>
              <div>
                <span className="u-text-bold">English, </span>
                <span>professional level, written and spoken</span>
              </div>
              <div>
                <span className="u-text-bold">Spanish, </span>
                <span>professional level, written and spoken</span>
              </div>
            </span>
          </li>
          <li>
            <span className="ItemList_Date"> Core skills </span>
            <span className="ItemList_Detail">
              JavaScript, Typescript, Flow, React, NextJS, React Query, Redux, Graphql, Nodejs,
              Relay, html, css
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
