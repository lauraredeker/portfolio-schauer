<script>
	import { Email, FullName, Address, Domain } from '$lib/Constants'
</script>

<svelte:head>
	<title>Michael Schauer Generative Art - Privacy Policy</title>
</svelte:head>

<div class="container mx-auto w-full max-w-screen-xl px-5 py-20 md:px-10">
	<h1>Imprint</h1>
	<section class="mt-10">
		<p class="font-semibold text-primary-300">
			Dieses Impressum gilt für alle Angebote unter der Domain {Domain} inklusive aller Subdomains (Unterseiten).
		</p>
		<h4 class="mb-2 mt-10 md:mt-16">Angaben gemäß § 5 TMG:</h4>
		<p>
			{FullName}<br />
			{Address}<br /><br />
		</p>
		<p>
			Email:
			<a
				class="link"
				href={`mailto:${Email}`}
			>
				{Email}
			</a>
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Gültigkeit</h4>
		<p>Dieses Impressum gilt ab dem 1. Februar 2024.</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Hinweis auf EU-Streitschlichtung</h4>
		<p>
			Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:&nbsp;<a
				href="http://ec.europa.eu/consumers/odr"
				data-wpel-link="external"
				target="_blank"
				class="link"
				rel="external noopener noreferrer">http://ec.europa.eu/consumers/odr</a
			><br />
			Meine E-Mail-Adresse finden Sie oben im Impressum.
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Haftung für Inhalte</h4>
		<p>
			Als Diensteanbieterin bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
			den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieterin
			jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
			oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
		</p>
		<p>
			Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
			allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
			dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
			entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Haftung für Links</h4>
		<p>
			Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen
			Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für
			die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
			verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
			Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
			erkennbar.
		</p>
		<p>
			Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
			Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
			werde ich derartige Links umgehend entfernen.
		</p>
	</section>

	<section class="mt-10 md:mt-16">
		<h4 class="mb-2">Urheberrecht</h4>
		<p>
			Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
			deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
			Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
			jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
			privaten, nicht kommerziellen Gebrauch gestattet.
		</p>
		<p>
			Soweit die Inhalte auf dieser Seite nicht von der Betreiberin erstellt wurden, werden die
			Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
			Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
			entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden ich derartige Inhalte
			umgehend entfernen.
		</p>
	</section>
</div>

<style>
</style>
