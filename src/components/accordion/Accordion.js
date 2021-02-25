import React, { useState } from "react";

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const expandItem = (index) => {
        setActiveIndex(index);
    }

    const renderedAccordion = items.map(( { title , content }, index )=> {

        const active = index === activeIndex ? "active" : "";

        return  <React.Fragment key={title}>
            <div 
                className={`title ${active}`}
                onClick={ () => expandItem(index)}
            >
                <i className="dropdown icon"></i>
                {title}
            </div>
            <div className={`content ${active}`}>
                {content}
            </div>
        </React.Fragment>
    });
    return (
        <div className="ui styled accordion">
            {renderedAccordion}
        </div>
    );
};

export default Accordion;