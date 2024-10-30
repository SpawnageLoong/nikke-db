// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

export type Character = {
	id: string;
	name: string;
	rarity: string;
	burst: number
	element: string;
	weapon: string;
	type: string;
	manufacturer: string;
	squad: string;
	tags: string[];
}

export type Element = {
	id : string;
	name: string;
}

export type Elements = {
	[id: string]: Element;
}

export type Weapon = {
	id: string;
	name: string;
}

export type Weapons = {
	[id: string]: Weapon;
}

export type Skill = {
	name: string;
	description: string;
}

export type Skills = {
	skill_1: Skill;
	skill_2: Skill;
	burst  : Skill;
}
