import moment from 'moment';

export const timeAgo = (created: Date) => moment(created).fromNow();