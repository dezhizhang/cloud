import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const TabList = (props) => {
    const {files,activeId,unsaveIds,onTabClick,onCloseTab} = props;
    console.log('files',files)
    return (
        <>
        <Tabs
            hideAdd
            onChange={this.onChange}
            activeKey={activeId}
            type="editable-card"
            onEdit={this.onEdit}
        >
        {files.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
                {pane.content}
            </TabPane>
        ))}
        </Tabs>
        </>
    )
   
}

TabList.propTypes = {
    files:PropTypes.array,
    activeId:PropTypes.string,
    unsaveIds:PropTypes.array,
}

export default TabList;
