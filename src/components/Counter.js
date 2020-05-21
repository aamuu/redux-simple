import React from 'react';
import {increment, decrement, clear} from "../actions/counterActions";
import {connect} from 'react-redux';

class Counter extends React.Component {
    add = () => {
        this.props.increment();
    };

    remove = () => {
        this.props.decrement();
    };

    clear = () => {
        this.props.clear();
    };

    render() {
        const {count} = this.props.count;
        return (
            <div className="container">
                <div className="my-5 jumbotron jumbotron-fluid">
                    <div className="text-center">
                        <h1><i className="fa fa-cog"/> Redux Counter</h1>
                        <div className="my-4">
                            <button type="button" className="btn btn-dark" onClick={this.remove}>-</button>
                            <h2 className="my-auto">{count}</h2>
                            <button type="button" className="btn btn-dark" onClick={this.add}>+</button>
                        </div>
                        <button onClick={this.clear} type="button" className="mx-auto d-block btn btn-info">Clear
                        </button>
                        <h5 className="my-2 d-inline-block alert alert-dark">This is very simple example of how
                            redux
                            flow
                            works</h5>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps, {increment, decrement, clear})(Counter);