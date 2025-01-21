import React from 'react'
import styles from '../ComingSoon/Coming.module.css'

import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function HButton(props) {
    function link() {
        if (props.url) {
            window.open(props.url, '_blank')
        }
    }
    return (
        <>
            <button
                className={styles.btnh}
                onClick={(event) =>
                    link()
                }
            >
                {props.name}&emsp;{props.icon}
            </button>
        </>
    )
}
export function HButtonLight(props) {
    return (
        <>
            <button
                className={styles.btnhl}
                onClick={async(event) => {
                    props.clear();

                    await fetch('https://api.useplunk.com/v1/send', {
                        method: 'POST',
                        body: JSON.stringify({
                            to: "panchadip125@gmail.com",
                            subject: `Contact Form Message`,
                            body: `Name: ${props.values[0]} | Email:  ${props.values[1]} | Message: ${props.values[2]}`
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer sk_b4eed4c94a1818a80f7f0ae63d0ad58fea9f6bccfe693b06',
                        },
                    });
                    
                    alert("Message Sent Successfully")
                }}
            >
                {props.name}
            </button>
        </>
    )
}
