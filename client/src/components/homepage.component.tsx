import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import JoinPartyInfo from './joinpartyinfo.component';
import HostPartyInfo from './hostpartyinfo.components';

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
                {/* <Button type="primary" onClick={this.handleHostClick}>Host Party</Button> */}
                <HostPartyInfo />
                <br />
                <br />
                <JoinPartyInfo />
                {/* <Button type="danger" onClick={this.handleJoinClick}>Join Party</Button> */}
                {/* <JoinPartyInfo buttonClick={this.state.joinSelected} /> */}
            </div>
        )
    }
}