import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ModalComponent from './modalComponent'
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export default function Docs({ database }) {
    let navigate = useNavigate();


    const [docsData, setDocsData] = useState([]);
    const [title, setTitle] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const collectionRef = collection(database, 'docsData')

    const isMounted = useRef()

    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            setDocsData(data.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }

            }))
        })
    }

    useEffect(() => {
        if (isMounted.current) {
            return
        }
        isMounted.current = true;
        getData()
    }, [])


    const addData = () => {
        addDoc(collectionRef, {
            title: title,
            docDesc: ''
        })
            .then(() => {
                alert('Data Added')
                handleClose()
            })
            .catch(() => {
                alert('Cannot add data')
            })
    }

    const getID = (id) => {
        navigate(`/editDocs/${id}`)
    }

    return (
        <div className='docs-main'>
            <p>Docs</p>
            <button className='add-docs' onClick = {handleOpen}>
                Add a Document
            </button>
            <div  className='grid-main'>
                {docsData.map((doc) => {
                    return (
                        <div key ={doc.title} className='grid-child' onClick={() => getID(doc.id)}>
                            <p>{doc.title}</p>
                            <div dangerouslySetInnerHTML={{__html: doc.docsDesc}} />
                        </div>
                        
                    )
                    
                })}
                
            </div>
            <ModalComponent 
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            />
        </div>
    )
}