import PropTypes from 'prop-types';
import { Component } from "react";
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ReactComponent as SearchIcon } from '../icon/search.svg';

export class Searchbar extends Component  {
    state = {
        query: '',
    };

    handleInputChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.query.trim() === '') {
            Notify.failure('Sorry, enter something in search line');
            return;
        }

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        return (
            <Header>
                <Form onSubmit={this.handleSubmit}>
                    <Button type="submit"
                        aria-label="Search">
                        <SearchIcon width="40px"  height="46px"/>
                        <ButtonLabel>Search</ButtonLabel>
                    </Button>
                    <Input autoComplete="off"
                        type="text"
                        value={this.state.query}
                        onChange={this.handleInputChange}
                        autoFocus
                        placeholder="Search images and photos" />
                </Form>
            </Header>
        );
    };
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
