import './ProjectSummary.scss'

interface ProjectSummaryProps {
    img : string;
    title: string;
    summary : string;
}

const ProjectSummary = ({img, title, summary} : ProjectSummaryProps) => {
    return(
        <div className="ProjectSummary">
            <img className="ProjectSummary__img" src={img} alt={`Image for ${title}`} />
            <h4>{title}</h4>
            <p>{summary}</p>
        </div>
    )
}

export default ProjectSummary;