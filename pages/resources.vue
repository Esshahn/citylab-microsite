<template>
    <div>
		<Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" style="margin-top: 100px">
                    {{ content[lang]['resources']['title'] }}
                </h1>

				<h2 class="subtitle">
					{{ content[lang]['resources']['p1'] }}
				</h2>

				<h3 class="title is-5">
					{{ content[lang]['resources']['specs_title'] }}
				</h3>
				<div class="content">
					{{ content[lang]['resources']['specs_p'] }}
				</div>
				<a :href="content[lang]['resources']['specs_url']" class="button is-color-secondary is-normal">{{ content[lang]['resources']['specs_url_button'] }}</a>	

				<br><br><br>

				<h3 class="title is-5">
					{{ content[lang]['resources']['coworking_title'] }}
				</h3>
				<div class="content">
					{{ content[lang]['resources']['coworking_p'] }}
				</div>
				<a :href="content[lang]['resources']['coworking_url']" class="button is-color-secondary is-normal">{{ content[lang]['resources']['coworking_url_button'] }}</a>	

				<br><br><br>

				<!-- <h3 class="title is-5">
					{{ content[lang]['resources']['board_title'] }}
				</h3>
				<div class="content">
					{{ content[lang]['resources']['board_p'] }}
				</div>
				<a :href="content[lang]['resources']['board_url']" class="button is-color-secondary is-normal">{{ content[lang]['resources']['board_url_button'] }}</a>	

				<br><br><br> -->

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
		name: 'Resources',
        components: {
			Navigation,
			Footer,
			Matomo
		},
		data() {
			return {
				lang: 'de',
				content: content,
				direct: '/resources_en'
			}
		},
		computed: {
        },
    }
</script>

<style lang="scss">
	@import "../assets/style/style.scss";
    h1.title, h3.title {
		color: $color-secondary;
		margin-bottom: 1.5rem;
	}

	h2.subtitle {
		margin-top: 0 !important;
	}

	.content {
		color: $color-primary;
	}

	h3.title.is-5 {
		margin-top: 0 !important;
		margin-bottom: 5px;
	}

	h6.title {
		// color: $color-secondary;
		margin-top: 0 !important;
	}
</style>


