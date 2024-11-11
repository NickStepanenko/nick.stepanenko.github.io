import { useState } from 'react';
import {
    Flex,
    Layout,
    Space,
    Card,
    Avatar,
    Steps,
} from 'antd';

import avatar from './avatar.jpg';

import JobDesc from '../../components/JobDesc';

const { Footer, Content } = Layout;

const jobExpItems = [
    {
        title: 'Software Engineer',
        description: <JobDesc
            companyName="Code Cube"
            jobType="Full-time"
            startDate="Nov 2022"
            endDate="Present (contracted with parent company)"
            location="Utrecht, Netherlands"
            desc={<ul>
                <li>Implementing company products in Google Cloud Platform.</li>
                <li>Working with Terraform infrastructure deployment system.</li>
                <li>BigQuery data storage management and SQL requests optimization.</li>
                <li>Working with Playwright (a modified Puppeteer library).</li>
                <li>Customer portal development with React.JS library (frontend) and Django (backend).</li>
                <li>Using Ant Design, Sass.</li>
                <li>Hosting containerized applications in Docker.</li>
            </ul>}
        />,
    },
    {
        title: 'Application Developer',
        description: <JobDesc
            companyName="Relevant Online"
            jobType="Full-time"
            startDate="May 2022"
            endDate="Present"
            location="Utrecht, Netherlands"
            desc={<ul>
                <li>Implementing SaaS solutions in Google Cloud Platform.</li>
                <li>Working with Terraform infrastructure deployment system.</li>
                <li>BigQuery data storage management and SQL requests optimization.</li>
                <li>Working with Playwright (a modified Puppeteer library).</li>
                <li>Unit tests (jest).</li>
                <li>Working with Ads API (Microsoft, Facebook).</li>
                <li>Hosting containerized applications in Docker.</li>
            </ul>}
        />,
    },
    {
        title: 'Website Developer',
        description: <JobDesc
            companyName="Gazprom-neft"
            jobType="Full-time"
            startDate="Sep 2018"
            endDate="Mar 2022"
            location="Saint-Petersburg, Russia"
            desc={<>
                <ul>
                    <li>Server side code development (JavaScript-like code with internal functions of WebTutor system).</li>
                    <li>Optimized and scalable database architecture.</li>
                    <li>Optimized queries working less than 3s with 100k+ entries with data from file system.</li>
                </ul>
                <p>Achievements:</p>
                <ul>
                    <li>A solid team with high quality of development and appreciation inside the company.</li>
                    <li>Highly involved in team work and solve complex tasks.</li>
                    <li>Reached the high quality of the MsSQL-queries and server-side code.</li>
                    <li>Implemented best practices for relative databases architecture.</li>
                </ul>
            </>}
        />,
    },
    {
        title: 'Learning System Administrator',
        description: <JobDesc
            companyName="Tele2 Russia"
            jobType="Full-time"
            startDate="Dec 2017"
            endDate="Sep 2018"
            location="Saint-Petersburg, Russia"
            desc={<>
                <p>Achievements:</p>
                <ul>
                    <li>Administrating company e-learning solution based on WebTutor system.</li>
                    <li>Highly involved in team activities and always been friendly to the customers and managers from other subdivisions.</li>
                    <li>Created many unique server-side scripts which allows education managers spend less time on their routine work with WebTutor system.</li>
                </ul>
            </>}
        />,
    },
    {
        title: 'Web Developer',
        description: <JobDesc
            companyName="Tele2 Russia"
            jobType="Full-time"
            startDate="Nov 2016"
            endDate="Dec 2017"
            location="Irkutsk, Russia"
            desc={<>
                <p>One of the developers of company IT solution for Tele2 Russia contact centre operators leads to:</p>
                <ul>
                    <li>Higher percent of additional sales of operators on the line (20% higher).</li>
                    <li>Higher involvement and less burnout of the operators.</li>
                    <li>Better control tools of operators work for teams management stuff.</li>
                    <li>Positive atmosphere inside the successfull, young and highly motivated team of like-minded people.</li>
                </ul>
            </>}
        />,
    },
    {
        title: 'Call Centre Operator',
        description: <JobDesc
            companyName="Tele2 Russia"
            jobType="Full-time"
            startDate="Nov 2022"
            endDate="Present"
            location="Irkutsk, Russia"
            desc={<p>Call Centre Operator highly involved in all team's activities, worked hard to learn how to solve other people problems with mobile services.</p>}
        />,
    },
];


const skillsChartData = [
    {
        name: "Node.JS",
        value: 99,
    },
    {
        name: "React.JS",
        value: 97,
    },
    {
        name: "SQL",
        value: 95,
    },
    {
        name: "CSS & SASS",
        value: 85,
    },
    {
        name: "Google Cloud",
        value: 90,
    },
    {
        name: "Python",
        value: 78,
    },
    {
        name: "Django",
        value: 70,
    },
    {
        name: "Docker",
        value: 86,
    },
]

const MainPage = () => {
    return (
        <>
            <Layout>
                <Content>
                    <Flex gap={20} justify="center" vertical style={{ margin: "0 auto", padding: "0 25%" }}>
                        <Space align="center">
                            <Card
                                loading={false}
                                actions={null}
                                style={{
                                    minWidth: 300,
                                }}
                            >
                                <Card.Meta
                                    avatar={<Avatar src={avatar} size="large" />}
                                    title="Nick Stepanenko"
                                    description={
                                        <>
                                            <p>Software Engineer</p>
                                            <p>31 y.o.</p>
                                        </>
                                    }
                                />
                            </Card>
                        </Space>
                        <Space>
                            <Steps
                                progressDot
                                current={5}
                                direction="vertical"
                                items={jobExpItems}
                            />
                        </Space>
                        <Space>

                        </Space>
                    </Flex>

                </Content>
                <Footer></Footer>
            </Layout>
        </>
    );
}

export default MainPage;
