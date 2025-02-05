import React from 'react';

import FadeInElement from '../../components/FadeInElement';

import './Notebook.less';
import TeamMemberBio from '../../components/TeamMemberBio';
import { Link } from 'react-router-dom';

const Team = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="team-page content-section">
            <h1>Team</h1>
            <p>Members of the CRAB robotics team.</p>
            <Link className="btn notebook-back" to="/notebook">Back to Notebook</Link>
            <br/>
            <div className="team-grid">
                <TeamMemberBio name="Louise Hardy" year="13" experience="Rover Ruckus (2018-2019), Skystone (2019-2020), Freight Frenzy (2021-2022)" role="Team Lead" interests="Computer Science" other="" />
                <TeamMemberBio name="Erik Hurinek" year="13" experience="Freight Frenzy (2021-2022)" role="Lead Software Engineer" interests="Software Development, 3D Rendering, AI" other="" />
                <TeamMemberBio name="Timur Perfilov" year="13" experience="None" role="Software Engineer" interests="Maths, Computer Science" other="" />
                <TeamMemberBio name="Rayyan Ansari" year="12" experience="None" role="Software Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="Oren Yushin" year="13" experience="None" role="Social Media Manager" interests="Maths, Computer Science" other="" />
                <TeamMemberBio name="Hester Clapp" year="13" experience="None" role="Drivetrain Engineer" interests="Trains, Web development" other="" />
                <TeamMemberBio name="Sadhbh Gorman" year="12" experience="None" role="Drivetrain Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="James" year="12" experience="None" role="Lift Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="Ewan Spencer" year="12" experience="None" role="Lift Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="Ivan Leung" year="12" experience="None" role="Lift Engineer" interests="Maths, Computer Science" other="" />
                <TeamMemberBio name="Vedant Joshi" year="12" experience="None" role="Claw Engineer" interests="Maths, Computer Science, CAD" other="" />
                <TeamMemberBio name="Robert Ellard" year="12" experience="None" role="Claw Engineer" interests="Maths, Computer Science" other="" />
            </div>
        </FadeInElement>
    </>)
};

export default Team;