import './VolunteerCalendar.scss';
import 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

import moment from "moment";
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const DDCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

const eventsDB = [
    {
        title: 'Take exam',
        start: new Date(2022, 3, 29, 1),
        end: new Date(2022, 3, 29, 12)
    },
    {
        title: 'Do audit 3',
        start: new Date(2022, 3, 29),
        end: new Date(2022, 3, 29)
    },
    {
        title: 'Study',
        start: new Date(2022, 3, 29, 13),
        end: new Date(2022, 3, 30, 12)
    }
];

const VolunteerCalendar = () => {
    const [blocks, setBlocks] = useState(eventsDB);

    const handleEventChange = ({event, start, end}) => {
        const idx = blocks.indexOf(event);
        const updatedBlock = { ...event, start, end };

        const blocksToChange = [...blocks];
        blocksToChange.splice(idx, 1, updatedBlock);

        setBlocks(blocksToChange);
    }

    /* Init the variables for the form (stateful) */
    const [state, setState] = useState({
        title: "",
        startTime: "",
        endTime: "",
        reoccur: false,
        date: "",
    });

    /* Function handles changes to the state of the form */
    const handleChange = e => {
        console.log(state);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    /* HTML OF PAGE */
    return (
        <div className='grid-container'>

            {/* Header */}
            <div className='calHeader'>
                <h1>Header</h1>
            </div>

            {/* Calendar */}
            <div className='calendar-body'>
                <DDCalendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '80vh' }}
                    events={blocks}
                    selectable={true}
                    onEventDrop={handleEventChange}
                    onEventResize={handleEventChange}
                />
            </div>

            {/* SideBar / Form */}
            <div className='calForm'>
                <form
                    className={'mt6 w-50 ml-auto mr-auto ba br2 b--black-10 pa3'}>

                    {/* Heading of form */}
                    <h2>Enter your unavailability</h2>

                    {/* Textbox for timeslot/block name/title */}
                    <div className="form-group">
                        <label htmlFor={'Name'}>Title: </label>
                        <input
                            className={'form-control'}
                            type="text"
                            name="title"
                            value={state.title}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Checkbox for recurring events */}
                    <div className="form-group">
                        <label htmlFor={'givenName'}>Recurring:</label>
                        <input
                            type="checkbox"
                            name="reoccur"
                        />
                   </div>

                    {/* Start Time*/}
                    <div className="form-group">
                      <label htmlFor="startTime">Choose a Start Time:</label>
                      <select id="startTime" name="startTime">
                        <option value="test">1am</option>
                        <option value="test">2am</option>
                        <option value="testtest">3am</option>
                        <option value="test">4am</option>
                        <option value="test">5am</option>
                        <option value="testv">6am</option>
                        <option value="test">7am</option>
                        <option value="testtest">8am</option>
                        <option value="test">9am</option>
                        <option value="test">10am</option>
                        <option value="test">11am</option>
                        <option value="testv">12am</option>
                      </select>
                    </div>

                    {/* End Time*/}
                    <div className="form-group">
                      <label htmlFor="endTime">Choose a End Time:</label>
                      <select id="endTime" name="endTime">
                        <option value="test">1am</option>
                        <option value="test">2am</option>
                        <option value="testtest">3am</option>
                        <option value="test">4am</option>
                        <option value="test">5am</option>
                        <option value="testv">6am</option>
                        <option value="test">7am</option>
                        <option value="testtest">8am</option>
                        <option value="test">9am</option>
                        <option value="test">10am</option>
                        <option value="test">11am</option>
                        <option value="testv">12am</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div className="form-group">
                      <label htmlFor="startTime">Choose a Start Time:</label>
                      <select id="startTime" name="startTime">
                        <option value="19th">19th</option>
                      </select>
                    </div>


                    {/* Submit Button */}
                    <input
                      type="submit"
                      value="Submit"
                      className={'btn bg-light-red pv2 ph3 br2 b near-white dim'}
                    />
                </form>
            </div>
        </div>
    );
};

export default VolunteerCalendar;