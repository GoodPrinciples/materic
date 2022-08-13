<script>
	import { Button } from '../lib';
</script>

<div class="mb-2">
	<Button label="Primo Bottone" />
	<Button label="Primo Bottone" type="outlined" />
	<Button label="Primo Bottone" type="text" />
</div>

<div class="mb-2">
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" />
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" type="outlined" />
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" type="text" />
</div>

<div class="mb-2">
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" showLabel={false} />
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" type="outlined" showLabel={false} />
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" type="text" showLabel={false} />
</div>

<div class="mb-2">
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" disabled={true} />
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" type="outlined" disabled={true} />
	<Button label="Primo Bottone" icon="fa-brands fa-twitter" type="text" disabled={true} />
</div>
