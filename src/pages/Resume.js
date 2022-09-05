import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import LukeMutherResume from '../LukeMutherResume.pdf'

const Resume = () => {
    return (
        <Document file={LukeMutherResume} size='LETTER'>
            <Page pageNumber={1} size='LEGAL'/>
        </Document>
    )
}

export default Resume;