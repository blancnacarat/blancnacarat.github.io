---
layout: contact
title: Contact
description: 'Blanc Nacarat Records Label & Artistic Community'
lang: en
lang-ref: contact
image: null
author: null
sitemap: true
---

<section id="contact">
	<div class="inner">
		<section>
			<form action="https://formspree.io/{{ site.email }}" method="POST">
				<input type="hidden" name="_language" value="{{ page.lang }}" />
				<input type="hidden" name="_format" value="plain" />
				<input type="hidden" name="_next" value="https://blancnacarat.github.io/{{ page.lang }}/{{ page.lang-ref }}/>
				<div class="field half first">
					<label for="name">Nom*</label>
					<input type="text" name="name" required id="name" placeholder="ex: Jean-Pierre" />
				</div>
				<div class="field half">
					<label for="email">Email</label>
					<input type="text" name="_replyto" id="email" placeholder="ex: adresse@gmail.com" />
				</div>
				<div class="field">
					<label for="message">Message*</label>
					<textarea name="message" id="message" style="resize:vertical" vertical" rows="6" required placeholder="ex: Salut ! J'adore ce que vous faites... Hey, je suis artiste: ma plaquette... Bonjour, est-ce qu'on peut se rencontrer..."></textarea>
				</div>
				<section class="actions">
					<li><input type="submit" value="Envoyer" class="special"/></li>
					<br>
					<li><input type="reset" value="Annuler" /></li>
				</section>
			</form>
		</section>
		<section class="split">
			<section>
				<div class="contact-method">
					<span class="icon alt fa-envelope"></span>
					<h3>Email</h3>
					<!-- a href="#">{{ site.email }}</a -->
					<a href="mailto:nacarat.co@gmail.com">{{ site.email }}</a>
				</div>
			</section>