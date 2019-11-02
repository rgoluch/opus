import React, { Component } from 'react';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
import { Form, Input } from 'antd';
import { render } from 'react-dom';

interface IJoinPartyInfoProps {

}

interface IJoinPartyInfoState{
    partyName : String,
    phoneNumber : String
}

export default class JoinPartyInfo extends React.Component<IJoinPartyInfoProps,IJoinPartyInfoState>{
    state = {
        partyName : "",
        phoneNumber : ""
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

    render(){
        return(
            <Form>
                <FormItem label="Party Name">
                        <Input type="text" value={this.state.partyName} onChange={this.handlePartyNameChange}/>
                </FormItem>
                <FormItem label="Phone Number">
                        <Input type="text" value={this.state.phoneNumber} onChange={this.handlePhoneNumChange}/>
                </FormItem>
            </Form>
        )
    }
}