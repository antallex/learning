import React, { Component } from 'react';
import { MonstersCardList } from '../CardLists/MonstersCardList';
import SearchBox from '../SearchBox/SearchBox';

class MonsterTesting extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filtredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    // the up const is ----->
    // equivalent of :
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    return (
      <>
        <div className='block justify-between items-center text-center  bg-background-dark'>
          <div className='mb-10 md:mb-20'>
            <SearchBox
              placeholder='Search for Monsters'
              onChange={(e) => this.setState({ searchField: e.target.value })}
            />
          </div>
          <MonstersCardList monsters={filtredMonsters} />
        </div>
      </>
    );
  }
}

export default MonsterTesting;
