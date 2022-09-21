import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import LukeMutherResume from '../LukeMutherResume.pdf'

const Resume = () => {
    return (
        <>
            <Document file={LukeMutherResume} style={{margin:"inherit", width:"inherit", height:"inherit"}}>
                <Page pageNumber={1}/>
            </Document>
        </>
        
    )
}

export default Resume;