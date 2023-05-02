import { useState } from 'react';
import './Tours.css';

function Card({tour, removeTour}) {
    
    const [readMore, setReadMore] = useState(false);
    const description = readMore ? tour.about : tour.about.substr(0, 200) + '...';

    function readMoreHandler() {
        setReadMore(!readMore);
    }
    
    return (
        <div className='card'>
            <img src={tour.imageURL} className='image'></img>

            <div className='tour-info'>
                <div className='tour_details'>
                    <h4 className='tour_price'>{tour.cost}</h4>
                    <h4 className='tour_name'>{tour.name}</h4>
                </div>

                <div className='description'>
                    {description}
                    <span className='read_more' onClick={readMoreHandler}>
                        {readMore ? "Show Less" : "Read More"}
                    </span>
                </div>
            </div>

            <button className='button_red' onClick={() => removeTour(tour.id)}>
                Not Interested
            </button>
            
        </div>
    );
}

export default Card;