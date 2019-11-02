import React, { Component } from 'react';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
import { Form, Input, Button, Row, Col, Layout } from 'antd';
const { Content } = Layout;

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
            <Row>
                <Col span = {50}>
                    <Layout>
                        <Content >
                            <Form>
                                <FormItem label="Party Name">
                                    <Input type="text" value={this.state.partyName} onChange={this.handlePartyNameChange}/>
                                </FormItem>
                                <FormItem label="Phone Number">
                                    <Input type="text" value={this.state.phoneNumber} onChange={this.handlePhoneNumChange}/>
                                </FormItem>
                                <Row type="flex" justify="end" align="middle">
                                    <Button type="primary" shape="round">Join Party!</Button>
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
        const {joinSelected} = this.state;
        return(
            <>
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Button type="danger" size="large" onClick={this.handleJoinClick} >Join Party</Button>
                </Col>
            </Row>
            {joinSelected?this.renderJoinSelected() : <> </>}
            </>
        )
    }
}