import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';

export default class HomePage extends React.Component{
    constructor(props: Readonly<{}>){
        super(props);

    }
    render(){
        return(
            <div>
                <Button type="danger">Join Party</Button>
            </div>
        )
    }
}