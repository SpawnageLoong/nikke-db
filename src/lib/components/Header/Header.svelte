<script>
	import { onMount } from 'svelte';
	import HeaderButton from './HeaderButton.svelte';
	import XIcon from '@iconify-icons/mdi/close-box';
	import MenuIcon from '@iconify-icons/tabler/menu-2';
	import Icon from '@iconify/svelte';

	let showBorder = false;
	let open = false;

	function checkScroll() {
		showBorder = window.scrollY > 50;
	}

	function close() {
		open = false;
	}

	onMount(() => {
		window.addEventListener('scroll', checkScroll);

		return () => {
			window.removeEventListener('scroll', checkScroll);
		};
	});
</script>

<div
	class="fixed top-0 z-50 w-full border-b backdrop-blur-md duration-150 {open
		? 'h-full bg-dark/60'
		: 'h-16'} {showBorder ? 'border-white/5 bg-dark/30' : 'border-transparent'}"
></div>
<div class="fixed top-0 z-50 hidden h-16 w-full items-center justify-center md:flex">
	<div class="flex h-full w-full max-w-screen-xl items-center px-3">
		<a class="relative ml-10 select-none pb-2 font-semibold text-white" href="/">
			<img src="/icons/logo.png" alt="logo" class="absolute -left-10 h-10 w-auto opacity-80" />
			<span class="text-2xl">Nikke</span>
			<span
				class="absolute -bottom-1 left-2 whitespace-nowrap bg-gradient-to-r from-blue-300 via-purple-300 to-yellow-100 bg-clip-text text-transparent"
				>Skill DB</span
			>
			<span
				class="absolute -right-10 top-2 z-20 ml-5 rounded-md bg-yellow-100 px-1 text-xs text-black"
				>BETA</span
			>
		</a>
		<div class="flex-1" ></div>
		<HeaderButton label="Character" icon="nikke.png" target="/" />
	</div>
</div>
<div class="fixed top-0 z-50 flex h-16 w-full items-center justify-between md:hidden">
	<a class="relative ml-10 select-none pb-2 font-semibold text-white" href="/">
		<img src="/icons/logo.png" alt="logo" class="absolute -left-10 h-10 w-auto opacity-80" />
		<span class="text-2xl">Nikke</span>
		<span
			class="absolute -bottom-1 left-2 whitespace-nowrap bg-gradient-to-r from-blue-300 via-purple-300 to-yellow-100 bg-clip-text text-transparent"
			>Skill DB</span
		>
		<span
			class="absolute -right-10 top-2 z-20 ml-5 rounded-md bg-yellow-100 px-1 text-xs text-black"
			>BETA</span
		>
	</a>
	<button class="mr-4 rounded-md p-3" on:click={() => (open = !open)}>
		<Icon class="text-white" icon={open ? XIcon : MenuIcon} height={24} />
	</button>
</div>
{#if open}
	<div class="fixed top-24 z-50 flex flex-col justify-start gap-4 px-8">
		<HeaderButton
			{close}
			label="Characters"
			icon="nikke.png"
			target="/"
		/>
	</div>
{/if}