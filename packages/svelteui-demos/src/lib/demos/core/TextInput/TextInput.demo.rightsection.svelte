<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Loader, TextInput } from '@svelteuidev/core';
<\/script>

<TextInput
    label='Your email'
    placeholder='Your email'
>
    <svelte:fragment slot='rightSection'>
        <Loader color='blue' size='xs' />
    </svelte:fragment>
</TextInput>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Loader, TextInput } from '@svelteuidev/core';
</script>

<Center>
	<TextInput
        label='Your email'
        placeholder='Your email'
    >
        <svelte:fragment slot='rightSection'>
            <Loader color='blue' size='xs' />
        </svelte:fragment>
    </TextInput>
</Center>
