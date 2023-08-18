import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
    const accordionStyle = {
        boxSizing: 'border-Box',
        heigth: '78px',
        marginBottom: '24px',
        borderRadius: '10px',
        backgroundColor: 'var(--black-color)',
        border: '1px solid var(--white-color)',
        marginLeft:'0px'

    };
    const typoStyle1 = {
        boxSizing: 'border-Box',
        color: 'var(--white-color)',
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal', padding: '12px 12px'
    }
    const AccordionStyle2 = {
        boxSizing: 'border-Box',
        color: 'var(--black-color)',
        backgroundColor: 'var(--white-color)',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        padding: '24px 28px',
        borderRadius: '0px 0px 10px 10px',

    }

    const buttonStyle = {
        color: 'var(--primary-color)',
        textAlign: 'right',
        fontFeatureSettings: "'clig' off, 'liga' off",
        fontFamily: 'Font Awesome 6 Pro',
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: '900',
        lineHeight: 'normal',
        letterSpacing: '0.15px'
    }

    return (
        <div>
            <Accordion style={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={buttonStyle} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={typoStyle1}>Is QTify free to use?</Typography>
                </AccordionSummary>
                <AccordionDetails style={AccordionStyle2}>
                    <Typography>
                        Yes! It is 100% free, and has 0% ads!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={buttonStyle} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={typoStyle1}>Can I download and listen to songs offline?</Typography>
                </AccordionSummary>
                <AccordionDetails style={AccordionStyle2}>
                    <Typography>
                    Sorry, unfortunately we don't provide the service to download any songs.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </div >
    );
}