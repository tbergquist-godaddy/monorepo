import { generate } from 'shortid';

export default [
  {
    id: generate(),
    date: 'Aug 2011 – Dec 2013',
    detail: {
      title: 'University of Oslo',
      subtitle: 'Programming and Network, Bachelor degree',
    },
  },
  {
    id: generate(),
    date: 'Aug 2004 – Jun 2007',
    detail: {
      title: 'University of Oslo',
      subtitle: 'Economics, Bachelor degree',
    },
  },
  {
    id: generate(),
    date: 'Aug 2000 – Jun 2003',
    detail: {
      title: 'Wang Toppidrett',
      subtitle: 'High school',
    },
  },
];
