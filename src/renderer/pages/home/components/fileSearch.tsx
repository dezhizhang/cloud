import React,{ useState } from 'react';
import { Button,Input,Alert } from 'antd';
import styles from '../styles/index.less';

const FileSearch = ({title,onFileSearch }) => {
    const [ inputActive,setInputActive ] = useState(false);
    const [ value,setValue ] = useState('');

    return (
        <div>
            {   !inputActive && 
                <div >
                    <span>{title}</span>
                    <Button type="primary" onClick={() => setInputActive(true)}>搜索</Button>
                </div>
            }
            {
                inputActive &&
                <div>
                    <Input placeholder="请输入搜索内容"/>
                    <Button type="primary" onClick={() => setInputActive(false)}>关闭</Button>
                </div>
            }
        </div>
    )
}

export default FileSearch;