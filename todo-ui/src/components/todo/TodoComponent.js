import React, { Component } from 'react';
import TodoService from '../../api/todo/TodoService';
import AuthenticationService from '../../api/authentication/AuthenticationService';
import moment from 'moment'
import './TodoApp.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';



class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.onValidate = this.onValidate.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            id: parseInt(this.props.match.params.id),
            description: "",
            isDone: false,
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    };


    componentDidMount() {

        if (this.state.id !== -1) {
            this.refreshTodo();
        }
    }

    refreshTodo() {
        TodoService.getTodosbyId(AuthenticationService.getUserName(), this.props.match.params.id)
            .then(response => {
                const { id, description, done, targetDate } = response.data;
                this.setState({
                    id: id, description: description, isDone: done, targetDate: moment(targetDate).format('YYYY-MM-DD')
                })
            })
    }


    handleSelectChange(e) {
        this.setState({
            isDone: e.target.value
        })
    }

    onSubmit(values) {
        const todo = {
            id: this.state.id, description: values.description,
            done: this.state.isDone, targetDate: values.targetDate,
            username: AuthenticationService.getUserName()
        }

        if (this.state.id === -1) {
            console.log("inside create new")
            TodoService.createTodo(todo)
                .then(() => this.props.history.push('/todos'))
        }
        else {

            TodoService.updateTodo(todo)
                .then(() => this.props.history.push('/todos'))
        }
    }

    onValidate(values) {
        let error = {};
        let { description, targetDate } = values;
        if (!description) {
            error.description = 'Enter a description.';
        }
        else if (description.length < 6) {
            error.description = 'Description length should be more than 5.';
        }

        if (!targetDate) {
            error.targetDate = 'TargetDate can not be Empty';
        }
        else if (!moment(targetDate).isValid()) {
            error.targetDate = " Enter a valid date."
        }

        return error;
    }


    render() {
        const { targetDate, description, isDone } = this.state;

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ targetDate, description }} onSubmit={this.onSubmit} validate={this.onValidate}
                        validateOnChange={false} validateOnBlur={false} enableReinitialize
                    >
                        {
                            (props) => (
                                <div>
                                    <Form>
                                        <ErrorMessage name='description' className='alert alert-warning' component='div' />
                                        <ErrorMessage name='targetDate' className='alert alert-warning' component='div' />
                                        <fieldset className='form-group'>
                                            <label>Description</label>
                                            <Field className="form-control" type='text' name='description' />
                                        </fieldset>

                                        <fieldset className="form-group">
                                            <label>Target Dtae</label>
                                            <Field className="form-control" type='date' name='targetDate' />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Completed?</label>
                                            <select
                                                name="isDone"
                                                value={isDone}
                                                onChange={this.handleSelectChange}
                                                className='form-control'
                                            >
                                                <option value="false" label="False" />
                                                <option value="true" label="True" />
                                            </select>
                                        </fieldset>
                                        <button type='submit' className='btn btn-success'>Save</button>
                                    </Form>
                                </div>
                            )

                        }
                    </Formik>

                </div>
            </div>
        )
    }


}

export default TodoComponent;