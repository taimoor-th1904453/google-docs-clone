import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ModalComponent from './modalComponent'
import { addDoc, collection, onSnapshot } from 'firebase/firestore';




export default function Docs({ database }) {

    const [docsData, setDocsData] = useState([]);
    const [title, setTitle] = useState('')
    const [open, setOpen] = React.useState(true);
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
            title: title
        })
            .then(() => {
                alert('Data Added')
                handleClose()
            })
            .catch(() => {
                alert('Cannot add data')
            })
    }

    return (
        <div className='docs-main'>
            <p>Docs</p>
            <button className='add-docs'>
                Add a Document
            </button>
            <div  className='grid-main'>
                {docsData.map((doc) => {
                    return (
                        <div key ={doc.title} className='grid-child'>
                            <p>{doc.title}</p>
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