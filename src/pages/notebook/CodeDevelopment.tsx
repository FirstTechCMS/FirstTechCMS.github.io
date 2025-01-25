import React from "react";

import FadeInElement from "../../components/FadeInElement";

import "./Notebook.less";

const CodeDevelopment = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="content-section">
            <h1>Code Development</h1>
            <p>Our code is written in Java. We are using the FTC SDK to control our robot.</p>
        </FadeInElement>
        <FadeInElement className="horizontal-pad">
            <div className="rounded-box">
                <h3>Design Choices for FIRST Tech Challenge Software Architecture</h3>
                <br />
                <p>In designing our robot control system for the FIRST Tech Challenge, we emphasized modularity and maintainability by adopting <strong>dependency injection</strong> as a core architectural principle. The attached UML diagram illustrates our system's high-level structure, showing how the various components, such as controllers, providers, and commanders, interact while adhering to this approach.</p>
                <h4>Key Benefits of Dependency Injection</h4>
                <ol>
                    <li>
                        <strong>Separation of Concerns</strong><br />
                        By decoupling the initialization and management of dependencies from the business logic of each class, we ensured that each component in the system, such as the <code>DrivetrainController</code> or <code>SensorProvider</code>, could focus solely on its specific responsibilities. This separation simplifies testing and debugging while improving overall code clarity.
                    </li>
                    <li>
                        <strong>Enhanced Testability</strong><br />
                        Dependency injection allows us to provide mock implementations of interfaces like <code>IDrivetrainController</code> or <code>ISensorProvider</code> during unit testing. This ensures that individual components can be tested in isolation without requiring the full system to be operational.
                    </li>
                    <li>
                        <strong>Scalability and Flexibility</strong><br />
                        As the competition evolves, we may need to integrate new subsystems or modify existing ones. With dependency injection, adding or replacing components is straightforward. For instance, swapping the <code>GamepadCommander</code> with an alternative commander (like a voice control module) would involve minimal changes to the overall structure.
                    </li>
                    <li>
                        <strong>Centralized Dependency Management</strong><br />
                        The <code>RobotComponentStore</code> acts as a single registry for all components, ensuring consistency and ease of maintenance. This design choice allows us to register and resolve dependencies in one place, reducing the risk of configuration errors.
                    </li>
                    <li>
                        <strong>Runtime Configurability</strong><br />
                        Dependency injection provides the flexibility to configure the system dynamically based on the selected mode of operation <code>TeleOpMode</code> or <code>AutoMode</code>. The <code>OpMode</code> enumeration and its integration with the <code>RobotController</code> streamline the initialization of mode-specific dependencies.
                    </li>
                    <li>
                        <strong>Reduced Code Duplication</strong><br />
                        With interfaces like <code>IComponent</code>, shared behaviors can be abstracted across multiple implementations, such as the <code>ArmController</code> and <code>DrivetrainController</code>. This reduces redundant code and simplifies the implementation of new features.
                    </li>
                </ol>
            </div>
        </FadeInElement>
        <FadeInElement className="content-section">
            <div className="rounded-box">
                <img src="./FIRSTTechChallenge2025UML.svg" />
            </div>
        </FadeInElement>
        {/* <FadeInElement className="content-section">
            <div className="image-grid">
                <img src="https://placehold.co/300" className="rounded" />
                <img src="https://placehold.co/300" className="rounded" />
                <img src="https://placehold.co/300" className="rounded" />
                <img src="https://placehold.co/300" className="rounded" />
            </div>
        </FadeInElement> */}
        <FadeInElement className="horizontal-pad">
            <div className="rounded-box">
                <h3>First Drivetrain Test</h3>
                <br />
                <p>We were able to assess our drivetrain control once the drivetrain was assembled. It was necessary to invert the horizontal input axis due to a design misinterpretation that caused an incorrect wheel configuration. The robot was able to move in all directions as expected after this correction.</p>
                <p>The robot does not seem to be gaining good traction, leading to slippage during movement. A system to stabilise the robot's heading may be necessary.</p>
            </div>
        </FadeInElement>
        <div className="block"/>
    </>)
};

export default CodeDevelopment;