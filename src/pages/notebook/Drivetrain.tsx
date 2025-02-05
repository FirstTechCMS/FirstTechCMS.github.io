import React from "react";

import FadeInElement from "../../components/FadeInElement";

import "./Notebook.less";
import { Link } from "react-router-dom";

const Drivetrain = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="content-section">
            <h1>Drivetrain Design</h1>
            <Link className="btn notebook-back" to="/notebook">Back to Notebook</Link>
        </FadeInElement>
        <FadeInElement className="horizontal-pad pad-bottom">
            <div className="rounded-box">
                <h3>1. Objectives and Requirements</h3>
                <p>The drivetrain is one of the most important parts of the robot. It allows the robot to move, provides a chassis which all of the other components can be assembled onto, and acts a hub to connect everything together and interface them with software.</p>

                <p>The robot requires a fine balance of speed and torque to ensure it is powerful yet easily controllable. It must have sufficient force to move the whole robot, and doing so quickly will provide a competitive edge over other alliances.</p>

                <p>This year's challenge also requires robots to reach for blocks that are far away, and place them high up. This warrants for a large arm assembly that requires a study base to ensure the robot does not topple over.</p>

                <p>To prevent damage to and from other robots, the drivetrain must be sturdy in design, ensuring the robot is unlikely to be incapacitated or accidentally hinder gameplay for other teams.</p>

                <p>In the starting configuration, the robot base must be fit inside an 18-inch square, or 45.7cm length and breadth. There is also a height restriction of 18 inches but the drivetrain is unlikely to be affected by this constraint.</p>

                <p>Additionally, the robot must be powered by a 12V Nickel-metal Hydride battery, which limits the maximum power output of the robot. This power will also need to be used by other components such as the arm, claw and lift.</p>
            </div>
        </FadeInElement>
        <FadeInElement className="horizontal-pad pad-bottom">
            <div className="rounded-box">
                <h3>2. Initial Research and Design Conceptualization</h3>
                <p>A number of wheel configurations were considered for the base of the robot. The simplest of these was a tank drive configuration, consisting of two large powered wheels on either side of the robot, which can be spun at different velocities to achieve a turning effect.</p>

                <p>While this design is very simple, the major issue is with the balance of the robot. Since only two wheels are powered, additional non-driven wheels would need to be added to stop the robot from pitching up and down.</p>

                <p>We considered using castor wheels, similar to those found on shopping trolleys, and place them in each corner of the robot to allow free motion in all directions. The major downside with this would be getting the robot level: the wheels must be raised slightly to ensure the driven wheels still have enough friction with the ground to move the robot. As such it would be impossible to completely prevent pitching, and the robot would rock back and forth as it moved the arm. Correcting for this using software would be very difficult, so we instead decided that a tricycle configuration would be needed.</p>

                <p>Our second design idea involved moving the driven wheels to the front of the robot, and placing an omni wheel at the back perpendicular to the others, to provide 3 points of contact, allowing the robot to remain steady. The omni wheel could be driven to create a large turning moment and allow the robot to pivot easily about its centre of mass, allowing for great maneuverability.</p>

                <p>As we thought about this in practice however, it became apparent that a tricycle wheel arrangement would be too restrictive on the other components of the robot. Since the centre of mass must lie within the wheelbase of the robot, placing too much weight towards the rear corners of the drivetrain could cause the robot to topple, so the lift and arm would have to be located at the front. However, since the driven wheels were also at the front, the real estate would have to be shared with the motors, control hub and everything else, limiting the available space on board. As such, this idea was discarded too.</p>

                <p>It soon became clear that the robot would need a large, consistent wheelbase to maximise usable space and provide traction with the wheels. This could only really be achieved with 4 wheels in a rectangular formation. We decided to have all wheel drive to prevent rocking and maximise traction, but this meant we had to figure out a drive configuration. Tank drive would not work with 4 wheels since not all of them would be moving straight.</p>

                <p>Abiding by the constraints of the parts we had, it would be infeasible to rotate the frame to steer. We could have used omni wheels for the back wheels, although the front wheels and centre of mass would be far apart, causing a suboptimal turning moment. What we really wanted was a set of mecanum wheels, providing 2 degrees of linear freedom and allowing the robot to rotate on the spot, but budget constraints meant we would have to 3D print our own.</p>

                <p>We shared our concerns at the London scrimmage, where the organisers kindly provided us with a set of off-the-shelf mecanum wheels, and lent us an expansion hub to allow for 4-wheel drive and use other motors elsewhere on the robot. These wheels had high traction and very low rolling resistance, perfect for our drivetrain needs!</p>

                <p>On the journey back to Cambridge however, one of the wheels was damaged. The C-ring fell out and got lost, causing one of the axles to become loose and enabling the roller to slide off. We considered a number of DIY fixes including 3D printing, soldering and gluing, but in the end we were able to find the correct dimensions to order a replacement C-ring and fix the wheel without risk of damaging it further.</p>
            </div>
        </FadeInElement>
        <FadeInElement className="horizontal-pad">
            <div className="rounded-box">

                <h3>3. Iterative Prototyping</h3>

                <p><b>Component Selection</b></p>
                <ul>
                    <li>Motors: Which motors did you choose, and why?</li>
                    <li>Gear Ratios: What trade-offs did you consider (e.g., torque vs. speed)?</li>
                    <li>Wheels: What type of wheels and material were selected (e.g., traction, omni, pneumatic)?</li>
                </ul>

                <p>After sourcing wheels and motors, we opted for an iterative, agile design process of building prototypes, finding flaws and redesigning them. The first of these was a simple rectangular frame made of two 420mm extrusion frames along the sides, and two 248mm frames at the front and back. The purpose of this prototype was to get familiar with the kit and work out approximate component sizes. </p>

                <p>We found that we had underestimated the size of the motors and it would be difficult to fit them both in. With two motors at the front and at the back, there was very little space for anything else except for in the middle, which would be limiting to the range of the claw. We decided that we would need to make free space at the front, and concentrate the motors at the back or to the sides.</p>

                <p>We could think of two possible solutions to this: chain drives or bevel gears. Chain drives would allow us to place motors at the rear and drive wheels at the front remotely, while bevel gears could convert the rotation of the motors around a corner, meaning the motors could be placed longitudinally.</p>

                <p>While we had a chain in the kit, we did not have any bevel gears and would have to 3D print our own. We struggled to get the geometry right in CAD, and were unsure about whether the gears would be strong enough to support the high-torque requirements of the motor. As such, we decided chain drives would be the more suitable option.</p>

                <p>The second prototype was a similar frame to the first, but with two 420mm frames with a space between them. We could fit the motors on the inside at the rear, sprockets and chain drives in the enclosed space between the frames, and finally place the wheels on the outside. However, this design suffered from a fatal flaw, being that the total width of the robot was now exceeding the 18 inch breadth specified in the rules.</p>

                <p>To get around the width constraint, we tried making the robot taller. Instead of using frames, we replaced them with 420mm extrusion, and placed the motor brackets underneath. This would then enable us to place claw components on top of the motors, and potentially give us an advantage over other robots when reaching for the high baskets.</p>

                <p>This prototype got quite far into the construction process, with the whole chassis being built in a single 3-hour sprint. We decided to connect all of the motors to the control hub in order to test the software for the first time. This was somewhat successful and beneficial to the development of the code, however the physical build still had some issues.</p>

                <p>Since we were using extrusion, the central beams were slightly shorter than the frames, which meant the motors had to be placed slightly closer together. This made it almost impossible to connect them without bending the wires. Additionally, the wheels were directly connected to the motor with no additional support, which placed a lot of shear stress on the rotor. We were reluctant to cause long-term damage to the electrical components since we did not have the budget to replace them, and so a new design would be needed.</p>

                <p>A revision of the internal chain drive design was made, by making the enclosed cavity larger to fit the wheels inside it. This would allow extra support for the wheel to reduce stress on the motor, and create a large cavity at the front with the motors concentrated at the back. </p>
            </div>
        </FadeInElement>
        <FadeInElement className="content-section">
                <img src="njRbhq8QXL.jpg" className="rounded" />
        </FadeInElement>
        <FadeInElement className="horizontal-pad pad-bottom">
            <div className="rounded-box">
                <h3>4. Final Design</h3>

                <p>This design was, to our knowledge, going to be the final design for use on the finished robot. As such, more care was taken in the design process, to ensure the design was well-specified and easy to build.</p>

                <p>The two rear wheels would be directly driven by two motors at the back. Then, in the middle would be two 248mm pieces of extrusion frame, connected with 90 degree brackets. The two other motors would sit between these and the control and expansion hubs would sit on top on either side. The middle motors were connected to 15 tooth sprockets, to which the chain drives would attach, and 10 tooth sprockets at the front connected to the front wheels. The remaining 420mm frames would then enclose the whole robot, interfacing with the axles via through-bore bearings to provide support to the wheels. This also had the added benefit of protecting the wheels from obstacles and other robots.</p>

                <p>Since the cavity was now larger than the standard size, we would have to make custom end-caps to connect the outer frames to the robot core. The frames would also be held on by the control hubs.</p>
            </div>
        </FadeInElement>
        <FadeInElement className="horizontal-pad pad-bottom">
            <div className="rounded-box">

                <h3>5. Challenges and Further Improvements</h3>

                <p>One of the major issues we ran into while building this frame was tensioning the chain drive correctly. Our first configuration was far too tight, exerting a large shear stress on the robot. We tested multiple chain drive configurations and lengths, but all of them suffered from the chain being extremely loose. This caused a large amount of mechanical slack, allowing the wheels to turn a significant amount while the motors were stationary. This made the robot hard to control as we could not precisely control the rotation of the wheels, hindering the efficacy of the mecanum wheel drivetrain.</p>

                <p>To solve this problem as best as we could, another sprocket was placed in the middle of the chain drive to increase the length of the chain and reduce slack. This was not 100% effective of course, but it allowed the robot to be somewhat more responsive. It did not seem that we had the correct parts to tension the chain any better.</p>
            </div>
        </FadeInElement>
    </>)
};

export default Drivetrain;