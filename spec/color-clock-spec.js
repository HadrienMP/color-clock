import * as spec from 'ava';
import { toColor } from '../src/map/color-clock.js';

const someDay = "2020-01-01T";

spec('is bluer with passing seconds - most at 59 seconds', t => {
    t.is(toColor(new Date(someDay + "00:00:59")), "#0000ff")
});
spec('is bluer with passing seconds - least at 0 seconds', t => {
    t.is(toColor(new Date(someDay + "00:00:00")), "#000000")
});
spec('is bluer with passing seconds - inbetween at 30 seconds', t => {
    t.is(toColor(new Date(someDay + "00:00:30")), "#000081")
});
spec('is bluer with passing seconds - inbetween at 10 seconds', t => {
    t.is(toColor(new Date(someDay + "00:00:10")), "#00002b")
});

spec('is greener with passing minutes - most at 59 minutes', t => {
    t.is(toColor(new Date(someDay + "00:59:00")), "#00ff00")
});
spec('is greener with passing minutes - least at 0 minutes', t => {
    t.is(toColor(new Date(someDay + "00:00:00")), "#000000")
});
spec('is greener with passing minutes - inbetween at 30 minutes', t => {
    t.is(toColor(new Date(someDay + "00:30:00")), "#008100")
});

spec('is reder with passing minutes - most at 23 hours', t => {
    t.is(toColor(new Date(someDay + "23:00:00")), "#ff0000")
});
spec('is reder with passing minutes - least at 0 hours', t => {
    t.is(toColor(new Date(someDay + "00:00:00")), "#000000")
});
spec('is reder with passing minutes - inbetween at 12 hours', t => {
    t.is(toColor(new Date(someDay + "12:00:00")), "#850000")
});