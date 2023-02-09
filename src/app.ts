import * as lofi from 'lofi-dx';

export default class App {
  private index: lofi.Index;
  private people: lofi.Search;

  constructor() {
    this.index = lofi.createIndex({
      uidKey: 'id',
      fields: ['title'],
    });

    this.index.addDocuments([
      { id: 3, name: 'Mike', title: 'Chief Forward Impact Engineer 3 Foo' },
      { id: 7, name: 'Joe Doe', title: 'Chief Interactions Liason' },
      { id: 11, name: 'Alice Smith', title: 'UX Designer Bar Baz' },
      { id: 21, name: 'Jamie Black', title: 'Foo Graphic Designer Biz' },
      { id: 32, name: 'Joe Brown', title: 'Senior Software Engineer Barfoo' },
      {
        id: 49,
        name: 'Helen Queen',
        title: 'Staff Dynamic Resonance Orchestrator Foo',
      },
      {
        id: 55,
        name: 'Mary',
        title: 'Queen Product Program Executive Manager Foo',
      },
      {
        id: 101,
        name: 'Alan Smith',
        title: 'Bar Senior Staff Software Engineer 3 Foobar',
      },
    ]);

    this.people = lofi.createSearch(this.index);
    console.log(this.index.toJSON());
  }

  search(queryText: string) {
    const results = this.people.search(queryText);
    console.log(results);
  }
}
