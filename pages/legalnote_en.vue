<template>
    <div>
		<Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" style="margin-top: 100px">
                    {{ content[lang]['imprint']['title'] }}
                </h1>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['imprint']['info']['title'] }}
				</h3>

				<p class="content" v-html="content[lang]['imprint']['info']['p1']"></p>
				<a style="cursor: auto;" :href="`mailto:${content[lang]['imprint']['info']['mail_url']}`" class="content"> {{ content[lang]['imprint']['info']['mail_name'] }} </a>

				<!-- <p class="content" v-html="content[lang]['imprint']['info']['p2']"></p> -->

				<p class="content">
					{{ content[lang]['imprint']['info']['p3'] }}
				</p>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['imprint']['boardmembers']['title'] }}
				</h3>

				<p class="content">
					{{ content[lang]['imprint']['boardmembers']['p'] }}
				</p>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['imprint']['disclaimer']['title'] }}
				</h3>

				<p class="content">
					{{ content[lang]['imprint']['disclaimer']['p1'] }}
				</p>
				<p class="content">
					{{ content[lang]['imprint']['disclaimer']['p2'] }}
				</p>
				<p class="content">
					{{ content[lang]['imprint']['disclaimer']['p3'] }}
				</p>
				<p class="content">
					{{ content[lang]['imprint']['disclaimer']['p4'] }}
				</p>
				<p class="content">
					{{ content[lang]['imprint']['disclaimer']['p5'] }}
				</p>
				<p class="content">
					{{ content[lang]['imprint']['disclaimer']['p6'] }}
				</p>
				<p class="content">
					{{ content[lang]['imprint']['disclaimer']['p7'] }}
				</p>

				<Matomo/>



            </div>
        </section>
		<Footer :lang="lang" :content="content"/>
	</div>
</template>

<script>
	import {
  		content as content
	} from '../assets/content.js';

    import Navigation from '../components/Navigation.vue';
	import Footer from '../components/Footer.vue';
	import Matomo from '../components/Matomo.vue';

    export default {
        components: {
			Navigation,
			Footer,
			Matomo
		},
		data() {
			return {
				lang: 'en',
				content: content,
				direct: '/legalnote'
			}
		},
    }
</script>

<style lang="scss">
	@import "../assets/style/style.scss";
    h1.title, h3.title {
		color: $color-secondary;
	}

	a.content {
		text-decoration: underline;
		color: $color-secondary;
		cursor: pointer;
	}

	div.content {
		color: $color-primary;
	}

</style>


