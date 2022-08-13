<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let label: string = '';
	export let icon: string = '';
	export let type: string = 'contained';
	export let disabled: boolean = false;
	export let showLabel: boolean = true;

	function handleKeyDown(e: any) {
		if (e.keyCode === 13) {
			clicked();
		}
	}

	function handleClick() {
		clicked();
	}

	function clicked() {
		if (!disabled) {
			dispatch('click');
		}
	}
</script>

<button
	type="button"
	aria-label={label}
	on:click={handleClick}
	on:keydown={handleKeyDown}
	class="p-2 uppercase rounded font-medium"
	class:opacity-50={disabled}
	class:border-2={type !== 'text'}
	class:border-solid={type !== 'text'}
	class:bg-primary={type === 'contained'}
	class:border-primary={type === 'contained' || type === 'outlined'}
	class:text-primary-text={type === 'contained'}
	class:text-primary={type === 'outlined' || type === 'text'}
	class:hover:bg-primary-dark={type === 'contained' && !disabled}
	class:hover:border-primary-dark={type === 'contained' && !disabled}
	class:hover:bg-primary={type === 'outlined' && !disabled}
	class:hover:text-primary-text={type === 'outlined' && !disabled}
	class:hover:border-2={type === 'text' && !disabled}
	class:hover:border-solid={type === 'text' && !disabled}
	class:hover:bg-primary-light={type === 'text' && !disabled}
	class:hover:text-primary-dark={type === 'text' && !disabled}
	class:hover:border-primary-light={type === 'text' && !disabled}
	class:focus:bg-primary-dark={type === 'contained' && !disabled}
	class:focus:border-primary-dark={type === 'contained' && !disabled}
	class:focus:bg-primary={type === 'outlined' && !disabled}
	class:focus:text-primary-text={type === 'outlined' && !disabled}
	class:focus:border-2={type === 'text' && !disabled}
	class:focus:border-solid={type === 'text' && !disabled}
	class:focus:bg-primary-light={type === 'text' && !disabled}
	class:focus:text-primary-dark={type === 'text' && !disabled}
	class:focus:border-primary-light={type === 'text' && !disabled}
>
	{#if icon.length > 0}
		<i class={icon} />
	{/if}
	{#if showLabel}
		<span>{label}</span>
	{/if}
</button>
