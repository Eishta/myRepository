import React, { useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import './cityInput.css';

const cityInput = props => {
    const [value, setValue] = useState('');
    const { onChangeCity } = props;
    useEffect(() => {
        onChangeCity(value);
    }, [value]);
    /**
     * Initial values in the autocomplete
     */
    const autocompleteData = [
        {
            label: 'New York',
            value: 'New York'
        },
        {
            label: 'Los Angeles',
            value: 'Los Angeles'
        },
        {
            label: 'Chicago',
            value: 'Chicago'
        }
    ];

    /**
     * Callback triggered when the user types in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     * @return {Event} Event of JavaScript can be used as usual.
     */
    const onChange = (e) => {
        setValue(e.target.value);
        console.log("The Input Text has changed to ", e.target.value);
    }

    /**
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
     */
    const onSelect = (val) => {
        setValue(val);
        console.log("Option from 'database' selected : ", val);
    }

    /**
     * Define the markup of every rendered item of the autocomplete.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
     * @return {Markup} Component
     */
    const renderItem = (item, isHighlighted) => {
        return (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
            </div>
        );
    }

    /**
     * Define which property of the autocomplete source will be show to the user.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @return {String} val
     */
    const getItemValue = (item) => {
        return `${item.value}`;
    }

    return (
        <div className="container">
        <div className="row input-city" style={{marginBottom: '100px', zIndex: '9'}}>
        <div className="col-7 text-secondary autocomplete">
            <Autocomplete
                style={{ marginBottom: "40px" }}
                getItemValue={getItemValue}
                items={autocompleteData}
                renderItem={renderItem}
                value={value}
                onChange={onChange}
                onSelect={onSelect}
            />
            </div>
      
            <button onClick={props.getWeather}>get</button>
            
        </div>
        </div>
    );

}

export default cityInput;
