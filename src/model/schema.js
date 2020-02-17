import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'login', type: 'string'},
        {name: 'bio', type: 'string'},
        {name: 'avatar', type: 'string'},
      ],
    }),
  ],
});
