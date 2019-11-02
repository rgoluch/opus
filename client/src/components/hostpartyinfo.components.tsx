import React, { Component } from 'react';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
import { Form, Input, Button } from 'antd';
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

    handlePartyNameChange = (event: any) => {this.setState({partyName: event.value})}
    handlePhoneNumChange = (event: any) => {this.setState({phoneNumber: event.target.value})}

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
            <Form>
                <FormItem label="Spotify Log In">
                        <Input type="text" value={this.state.partyName} onChange={this.handlePartyNameChange}/>
                </FormItem>
                <FormItem label="Party Name">
                        <Input type="text" value={this.state.partyName} onChange={this.handlePartyNameChange}/>
                </FormItem>
                <FormItem label="Phone Number">
                        <Input type="text" value={this.state.phoneNumber} onChange={this.handlePhoneNumChange}/>
                </FormItem>
            </Form>
            </>
        )
    }

    render(){
        const {hostSelected} = this.state;
        return(
            <>
            <Button type="primary" onClick={this.handleHostClick}>Host Party</Button>
            {hostSelected?this.renderHostSelected() : <> </>}
            </>
        )
    }

}