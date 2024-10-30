<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import '../app.css';
	import Icon from '@iconify/svelte';
  import GithubIcon from '@iconify-icons/mdi/github';
	let { children } = $props();
</script>

<Header />
<div class="flex min-h-screen flex-col items-center bg-gradient-to-b from-slate-900 from-80% to-violet-950">
	<div class="w-full pt-20 max-w-screen-xl px-3">
		{@render children()}
	</div>
	<div class="flex-1" ></div>
	<footer
			class="mt-4 flex w-full max-w-screen-xl items-center justify-between px-3 py-4 text-white/40"
		>
			<div>
				<p>Nikke Skill DB is not affiliated with Shift Up or Level Infinite.</p>
				<p>
					Nikke: Goddess of Victory, game content and materials are trademarks and copyrights of Shift Up Corporation.
				</p>
			</div>
			<a
				href="https://github.com/SpawnageLoong/nikke-skill-db"
				class="duration-150 hover:text-white"
				target="_blank"
			>
				<Icon icon={GithubIcon} height={40} />
			</a>
	</footer>
</div>
