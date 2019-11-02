import React, { Component } from 'react';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
import { Form, Input, Button } from 'antd';
// import { render } from 'react-dom';

interface IJoinPartyInfoProps {
    onClick?: React.FormEventHandler<any>;
}

interface IJoinPartyInfoState{
    partyName : String,
    phoneNumber : String,
    joinSelected : Boolean,
    hostSelected : Boolean
}

export default class JoinPartyInfo extends React.Component<IJoinPartyInfoProps,IJoinPartyInfoState>{
    state = {
        partyName : "",
        phoneNumber : "",
        joinSelected : false,
        hostSelected : false
    }

    handlePartyNameChange = (event: any) => {
        this.setState({
            partyName: event.value
        })
    }

    handlePhoneNumChange = (event: any) => {
        this.setState({
            phoneNumber: event.target.value
        })
        console.log(event)
    }

    handleJoinClick = (e: any) =>{
        const {joinSelected} = this.state
        this.setState({
            joinSelected: !joinSelected
        })
        console.log("event")
    }
    
    renderJoinSelected = () =>{
        console.log("Hello")
        return(
            <>
            <Form>
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
        const {joinSelected} = this.state;
        return(
            <>
            <Button type="danger" onClick={this.handleJoinClick} >Join Party</Button>
            {joinSelected?this.renderJoinSelected() : <> </>}
            </>
        )
    }
}