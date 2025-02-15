import { Link } from "react-router-dom";

import './Notebook.less';
import FadeInElement from "../../components/FadeInElement";

const NotebookNotImplemented = () => {
    return (
        <>
            <div className="block"></div>
            <FadeInElement className="content-section">
                <h1>Not Implemented</h1>
                <p>Sorry, this notebook page has no relevant content to display. Please check back later.</p>
                <Link className="btn notebook-back" to="/notebook">Back to Notebook</Link>
            </FadeInElement>
        </>
    );
}

export default NotebookNotImplemented;