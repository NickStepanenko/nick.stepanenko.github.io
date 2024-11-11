import { useState } from 'react';
import { Flex, Typography } from "antd";
const { Text, Paragraph } = Typography;

const JobDesc = (props = {}) => {
    const {
        companyName = "",
        jobType = "",
        startDate = "",
        endDate = "",
        location = "",
        desc = "",
    } = props;

    return(<Flex vertical>
        <Text>{companyName} - {jobType}</Text>
        <Text type="secondary">{startDate} - {endDate}</Text>
        <Text type="secondary">{location}</Text>
        <Paragraph>{desc}</Paragraph>
    </Flex>);
}

export default JobDesc;