import React from 'react';

import FadeInElement from '../../components/FadeInElement';

import './Notebook.less';
import TeamMemberBio from '../../components/TeamMemberBio';

// Louise Hardy
// Role: Team Lead/Outreach 

// School Year: 13

// Past FTC experience: Participated in Rover Ruckus (2018-2019), Skystone (2019-2020), Freight Frenzy (2021-2022)

// Reasons for joining the team: I really enjoyed the experience in my previous years of competing.

// Interests: Computer Science

// Anything else: -

// Team Member 1 Photo
// Team Member 2 Photo
// Team Member 3 Photo
// Team Member 6 Photo
// Team Member 7 Photo
// Erik Hurinek
// Role: Lead Programmer

// School Year: 13

// Past FTC experience: Freight Frenzy (2021-2022)

// Reasons for joining the team: Wanted to do better than last time.

// Interests: Computer Science

// Anything else: -

// Team Member 4 Photo
// Team Member 5 Photo
// Team Member 8 Photo
// Team Member 9 Photo
// Timur Perfilov
// Role: Programmer

// School Year: Y13

// Past FTC experience: None

// Reasons for joining the team: Interest in robotics.

// Interests: Maths, Computer Science

// Anything else: -

// Team Member 10
// Team Member 11 Photo
// Team Member 12 Photo
// Rayyan Ansari
// Role: Programmer

// School Year: Y12

// Past FTC experience: None

// Reasons for joining the team: Interest in robotics.

// Interests: Computer Science

// Anything else: -

// Team Member 13 Photo
// Team Member 14 Photo
// Oren Yushin
// Role: Claw Lead Engineer/Social media Manager

// School Year: Y13

// Past FTC experience: None

// Reasons for joining the team: Interest in robotics.

// Interests: Maths, Computer Science

// Anything else: -

// Team Member 15 Photo
// Team Leader Photo
// Team Mentor Photo
// Robert Ellard
// Role: Claw Engineer

// School Year: Y12

// Past FTC experience: None

// Reasons for joining the team:  Interest in robotics.

// Interests: Maths, Computer Science

// Anything else: -

// Vedant Joshi
// Role: Claw Engineer

// School Year: Y12

// Past FTC experience: None

// Reasons for joining the team: Interest in robotics.

// Interests: Maths, Computer Science

// Anything else: -

// Ivan Leung
// Role: Lift Engineer

// School Year: Y12

// Past FTC experience: None

// Reasons for joining the team: Interest in robotics.

// Interests: Maths, Computer Science

// Anything else: -

// Ewan Spencer
// Role: Lift engineer

// School Year: Y12

// Past FTC experience: None

// Reasons for joining the team: Interest in robotics.

// Interests: Computer Science

// Anything else: -

// James (surname?)
// Role: Lift Engineer

// School Year: Y12

// Past FTC experience: None

// Reasons for joining the team: Interest in robotics.

// Interests: Computer Science

// Anything else: -

// Hester Clapp
// Role: Drivetrain Engineer

// School Year: Y13

// Past FTC experience: None

// Reasons for joining the team: Done other robotics challenges before, and really enjoyed them.

// Interests: Trains and railway propulsion, web development

// Anything else: -

// Sadhbh Gorman
// Role: Drivetrain Engineer

// School Year: Y12

// Past FTC experience: None

// Reasons for joining the team: Interest in robotics.

// Interests: Computer Science

// Anything else: -

const Team = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="team-page content-section">
            <h1>Team</h1>
            <br/>
            <div className="team-grid">
                <TeamMemberBio name="Louise Hardy" year="13" experience="Participated in Rover Ruckus (2018-2019), Skystone (2019-2020), Freight Frenzy (2021-2022)" role="Team Lead" interests="Computer Science" other="" />
                <TeamMemberBio name="Erik Hurinek" year="Y13" experience="Freight Frenzy (2021-2022)" role="Lead Software Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="Timur Perfilov" year="Y13" experience="None" role="Software Engineer" interests="Maths, Computer Science" other="" />
                <TeamMemberBio name="Rayyan Ansari" year="Y12" experience="None" role="Software Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="Vedant Joshi" year="Y12" experience="None" role="Claw Engineer" interests="Maths, Computer Science" other="" />
                <TeamMemberBio name="Robert Ellard" year="Y12" experience="None" role="Claw Engineer" interests="Maths, Computer Science" other="" />
                <TeamMemberBio name="James" year="Y12" experience="None" role="Lift Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="Hester Clapp" year="Y13" experience="None" role="Drivetrain Engineer" interests="Trains and railway propulsion, web development" other="" />
                <TeamMemberBio name="Ewan Spencer" year="Y12" experience="None" role="Lift Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="Ivan Leung" year="Y12" experience="None" role="Lift Engineer" interests="Maths, Computer Science" other="" />
                <TeamMemberBio name="Sadhbh Gorman" year="Y12" experience="None" role="Drivetrain Engineer" interests="Computer Science" other="" />
                <TeamMemberBio name="Oren Yushin" year="Y13" experience="None" role="Claw Lead Engineer/Social media Manager" interests="Maths, Computer Science" other="" />
            </div>
        </FadeInElement>
    </>)
};

export default Team;