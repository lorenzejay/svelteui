<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Overlay, Text } from '@svelteuidev/core';
<\/script>

<Overlay opacity={0.6} color="#000" zIndex={5}>
	<Text align='center'>This text is now selectable</Text>
</Overlay>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Overlay, Text } from '@svelteuidev/core';
</script>

<Overlay opacity={0.6} color="#000" zIndex={5} center>
	<Text override={{ color: 'white' }}>This text is now selectable</Text>
</Overlay>
