import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Values.css';
import data from '../../utils/accordion';

const Values = () => {
    // Define state to track expanded/collapsed state of each accordion item
    const [expandedItems, setExpandedItems] = useState(Array(data.length).fill(false));

    const toggleAccordion = (index) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[index] = !newExpandedItems[index];
        setExpandedItems(newExpandedItems);
    };

    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give To You</span>
                    <span className="secondarytext">
                        We are always ready to provide the best services for you.
                        <br />
                        We believe a good place to live can make your life better.
                    </span>
                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {data.map((item, i) => (
                            <AccordionItem className={`accordionItem ${expandedItems[i] ? 'expanded' : 'collapsed'}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton" onClick={() => toggleAccordion(i)}>
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Values;