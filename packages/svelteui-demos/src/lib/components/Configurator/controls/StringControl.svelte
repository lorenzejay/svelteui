<script lang="ts">
	import type { DemoControlString } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { Input, InputWrapper } from '@svelteuidev/core';

	export let value: string;
	export let label: DemoControlString['label'];

	const dispatch = createEventDispatcher();

	function onInput(e) {
		dispatch('change', e.currentTarget.value);
	}
</script>

<!-- TODO: switch to TextInput when it will be implemented -->
<InputWrapper {label}>
	<Input {value} on:input={onInput} />
</InputWrapper>
