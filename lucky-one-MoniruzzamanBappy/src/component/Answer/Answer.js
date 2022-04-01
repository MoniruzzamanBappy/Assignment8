import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='q-a'>
            <h1>How React Works?</h1>
            <p>
            <li>React is a JavaScript library and efficient way using declarative code.</li>
            <li>We use declarative code to create components, which is how we display information</li>
            <li>Components accept an arbitrary input with data and return a React element to declare what should appear on screen.</li>
            <li>Individual components declare new states while the app itself remains unchanged.</li>
            <li>Components are made of two main ingredients: state and props. These two ingredients mean we can organise our components in a hierarchical structure that ensures a one-way data flow.</li>
            </p>
            <br />
            <h1>Props vs State</h1>
            <p>
                <li>Props are immutable but state should be managed and result of user events</li>
                <li>By using prpos React do fast reference checks and state is top level component</li>
                <li>Props have better performance but state has worse performance</li>
                <li>Props use this to pass data to child components but sate pass it down with props instead</li>
            </p>
            <br />
            <h1>How useState Works?</h1>
            <p>
                <li>useState enables you to add state to function components.</li>
                <li>Calling React.useState inside a function component generates a single piece of state associated with that component.</li>
                <li>Whereas the state in a class is always an object, with Hooks, the state can be any type.</li>
                <li>Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.</li>
                <li>useState takes the initial value of the state variable as an argument.</li>
            </p>
        </div>
    );
};

export default Answer;