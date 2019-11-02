import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Layout } from 'antd';
import JoinPartyInfo from './joinpartyinfo.component';
import HostPartyInfo from './hostpartyinfo.components';
const { Content } = Layout;
export default class HomePage extends React.Component{
    
    state = {
        hostSelected: false,
        joinSelected: false,
    }

    handleJoinClick = (e: any) =>{
        this.setState({
            joinSelected: true
        })
    }

    handleHostClick = (e: any) =>{
        this.setState({
            hostSelected: true
        })
    }

    render(){
        return(
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col>
                        <HostPartyInfo />
                    </Col>
                </Row>
                <br />
                <Row type="flex" justify="center" align="top">
                    <Col >
                        <JoinPartyInfo />
                    </Col>
                </Row>
            </div>
        )
    }
}