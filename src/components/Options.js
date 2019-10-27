import React from 'react'
import Option from './Option'

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions} style={{ marginTop: '10px' }}>
				Remove All
            </button>
            {props.options.length === 0 && <p>Please and an option to get started</p>}
			{props.options.map((option) => (
				<Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
			))}
		</div>
	);
};

export default Options