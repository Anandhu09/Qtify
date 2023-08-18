import { Accordion } from '@mui/material'
import React from 'react'
import BasicAccordion from "../Accordion/Accordion"
import "./Footer.css"
export const Footer = () => {
    return (
        <div className='footer_top'>
            <div className='Faq'>
                <h1 className='heading'>FAQs</h1>
            </div>
            <div class="accordion">
                <BasicAccordion />
            </div>
        </div>
    )
}
