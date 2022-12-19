<script>
	const socials = [
		{
			display: 'AniList',
			href: 'https://anilist.co/user/strniku'
		},
		{
			display: 'Gitea',
			href: 'https://git.cesium.pw/niku'
		},
		{
			display: 'Mastodon',
			href: 'https://mastodon.nl/@niku'
		},
		{
			display: 'LastFM',
			href: 'https://www.last.fm/user/strnophix'
		}
	];
</script>

<svelte:head>
	<title>niku</title>
</svelte:head>

<div class="mx-auto prose">
	<h1 class="pt-14">Hi I'm niku (🥩)</h1>
	<h2>
		Most of my projects are build around the idea of absolute <span class="marked">convenience</span
		>.
	</h2>
	<p>
		My hobbies are coding, consuming japanese culture, drinking tea, mechanical keyboards and
		bricking linux installs. My current daily driver is EndeavourOS BTW.
	</p>
	<ul class="leading-6">
		{#each socials as social}
			<li><a class="social-li" href={social.href} target="_blank">{social.display}</a></li>
		{/each}
	</ul>
</div>

<style>
	.marked {
		@apply bg-red-400 p-1 text-slate-800;
	}

	.social-li {
		@apply p-1;
	}

	.social-li:hover {
		@apply marked;
	}
</style>
