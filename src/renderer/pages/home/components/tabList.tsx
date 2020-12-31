import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const TabList = ({files,activeId,unsaveIds,onTabClick,onCloseTab}) => {
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
    unsaveIds:PropTypes.string,
}

export default TabList;
