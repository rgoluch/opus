import React, { Component } from 'react';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
import { Form, Input, Button, Layout, Row, Col } from 'antd';
const { Content } = Layout;

// import { render } from 'react-dom';

interface IHostPartyInfoProps {
    onClick?: React.FormEventHandler<any>;
}

interface IHostPartyInfoState{
    partyName : String,
    phoneNumber : String,
    hostSelected : Boolean,
    spotifyUserName : String,
    spotifyPassWord : String
}

export default class HostPartyInfo extends React.Component<IHostPartyInfoProps,IHostPartyInfoState>{
    state = {
        partyName : "",
        phoneNumber : "",
        hostSelected : false,
        spotifyUserName : "",
        spotifyPassWord : ""
    }

    handlePartyNameChange = (event: any) => {this.setState({partyName: event.target.value})}
    handlePhoneNumChange = (event: any) => {this.setState({phoneNumber: event.target.value})}
    handleSpotifyUsernameChange = (event: any) => {this.setState({spotifyUserName: event.target.value})}
    handleSpotifyPasswordChange = (event: any) => {this.setState({spotifyPassWord: event.target.value})}

    handleHostClick = (e: any) =>{
        const {hostSelected} = this.state
        this.setState({
            hostSelected: !hostSelected
        })
        console.log("event")
    }

    renderHostSelected = () =>{
        return(
            <>
            <Row>
                <Col span = {50}>
                    <Layout>
                        <Content >
                            <Form>
                                <FormItem label="Spotify Log In">
                                <label>
                                    User Name
                                    <Input title="User Name" type="text" value={this.state.spotifyUserName} onChange={this.handleSpotifyUsernameChange}/>
                                </label>
                                <label>
                                    Password
                                    <Input title="Password" type="password" value={this.state.spotifyPassWord} onChange={this.handleSpotifyPasswordChange}/>
                                </label>
                                </FormItem>
                                <FormItem label="Party Name">
                                    <Input type="text" value={this.state.partyName} onChange={this.handlePartyNameChange}/>
                                </FormItem>
                                <FormItem label="Phone Number">
                                    <Input type="text" value={this.state.phoneNumber} onChange={this.handlePhoneNumChange}/>
                                </FormItem>
                                <Row type="flex" justify="end" align="middle">
                                    <Button type="primary" shape="round">Start Party!</Button>
                                </Row>
                            </Form>
                        </Content>
                    </Layout>
                </Col>
            </Row>
            </>
        )
    }

    render(){
        const {hostSelected} = this.state;
        return(
            <>
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Button type="primary" size="large" onClick={this.handleHostClick}>Host Party</Button>
                </Col>
            </Row>
            {hostSelected?this.renderHostSelected() : <> </>}
            </>
        )
    }

}