import React from 'react';

import './TeamMemberBio.less';

interface TeamMemberBioProps {
    name: string;
    year: string;
    experience: string;
    role: string;
    interests: string;
    other?: string;
    reasons?: string;
}

const TeamMemberBio: React.FC<TeamMemberBioProps> = ({ name, year, experience, role, interests, other, reasons }) => {
    return (<>
        <div className="team-member-box rounded-box text-left">
            <h2>{name}</h2>
            <table className="team-member-info">
                <tbody>
                    <tr>
                        <td>Role:</td>
                        <td>{role}</td>
                    </tr>
                    <tr>
                        <td>School Year:</td>
                        <td>{year}</td>
                    </tr>
                    <tr>
                        <td>Past FTC experience:</td>
                        <td>{experience}</td>
                    </tr>
                    <tr>
                        <td>Interests:</td>
                        <td>{interests}</td>
                    </tr>
                    {reasons && (
                        <tr>
                            <td>Reasons for joining:</td>
                            <td>{reasons}</td>
                        </tr>
                    )}
                    {other && (
                        <tr>
                            <td>Anything else:</td>
                            <td>{other}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>);
}

export default TeamMemberBio;
