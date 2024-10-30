import type { Element } from '$types';
import defaultJson from './elements/en.json';
import { writable } from 'svelte/store';

const elements = writable<Element[]>(Object.values(defaultJson));

export default elements;
