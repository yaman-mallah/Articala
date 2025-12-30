import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FaqAccordion = ({ faqData,catID }) => {
    // console.log(faqData)
    let [renderedData,setRenderedData]=useState([])
   
    
    useEffect(()=>{
        // console.log('faq')
             setRenderedData(()=>{
            let cats=[];
            faqData.forEach((e)=>{
                if(e.category_id==catID)
                    cats.push(e)
            })
            return cats
        })
    },[catID,faqData]);

   
    // useEffect(()=>{
    //     console.log(renderedData)
    // },[renderedData])
   

    return (
        <Accordion defaultActiveKey="0"  >
       { renderedData.map((e, index) => {
            const cleanBody = e.body.replace(/<[^>]+>/g, "");
            return(
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>
                    <p
                    className='titleMid'
                    >

                        {e.title}
                    </p>
                    </Accordion.Header>
                    <Accordion.Body>
                        {cleanBody}
                    </Accordion.Body>
                </Accordion.Item>
            )
        })}
            </Accordion>

    )
}

export default FaqAccordion