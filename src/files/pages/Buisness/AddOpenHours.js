import React, { Component } from 'react';

import {
    Table,
    Select,
    Checkbox,
    Tag,
} from 'antd';

import { info, warning } from '../../components/Popups'
const { Option } = Select;
class AddOpenHours extends Component {
    constructor(props) {
        super(props);
        this.state = {

            mondayOpen: null,
            mondayClose: null,
            tuesdayOpen: null,
            tuesdayClose: null,
            wednesdayOpen: null,
            wednesdayClose: null,
            thursdayOpen: null,
            thursdayClose: null,
            fridayOpen: null,
            fridayClose: null,
            saturdayOpen: null,
            saturdayClose: null,
            sundayOpen: null,
            sundayClose: null,
            mondayDisabled: false,
            tuesdayDisabled: false,
            wednesdayDisabled: false,
            thursdayDisabled: false,
            fridayDisabled: false,
            saturdayDisabled: false,
            sundayDisabled: false,
            isModalVisible: false,
            showErrors: false,
            openCloseTimes: {}

        };
        this.closeModal = this.closeModal.bind(this)
    }
    handleOpenTimeChange = (value) => {
        console.log(value);
        console.log(value[0])
        this.setState({
            [value[1]]: value[0]
        }, () => { console.log(this.state); })

    }
    onChangeCloseOnDay = (e) => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.checked,

        })
    }
    setModleVisible() {
        this.setState({
            isModalVisible: true
        });
    }
    closeModal() {
        this.setState({
            isModalVisible: false
        })
    }
    onSubmitOpenHours = () => {
        let openCloseTimes = {
            mondayOpen: (this.state.mondayDisabled) ? 0 : this.state.mondayOpen,
            mondayClose: (this.state.mondayDisabled) ? 0 : this.state.mondayClose,
            tuesdayOpen: (this.state.tuesdayDisabled) ? 0 : this.state.tuesdayOpen,
            tuesdayClose: (this.state.tuesdayDisabled) ? 0 : this.state.tuesdayClose,
            wednesdayOpen: (this.state.wednesdayDisabled) ? 0 : this.state.wednesdayOpen,
            wednesdayClose: (this.state.wednesdayDisabled) ? 0 : this.state.wednesdayClose,
            thursdayOpen: (this.state.thursdayDisabled) ? 0 : this.state.thursdayOpen,
            thursdayClose: (this.state.thursdayDisabled) ? 0 : this.state.thursdayClose,
            fridayOpen: (this.state.fridayDisabled) ? 0 : this.state.fridayOpen,
            fridayClose: (this.state.fridayDisabled) ? 0 : this.state.fridayClose,
            saturdayOpen: (this.state.saturdayDisabled) ? 0 : this.state.saturdayOpen,
            saturdayClose: (this.state.saturdayDisabled) ? 0 : this.state.saturdayClose,
            sundayOpen: (this.state.sundayDisabled) ? 0 : this.state.sundayOpen,
            sundayClose: (this.state.sundayDisabled) ? 0 : this.state.sundayClose,
        }

        let validOpenTimes = true
        for (let [key, value] of Object.entries(openCloseTimes)) {
            // console.log(key, value);
            if (value === null) {
                this.setState({ showErrors: true })
                warning('Some Values are Empty !', 'Please Add opening and close hours or mark as Closed')
                validOpenTimes = false
                break;

            }

        }
        if (validOpenTimes) {
            info('Success', 'Open and Close Hours Added.')
        }


    }
    render() {
        // const formItemLayout = {
        //     labelCol: { span: 6 },
        //     wrapperCol: { span: 14 },
        // };

        const columns = [
            {
                title: 'Day of Week',
                dataIndex: 'day',
                key: 'day',
                // render: (day) => (

                //     <Tag color='geekblue' key={day}>
                //         {day.toUpperCase()}
                //     </Tag>
                // )

            },
            {
                title: 'Open Time',
                dataIndex: 'open',
                key: 'open',
                render: (openTimes, record) => (


                    <Select style={{ width: 220 }} onChange={this.handleOpenTimeChange} defaultValue={this.state[record.stateOpen]} disabled={this.state[record.stateDisabled]} >{
                        openTimes.map(time => {

                            let validity = parseFloat(this.state[record.stateClose]) < parseFloat(time) + 0.1
                            return (
                                <Option key={record.stateOpen + time} value={[time, record.stateOpen]} disabled={validity} >{time} {validity}</Option>
                            )
                        })
                    }
                    </Select>
                )
            },
            {
                title: 'Close Time',
                dataIndex: 'close',
                key: 'close',
                render: (closeTimes, record) => (

                    <Select style={{ width: 220 }} onChange={this.handleOpenTimeChange} defaultValue={this.state[record.stateClose]} disabled={this.state[record.stateDisabled]} >{
                        closeTimes.map(time => {

                            let validity = parseFloat(this.state[record.stateOpen]) + 0.1 > parseFloat(time)

                            return (
                                <Option key={record.stateClose + time} value={[time, record.stateClose]} disabled={validity}>{time}</Option>
                            )
                        })
                    }
                    </Select>

                )
            },
            {
                title: 'Closed',
                key: 'closed',
                render: (text, record) => (
                    <Checkbox name={record.stateDisabled} checked={this.state[record.stateDisabled]} onChange={this.onChangeCloseOnDay} >Closed on {record.day}</Checkbox>
                ),
            },
            {
                title: '',
                key: 'tags',
                dataIndex: 'tags',
                render: (tags, record) => (
                    <>

                        {
                            tags.map(tag => {

                                let validity = ((this.state[record.stateOpen] && this.state[record.stateClose]) | this.state[record.stateDisabled]) ? true : false

                                let color = 'volcano'
                                return (
                                    (this.state.showErrors && !validity) &&
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                    </>
                ),
            },
        ];

        const data = [
            {
                day: 'Monday',

                open: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                close: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                address: 'New York No. 1 Lake Park',
                stateOpen: 'mondayOpen',
                stateClose: 'mondayClose',
                stateDisabled: 'mondayDisabled',
                tags: ['Invalid'],
            },
            {
                day: 'Tuesday',

                open: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                close: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                address: 'New York No. 1 Lake Park',
                stateOpen: 'tuesdayOpen',
                stateClose: 'tuesdayClose',
                stateDisabled: 'tuesdayDisabled',
                tags: ['Invalid'],
            },
            {
                day: 'Wednesday',

                open: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                close: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                address: 'New York No. 1 Lake Park',
                stateOpen: 'wednesdayOpen',
                stateClose: 'wednesdayClose',
                stateDisabled: 'wednesdayDisabled',
                tags: ['Invalid'],
            },
            {
                day: 'Thursday',

                open: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                close: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                address: 'New York No. 1 Lake Park',
                stateOpen: 'thursdayOpen',
                stateClose: 'thursdayClose',
                stateDisabled: 'thursdayDisabled',
                tags: ['Invalid'],
            },
            {
                day: 'Friday',

                open: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                close: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                address: 'New York No. 1 Lake Park',
                stateOpen: 'fridayOpen',
                stateClose: 'fridayClose',
                stateDisabled: 'fridayDisabled',
                tags: ['Invalid'],
            },
            {
                day: 'Saturday',

                open: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                close: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                address: 'New York No. 1 Lake Park',
                stateOpen: 'saturdayOpen',
                stateClose: 'saturdayClose',
                stateDisabled: 'saturdayDisabled',
                tags: ['Invalid'],
            },
            {
                day: 'Sunday',

                open: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                close: ['4.00', '4.30', '5.00', '5.30', '6.00', '6.30', '7.00', '7.30', '8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'],
                address: 'New York No. 1 Lake Park',
                stateOpen: 'sundayOpen',
                stateClose: 'sundayClose',
                stateDisabled: 'sundayDisabled',
                tags: ['Invalid'],
            },
            // {
            //     day: '3',
            //     open: 'Joe Black',
            //     close: 32,
            //     address: 'Sidney No. 1 Lake Park',
            //     tags: ['cool', 'teacher'],
            // },
        ];
        // const selectedRowKeys = this.state.selectedRowKeys
        // // const rowSelection = {
        // //     selectedRowKeys,
        // //     onChange: this.onSelectChange,
        // // };


        return (
            <div>
                <section id="hero" className="about">
                    <div className="container fade-up"
                        data-aos="fade-up"
                    >
                        <div className="section-title">
                            <h2 className="headingText">Configure Your Business</h2>

                            <p>Add Working Hours</p>

                        </div>

                        <Table rowKey={record => record.day} columns={columns} dataSource={data} pagination={false} />

                        <div >
                            <br />
                            <button type="submit" className="blueButton" onClick={this.onSubmitOpenHours}>Submit Open Hours</button>
                        </div>

                        {/* <Modal.info title="Basic Modal" visible={this.state.isModalVisible} onOk={this.closeModal}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal.info> */}
                        {/* <button type="submit" className="blueButton" onClick={this.onSubmitOpenHours}>test</button> */}
                    </div>
                </section>
            </div>
        );
    }
}

export default AddOpenHours;