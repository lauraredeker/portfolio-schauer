<script>
	import { Email, Title } from '$lib/Constants'
</script>

<svelte:head>
	<title>{Title} - Privacy Policy</title>
</svelte:head>

<div class="main-container">
	<h1>data privacy</h1>

	<section class="mt-10 md:mt-16">
		<p>
			If you have any questions about this Privacy Policy, you can contact me by
			<a
				class="link"
				href={`mailto:${Email}`}>
				{Email}
			</a>
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Basic Information</h4>
		<p>
			This privacy policy is intended to inform the users of this website about the type, scope and
			purpose of the collection and use of personal data by the website operator Laura Redeker. The
			website operator takes your data protection very seriously and treats your personal data
			confidentially and in accordance with the statutory provisions. It is also possible to use my
			website without providing personal data. Insofar as personal data is collected on this
			website, this is done on a voluntary basis. This data will not be passed on to third parties
			without your express consent. I would like you to know when we collect which data, how we use
			it and what rights to support you have. You will find all the relevant information below.
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Right to information, correction, blocking or deletion</h4>
		<p>
			You have the right to receive information about the data stored about you and its use at any
			time. You also have the right to have your data corrected, blocked or deleted. For information
			about your personal data, please send an e-mail to lauraredeker.ux@gmail.com.
			<a
				class="link"
				href={`mailto:${Email}`}>
				{Email}
			</a>
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Right to object</h4>
		<p>
			You can object to the processing and use of your personal data at any time and for the future
			by sending an e-mail to
			<a
				class="link"
				href={`mailto:${Email}`}>
				{Email}
			</a>
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Changes to the privacy policy</h4>
		<p>
			In the course of the further development of my website and the implementation of new
			technologies, changes to this privacy policy may also become necessary. We therefore recommend
			that you read this privacy policy again from time to time.
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">SSL encryption</h4>
		<p>
			If SSL encryption is activated, the data you transmit to us cannot be read by third parties.
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Links to other providers</h4>
		<p>
			My websites contain links to websites of other providers. We have no influence on whether
			these providers comply with the statutory data protection regulations. You should therefore
			always check the data protection declarations offered there.
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Use of Netlify</h4>
		<p>
			My website is hosted by Netlify. When you visit one of my web pages, your browser therefore
			establishes a connection to a server of Netlify, Inc, 610 22nd Street, Suite 315, San
			Francisco, CA 94107, USA. This server stores some information about the connection in a
			so-called log file. We do not have access to these log files. You can find more information
			about how Netlify processes your data in the <a
				class="link"
				href="https://www.netlify.com/privacy/"
				target="_blank"
				rel="noopener noreferrer">Privacy policy of Netlify.</a
			><br /> Netlify collects the following personal data, which is technically necessary to enable
			you to view the website and to ensure stability and security: IP address, date and time of the
			request, amount of data transferred, access status (HTTP status) and websites from which the
			user's system accesses our website (referrer URL). This data is stored by Netlify for 30 days.
			Further details can be found in the
			<a
				class="link"
				href="https://www.netlify.com/gdpr-ccpa"
				target="_blank"
				rel="noopener noreferrer">Netlify's commitment to protecting your data</a
			>.<br />
		</p>
		<p>
			The storage of this data in log files serves to ensure the functionality and optimization of
			the website and to ensure the security of the information technology systems. Our legitimate
			interest in data processing lies in the aforementioned purposes. The legal basis for the
			collection and temporary storage of the aforementioned data and log files is Art. 6 para. 1
			sentence 1 lit. f) GDPR.
		</p>
	</section>
</div>

<style>
</style>
