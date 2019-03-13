import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconeButton from '../template/iconButton';

import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyhandler = this.keyhandler.bind(this);
  }

  //metodo que inicia uma funcão assim que o componente é mostrada na tela
  componentWillMount() {
    this.props.search();
  }

  keyhandler(e) {
    const { add, clear, search, description } = this.props;
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description);
    } else if (e.key === 'Escape') {
      clear();
    }
  }

  render() {
    const { add, search, description } = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={this.props.changeDescription}
            onKeyUp={this.keyhandler}
            value={this.props.description}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconeButton
            style="primary"
            icon="plus"
            onClick={() => add(description)}
          />
          <IconeButton
            style="info"
            icon="search"
            onClick={search}
          />
          <IconeButton
            style="default"
            icon="close"
            onClick={this.props.clear}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description }); //todo vem do reduce
const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch); //vincula o evento do action com o form

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
