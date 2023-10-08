import "./ProjectCarousel.scss";
import Slider from "react-slick";

const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
    centerMode: false, 
};

interface ProjectCarouselProps {
	imageSources: string[];
	title: string;
}

const ProjectCarousel = ({ imageSources, title }: ProjectCarouselProps) => {
	return (
		<div className="ProjectCarousel">
			<Slider {...settings}>
				{imageSources &&
					imageSources.map((image) => (
						<div className="ProjectCarousel__img__container" >
							<img
								className="ProjectCarousel__img"
								src={image}
								alt={`Image for ${title}`}
								loading="lazy"
							/>
						</div>
					))}
			</Slider>
		</div>
	);
};

export default ProjectCarousel;
