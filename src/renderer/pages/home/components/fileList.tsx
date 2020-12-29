import React,{ useState,useEffect,useRef } from 'react';
import propTypes from 'prop-types';
import styles from '../styles/index.less';


const FileList = ({files,onFileClick,onSaveEdit}) => {
    useEffect(() => {
        const handleInputEvent = (event) => {
            const { keyCode } = event;
            if(keyCode === 13) {

            } else {

            }
        }
        document.addEventListener('keyup',handleInputEvent);
        return () => {
            document.removeEventListener('keyup',handleInputEvent);
        }
    });
    return (<div></div>)
}

FileList.propTypes = {

}

export default FileList;

