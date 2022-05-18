import Button from '@enact/sandstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';

const Splash = kind({
	name: 'Splash',

	render: (props: unknown) => (
		<Panel {...props}>
			<Header title="splash page" />
		</Panel>
	)
});

export default Splash;
