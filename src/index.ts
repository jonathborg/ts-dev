import { DateTime } from 'luxon';

export function toDateId(date: Date) {
    return DateTime.fromJSDate(date).toFormat('yyyyMMddHHmmss');
}
