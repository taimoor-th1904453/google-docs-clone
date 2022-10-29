import React from 'react'
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditDocs({ database }) {
    let params = useParams();


    return (
        <div>
            <h1>Edit Doc</h1>
            <ReactQuill />
        </div>
    )
}