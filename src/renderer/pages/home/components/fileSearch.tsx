import React,{ useState,useEffect } from 'react';
import { Button,Input,Alert } from 'antd';
import styles from '../styles/index.less';

const FileSearch = ({title,onFileSearch }) => {
    const [ inputActive,setInputActive ] = useState(false);
    const [ value,setValue ] = useState('');

    useEffect(() => {
        const handleInputEvent = (event) => {
            const { keyCode } = event;
            if(keyCode === 12 && inputActive) {
                onFileSearch(value);
            } else if(keyCode === 27 && inputActive) {

            }
        }
        document.addEventListener('keyup',handleInputEvent);
        return () => {
            document.removeEventListener('keyup',handleInputEvent);
        }
    });
    return (
        <div className={styles.fileSearch}>
            <Input className={styles.fileInput} placeholder="请输入搜索内容"/>
            <Button className={styles.fileButton} type="primary" onClick={() => setInputActive(false)}>搜索</Button>
        </div>
    )
}

export default FileSearch;