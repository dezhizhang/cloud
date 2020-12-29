import React,{ useState } from 'react';
import { Button } from 'antd';
import styles from '../styles/index.less';

const FileSearch = ({title,onFileSearch }) => {
    const [ inputActive,setInputActive ] = useState(false);
    const [ value,setValue ] = useState('');

    return (
        <div>
            {   !inputActive && 
                <div className={styles.header}>
                    <span>{title}</span>
                    <Button type="primary" onClick={() => onFileSearch(true)}>搜索</Button>
                </div>
            }
        </div>
    )
}

export default FileSearch;